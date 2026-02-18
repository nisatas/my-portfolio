# GitHub Contributors'dan Cursor'ı Kaldırma

Cursor, commit mesajlarındaki "Co-authored-by: Cursor" yüzünden Contributors'da görünüyor. Aşağıdaki işlemle **tüm commit mesajlarından** bu satırı siliyoruz; böylece Cursor listeden düşer.

## Önemli

- **Geçmiş değişir** (force push). Repoyu başka biri kullanmıyorsa sorun olmaz.
- Proje klasöründe **yedek** almak istersen: Üst klasörde `nisa-portfolio-backup` gibi bir kopya al.

---

## Adımlar (Git Bash veya terminal)

Proje klasöründe (içinde `frontend`, `backend` olan yerde) sırayla:

```bash
# 1. Tüm commit mesajlarından "Co-authored-by: Cursor" satırını sil
git filter-branch -f --msg-filter 'sed "/Co-authored-by: Cursor/d"' -- --all

# 2. GitHub'a zorla gönder (mevcut main geçmişi değişir)
git push --force origin main
```

**Not:** Windows'ta `sed` yoksa Git Bash kullan (Git ile gelir). Veya WSL/VS Code terminalinde çalıştır.

---

## Alternatif: Tek commit (geçmişi silmek istersen)

Tüm geçmişi silip tek commit ile başlamak istersen:

```bash
# Yeni bir branch, geçmiş olmadan
git checkout --orphan new-main
git add .
git commit -m "Portfolio: frontend, backend, Render deploy"
git branch -D main
git branch -m main
git push --force origin main
```

Bu yöntemde eski commit'ler tamamen gider; sadece sen tek contributor olursun.

---

İşin bitince bu dosyayı silebilir veya commit'leme.
