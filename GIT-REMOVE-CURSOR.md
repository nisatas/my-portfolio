# GitHub'da Cursor imzasını kaldırma

Son commit mesajındaki "Co-authored-by: Cursor" satırını silmek için:

## Proje klasöründe terminal aç (PowerShell veya CMD)

```bash
# 1. Son commit'in mesajını düzenle (Co-authored-by satırını sil)
git commit --amend -m "Add Render deploy: render.yaml, RENDER.md, update README"

# 2. GitHub'a zorla gönder (geçmiş değişir, tek kişiysen sorun olmaz)
git push --force origin main
```

**Not:** `--force` kullandığın için GitHub'daki mevcut main dalının geçmişi değişir. Repo'yu başkası da kullanmıyorsa güvenle yapabilirsin.

## Gelecek commit'lerde Cursor eklenmesin

Cursor IDE bazen commit'lere kendini "Co-authored-by" ekler. Bunu kapatmak için:

- Cursor'da **Settings** (veya File → Preferences) → **Cursor Settings** veya **Features** bölümünde "Git: Co-author" / benzeri bir seçeneği kapat.
- Veya commit yaparken mesaj kutusundan "Co-authored-by" satırını sil.

İşin bitince bu dosyayı (GIT-REMOVE-CURSOR.md) silebilir veya commit'leme.
