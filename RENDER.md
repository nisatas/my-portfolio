# Render’da deploy (frontend + backend)

Bu proje **Render** ile hem frontend hem backend yayınlanabilir. NisaBot ve iletişim formu çalışır.

## 1. Kodu GitHub’a pushla

`render.yaml` dosyası repo kökünde olmalı. Değişiklikleri pushladıktan sonra devam et.

## 2. Render’da Blueprint ile proje oluştur

1. **https://dashboard.render.com** → Giriş yap.
2. **New +** → **Blueprint** seç.
3. GitHub repo’nu bağla: **nisatas/my-portfolio** (veya kullandığın repo).
4. Branch: **main**.
5. Render `render.yaml` dosyasını bulacak; **Apply** de.

İki servis oluşacak:

- **nisa-portfolio-backend** (Web Service)
- **nisa-portfolio** (Static Site)

## 3. Backend’i ayarla ve deploy et

1. **nisa-portfolio-backend** servisine tıkla.
2. **Environment** bölümüne git.
3. Şu değişkenleri ekle:

   | Key              | Value                    |
   |------------------|--------------------------|
   | `GEMINI_API_KEY` | (Google AI Studio’dan aldığın API key) |
   | `FRONTEND_ORIGIN`| Şimdilik boş bırak; frontend URL’ini sonra ekleyeceksin. |

4. **Save Changes** → **Manual Deploy** → **Deploy latest commit**.
5. Deploy bitince servis sayfasındaki **URL**’i kopyala (örn. `https://nisa-portfolio-backend.onrender.com`).

## 4. Frontend’i backend’e bağla

1. **nisa-portfolio** (Static Site) servisine tıkla.
2. **Environment** bölümüne git.
3. Şu değişkeni ekle:

   | Key             | Value |
   |-----------------|--------|
   | `VITE_API_URL`  | Backend URL’i (örn. `https://nisa-portfolio-backend.onrender.com`) – **sonunda / olmasın**. |

4. **Save Changes** → **Manual Deploy** → **Deploy latest commit**.

## 5. Backend’e frontend URL’ini ver (CORS)

1. Tekrar **nisa-portfolio-backend** servisine git.
2. **Environment** → `FRONTEND_ORIGIN` değerini güncelle:
   - Frontend URL’i (örn. `https://nisa-portfolio.onrender.com`).
3. **Save Changes** → **Manual Deploy** (veya bir sonraki push’ta otomatik deploy olur).

## Özet

| Servis   | URL örneği                              | Ne yapar          |
|----------|------------------------------------------|-------------------|
| Frontend | `https://nisa-portfolio.onrender.com`    | Portföy sitesi   |
| Backend  | `https://nisa-portfolio-backend.onrender.com` | API (NisaBot, form) |

- **NisaBot** ve **iletişim formu** backend sayesinde çalışır.
- Ücretsiz planda backend bir süre kullanılmazsa uyur; ilk istekte 30–50 sn açılabilir.

## Sorun giderme

- **CORS hatası:** Backend’deki `FRONTEND_ORIGIN` tam olarak frontend URL’in olmalı (https ile, sonunda / yok).
- **Form / NisaBot çalışmıyor:** Frontend’deki `VITE_API_URL` backend URL’i olmalı; değiştirdikten sonra frontend’i yeniden deploy et.
