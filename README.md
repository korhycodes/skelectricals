# SK Electricals

SK Electricals is a React and Vite website for electrical engineering, CCTV installation, electric fencing, gate automation, panel upgrades, wiring, and emergency repairs.

The project contains:

- A responsive React frontend
- Interactive service, project, estimator, and safety audit sections
- Booking and inquiry forms
- A Node.js API for submissions
- MongoDB Atlas persistence
- Optional email notifications through Resend
- Email notifications through Resend
- A vertical 9:16 project video carousel

## Requirements

- Node.js 18.18 or newer
- npm
- MongoDB Atlas for production submissions

## Local Development

Install dependencies:

```bash
npm install
```

Run only the frontend:

```bash
npm run dev
```

Run the frontend and API together:

```bash
npm run dev:full
```

The frontend runs at `http://localhost:3000` and the API runs at `http://localhost:8787`.

The Vite development proxy forwards `/api` requests to the local API. Copy [.env.example](.env.example) to `.env.local` when you need local environment variables.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run api` | Start the backend API |
| `npm run dev:full` | Start frontend and backend together |
| `npm run lint` | Run the TypeScript check |
| `npm run build` | Build the production frontend |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Publish the frontend to GitHub Pages |

## API

The backend exposes:

- `GET /api/health` - health check
- `POST /api/bookings` - save a technician booking
- `POST /api/inquiries` - save a contact inquiry

Submissions are validated server-side, assigned a reference number, saved to MongoDB, and then sent to the configured notification providers.

## MongoDB Atlas

Create an Atlas cluster, database user, and network access rule. Then configure the API with:

```text
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=sk-electricals
MONGODB_COLLECTION=submissions
```

Never commit `MONGODB_URI` or any other secret to Git.

## Notifications

Email notifications use Resend:

```text
RESEND_API_KEY=re_...
NOTIFICATION_EMAIL_TO=business@example.com
NOTIFICATION_FROM_EMAIL=SK Electricals <notifications@your-domain.com>
```

The sender email domain must be verified with Resend.

## Render Deployment

The repository includes [render.yaml](render.yaml), which defines the API and frontend services.

1. Push the repository to GitHub.
2. In Render, choose **New > Blueprint** and select the repository.
3. Render creates the `skelectricals-api` web service and `skelectricals-web` static site.
4. Add the secret environment variables from the MongoDB and Notifications sections to the API service.
5. Set `ALLOWED_ORIGINS` to the real frontend origin.
6. Confirm the API health check:

```text
https://skelectricals-api.onrender.com/api/health
```

The frontend build uses:

```text
VITE_API_URL=https://skelectricals-api.onrender.com/api
```

The current Render configuration uses the free plan. MongoDB Atlas provides persistent submission storage; do not rely on the Render filesystem for customer records.

## Project Videos

Place vertical videos in `src/assets/videos/` and import them in [src/data/projectsData.ts](src/data/projectsData.ts):

```ts
import projectOneVideo from '../assets/videos/project-1.mp4';
```

Add the imported video to a project:

```ts
video: projectOneVideo,
```

Use `.mp4` video files in a 9:16 format, preferably 1080 x 1920. Videos autoplay muted, loop, and play inline in the project carousel. Existing project images remain the fallback when no video is provided.

## Security Notes

- Keep `.env`, `.env.local`, API keys, database credentials, and notification credentials out of Git.
- Use a specific production frontend URL in `ALLOWED_ORIGINS`.
- Review MongoDB Atlas network access before launch.
- Customer submissions should be accessed only by authorized business staff.
