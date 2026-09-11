const configuredApiUrl = import.meta.env.VITE_API_URL;
const apiBaseUrl = (import.meta.env.DEV ? configuredApiUrl || '/api' : configuredApiUrl || 'https://skelectricals.onrender.com/api').replace(/\/$/, '');

export async function submitApiRequest<T>(path: string, payload: unknown): Promise<T> {
  const response = await fetch(`${apiBaseUrl}/${path.replace(/^\//, '')}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || 'The request could not be submitted.');
  return result as T;
}