# Nisa Portfolio

Kişisel portföy sitesi. Frontend (React + Vite) ve Backend (Node.js + Express) ayrı klasörlerdedir.

## Yapı

- **frontend/** – Portföy arayüzü (React, Vite, Tailwind)
- **backend/** – API (iletişim formu, NisaBot proxy)

## Çalıştırma

### Backend

```bash
cd backend
npm install
cp .env.example .env
# .env içine GEMINI_API_KEY ekle (NisaBot için)
npm run dev
```

**Windows (PowerShell):** `cp` yerine `Copy-Item .env.example .env` kullanabilirsin.

Backend: http://localhost:3001

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

Backend ile birlikte kullanmak için `frontend/.env` oluşturup `VITE_API_URL=http://localhost:3001` ekle (örnek: `frontend/.env.example`).

## Frontend'i backend'e bağlama

- **NisaBot:** `frontend/.env` içinde `VITE_API_URL=http://localhost:3001` yoksa chat doğrudan Gemini'ye gider (tarayıcıda API key gerekir). Tanımlıysa istekler backend'e gider, API key sunucuda kalır.
- **İletişim formu:** `VITE_API_URL` tanımlıysa form `POST /api/contact` ile backend'e gönderilir; yoksa Gmail açılır.

## Ortam dosyaları

| Konum | Açıklama |
|-------|----------|
| `backend/.env` | `GEMINI_API_KEY`, `PORT`, `FRONTEND_ORIGIN` — `backend/.env.example` kopyala. |
| `frontend/.env` | `VITE_API_URL` (backend adresi) — istege bagli; `frontend/.env.example` ornek. |

`.env` dosyaları `.gitignore` ile takip dışındadır; **asla commit etme.**

## Proje yapısı

```
nisa-portfolio/
├── frontend/              # React + Vite
│   ├── public/            # Statik dosyalar (favicon, cv.pdf)
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
├── RENDER.md              # Render deploy adimlari
└── README.md
```

## Deploy

- **Render (önerilen):** Frontend + backend birlikte; NisaBot ve iletişim formu çalışır. Adım adım: **RENDER.md**
- **Vercel (sadece frontend):** Root Directory = `frontend`. Backend yayında olmaz; NisaBot ve form API'si çalışmaz.
