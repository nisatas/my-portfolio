# GitHub'da frontend/ ve backend/ klasörlerinin görünmesi

## Sorun
İlk push'ta sadece `README.md` eklendi. Sonra `git add .` yaptın ama **commit ve push yapılmadı** — bu yüzden GitHub'da hâlâ sadece README görünüyor.

## Çözüm (proje klasöründe terminal açıp sırayla)

```powershell
# 1. Proje kökünde olduğundan emin ol (frontend ve backend yan yana görünmeli)
cd C:\Users\Nisa\OneDrive\Masaüstü\Workintech\nisa-portfolio\nisa-portfolio

# 2. Durumu kontrol et
git status

# 3. Tüm proje dosyalarını ekle (frontend, backend, .gitignore vb.)
git add backend frontend .gitignore eslint.config.js README.md

# 4. Commit et
git commit -m "Add frontend and backend"

# 5. GitHub'a gönder
git push
```

Bundan sonra GitHub'da `backend/`, `frontend/` klasörleri ve diğer dosyalar görünecek.

---

**Not:** `git status` çıktısında `../../../../../` ile başlayan garip yollar görüyorsan, büyük ihtimalle terminal başka bir dizinde açıktır. Önce `cd` ile proje klasörüne girip sonra yukarıdaki komutları çalıştır.
