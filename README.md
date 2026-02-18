# Nisa Portfolio

Personal portfolio site. Frontend (React + Vite) and Backend (Node.js + Express) are in separate folders.

## Structure

- **frontend/** – Portfolio UI (React, Vite, Tailwind)
- **backend/** – API (contact form, NisaBot proxy)

## Running locally

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Add GEMINI_API_KEY to .env (for NisaBot)
npm run dev
```

**Windows (PowerShell):** Use `Copy-Item .env.example .env` instead of `cp`.

Backend: http://localhost:3001

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

To use with the backend, create `frontend/.env` and add `VITE_API_URL=http://localhost:3001` (see `frontend/.env.example`).

## Connecting frontend to backend

- **NisaBot:** If `VITE_API_URL=http://localhost:3001` is not set in `frontend/.env`, chat talks to Gemini directly (API key needed in the browser). If set, requests go to the backend and the API key stays on the server.
- **Contact form:** If `VITE_API_URL` is set, the form is sent via `POST /api/contact` to the backend; otherwise Gmail opens.

## Environment files

| Location | Description |
|----------|-------------|
| `backend/.env` | `GEMINI_API_KEY`, `PORT`, `FRONTEND_ORIGIN` — copy from `backend/.env.example`. |
| `frontend/.env` | `VITE_API_URL` (backend URL) — optional; see `frontend/.env.example`. |

`.env` files are in `.gitignore`; **do not commit them.**

## Project structure

```
nisa-portfolio/
├── frontend/              # React + Vite
│   ├── public/            # Static assets (favicon, cv.pdf)
│   ├── src/
│   │   ├── api.ts         # VITE_API_URL → backend
│   │   ├── App.tsx, main.tsx, index.css
│   │   ├── components/, context/, config/, data/, hooks/
│   ├── .env.example
│   ├── package.json, vite.config.ts, vercel.json
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   └── routes/        # contact, chat
│   ├── .env.example
│   ├── package.json
├── render.yaml            # Render Blueprint
├── RENDER.md              # Render deploy steps
└── README.md
```

## Deploy

- **Render (recommended):** Frontend and backend together; NisaBot and contact form work. Step-by-step: **RENDER.md**
- **Vercel (frontend only):** Set Root Directory to `frontend`. Backend is not deployed; NisaBot and form API will not work.
