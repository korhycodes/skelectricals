import { createServer } from 'node:http';
import { randomInt, randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';

const port = Number(process.env.PORT || 8787);
const allowedOrigins = new Set((process.env.ALLOWED_ORIGINS || process.env.ALLOWED_ORIGIN || '').split(',').map((origin) => origin.trim()).filter(Boolean));
const mongoUri = process.env.MONGODB_URI;
const mongoDatabase = process.env.MONGODB_DB || 'sk-electricals';
const mongoCollection = process.env.MONGODB_COLLECTION || 'submissions';
const mongoClient = mongoUri ? new MongoClient(mongoUri) : null;
let submissionsCollectionPromise;
const rateLimitWindowMs = 60_000;
const rateLimitMax = 10;
const requestCounts = new Map();

const allowedMethods = new Set(['POST']);
const requiredFields = {
  booking: ['fullName', 'phone', 'address', 'serviceType', 'propertyType', 'urgency'],
  inquiry: ['name', 'phone', 'serviceInterest'],
};

async function getSubmissionsCollection() {
  if (!mongoClient) throw new Error('MONGODB_URI is not configured');
  if (!submissionsCollectionPromise) {
    submissionsCollectionPromise = mongoClient.connect().then((client) => {
      return client.db(mongoDatabase).collection(mongoCollection);
    });
  }
  return submissionsCollectionPromise;
}

async function saveSubmission(submission) {
  const collection = await getSubmissionsCollection();
  await collection.insertOne(submission);
}

function formatNotification(submission) {
  const details = submission.type === 'booking'
    ? [
        `Name: ${submission.fullName}`,
        `Phone: ${submission.phone}`,
        `Email: ${submission.email || 'Not provided'}`,
        `Address: ${submission.address}`,
        `Service: ${submission.serviceType}`,
        `Property: ${submission.propertyType}`,
        `Urgency: ${submission.urgency}`,
        `Preferred date: ${submission.preferredDate || 'Not provided'}`,
        `Description: ${submission.description || 'Not provided'}`,
      ]
    : [
        `Name: ${submission.name}`,
        `Phone: ${submission.phone}`,
        `Email: ${submission.email || 'Not provided'}`,
        `Service: ${submission.serviceInterest}`,
        `Message: ${submission.message || 'Not provided'}`,
      ];
  return `New ${submission.type} - ${submission.reference}\n\n${details.join('\n')}\n\nSubmitted: ${submission.createdAt}`;
}

async function sendEmailNotification(submission) {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL_TO || !process.env.NOTIFICATION_FROM_EMAIL) return;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.NOTIFICATION_FROM_EMAIL,
      to: [process.env.NOTIFICATION_EMAIL_TO],
      subject: `New ${submission.type}: ${submission.reference}`,
      text: formatNotification(submission),
    }),
  });
  if (!response.ok) throw new Error(`Resend returned ${response.status}`);
}

async function notifyBusiness(submission) {
  try {
    await sendEmailNotification(submission);
  } catch (error) {
    console.error('Email notification failed:', error);
  }
}

function sendJson(response, status, body) {
  const origin = response.req?.headers.origin;
  const corsOrigin = origin && (allowedOrigins.size === 0 || allowedOrigins.has(origin)) ? origin : allowedOrigins.size === 0 ? '*' : '';
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    ...(corsOrigin ? { 'Access-Control-Allow-Origin': corsOrigin, Vary: 'Origin' } : {}),
  });
  response.end(JSON.stringify(body));
}

function getClientAddress(request) {
  return request.headers['x-forwarded-for']?.split(',')[0].trim() || request.socket.remoteAddress || 'unknown';
}

function isRateLimited(request) {
  const now = Date.now();
  const address = getClientAddress(request);
  const recent = (requestCounts.get(address) || []).filter((time) => now - time < rateLimitWindowMs);
  recent.push(now);
  requestCounts.set(address, recent);
  return recent.length > rateLimitMax;
}

async function parseBody(request) {
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 25_000) throw new Error('Payload is too large');
  }
  if (!body) return {};
  return JSON.parse(body);
}

function validateSubmission(type, body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return 'A JSON object is required';
  for (const field of requiredFields[type]) {
    if (typeof body[field] !== 'string' || body[field].trim().length === 0) return `${field} is required`;
  }
  if (body.email && (typeof body.email !== 'string' || !/^\S+@\S+\.\S+$/.test(body.email))) return 'email is invalid';
  if (body.phone.trim().length < 7 || body.phone.trim().length > 30) return 'phone is invalid';
  return null;
}

function sanitizeSubmission(type, body) {
  const fields = type === 'booking'
    ? ['fullName', 'phone', 'email', 'address', 'serviceType', 'propertyType', 'urgency', 'preferredDate', 'description']
    : ['name', 'phone', 'email', 'serviceInterest', 'message'];
  return Object.fromEntries(fields.map((field) => [field, typeof body[field] === 'string' ? body[field].trim().slice(0, 2_000) : '']));
}

async function handleSubmission(request, response, type) {
  if (isRateLimited(request)) return sendJson(response, 429, { error: 'Too many requests. Please try again later.' });
  let body;
  try {
    body = await parseBody(request);
  } catch {
    return sendJson(response, 400, { error: 'Request body must be valid JSON and under 25KB.' });
  }
  const validationError = validateSubmission(type, body);
  if (validationError) return sendJson(response, 400, { error: validationError });

  const submission = {
    id: randomUUID(),
    reference: `SKE-${randomInt(100000, 1_000_000)}`,
    type,
    createdAt: new Date().toISOString(),
    ...sanitizeSubmission(type, body),
  };
  try {
    await saveSubmission(submission);
    await notifyBusiness(submission);
    return sendJson(response, 201, { reference: submission.reference, id: submission.id });
  } catch (error) {
    console.error('Could not save submission:', error);
    return sendJson(response, 503, { error: 'Submissions are temporarily unavailable. Please call us directly.' });
  }
}

const server = createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    const origin = request.headers.origin;
    const corsOrigin = origin && (allowedOrigins.size === 0 || allowedOrigins.has(origin)) ? origin : allowedOrigins.size === 0 ? '*' : '';
    response.writeHead(204, {
      ...(corsOrigin ? { 'Access-Control-Allow-Origin': corsOrigin, Vary: 'Origin' } : {}),
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return response.end();
  }
  const route = new URL(request.url, `http://${request.headers.host}`).pathname;
  if (request.method === 'GET' && route === '/api/health') return sendJson(response, 200, { status: 'ok' });
  if (!allowedMethods.has(request.method)) return sendJson(response, 405, { error: 'Method not allowed' });
  if (route === '/api/bookings') return handleSubmission(request, response, 'booking');
  if (route === '/api/inquiries') return handleSubmission(request, response, 'inquiry');
  return sendJson(response, 404, { error: 'Not found' });
});

server.listen(port, '0.0.0.0', () => console.log(`SK Electricals API listening on port ${port}`));

async function closeMongoConnection() {
  if (mongoClient) await mongoClient.close();
}

process.once('SIGTERM', async () => {
  await closeMongoConnection();
  process.exit(0);
});

process.once('SIGINT', async () => {
  await closeMongoConnection();
  process.exit(0);
});