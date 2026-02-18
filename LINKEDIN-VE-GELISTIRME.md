# Portföy: LinkedIn Öncesi Kontrol Listesi ve Geliştirme Önerileri

## 🔗 LinkedIn’e paylaşmadan önce dikkat etmen gerekenler

### 1. **İçerik ve doğruluk**
- [ ] Tüm deneyim tarihleri, şirket adları ve pozisyonlar güncel mi?
- [ ] E-posta, GitHub, LinkedIn linkleri doğru ve tıklanabilir mi?
- [ ] CV (cv.pdf) güncel mi? İndirince doğru dosya açılıyor mu?
- [ ] Sertifika görselleri yüklü ve düzgün görünüyor mu? (certificate-ankara.png, certificate-ai-weekend.jpg)
- [ ] Proje linkleri (GitHub, demo) çalışıyor mu? 404 vermiyor mu?

### 2. **SEO ve paylaşım önizlemesi**
- [ ] Sayfa başlığı (title) anlamlı: "Nisa Ataş | Full Stack Developer" *(index.html’de eklendi)*
- [ ] Meta description var mı? *(index.html’de eklendi – LinkedIn’de link altında görünür)*
- [ ] Open Graph (og:image): Link paylaşınca küçük resim çıksın diye **public** klasörüne 1200x630 px civarı bir görsel koy (örn. `photo.jpg`). Canlı sitede `og:image` için tam URL kullanmak daha iyidir (örn. `https://siten.com/photo.jpg`).

### 3. **Performans ve teknik**
- [ ] Site production build ile hızlı açılıyor mu? (`npm run build` + test)
- [ ] Mobilde düzgün görünüyor mu? (menü, formlar, butonlar)
- [ ] HTTPS ile yayındasın mı? (Render/Vercel varsayılan olarak verir)
- [ ] API key’ler sadece backend’de; frontend’de `.env` ile API key expose etme (production’da backend kullan)

### 4. **Profesyonel izlenim**
- [ ] Yazım hataları yok (TR/EN metinleri bir kez gözden geçir)
- [ ] Fotoğrafın net ve profesyonel
- [ ] NisaBot cevapları tutarlı ve seni iyi temsil ediyor (hobi, deneyim, iletişim)

### 5. **Link paylaşımı**
- [ ] Paylaşacağın URL tek ve kalıcı (örn. `https://nisa-portfolio.onrender.com` veya kendi domain’in)
- [ ] LinkedIn profilinde “Website” alanına bu linki yaz

---

## 🚀 Siteyi nasıl geliştirebilirsin?

### Kısa vadede (hemen yapılabilecekler)
- **Meta etiketleri:** `index.html` veya React Helmet ile `description`, `og:title`, `og:description`, `og:image` ekle; link paylaşımı daha güzel görünsün.
- **Favicon / PWA:** Şu an bug.svg var; istersen kendi ikonunu veya “N” harfi kullan. İleride PWA (offline, “Add to Home Screen”) ekleyebilirsin.
- **Analytics:** Ziyaret sayısı ve kaynak görmek için (isteğe bağlı) Google Analytics veya Plausible ekle; LinkedIn’den ne kadar tıklama geldiğini görürsün.
- **404 sayfası:** Yanlış URL’de boş sayfa yerine “Sayfa bulunamadı” + ana sayfaya link.

### Orta vadede (içerik ve etkileşim)
- **Blog / yazılar:** “Öğrendiklerim”, “Proje hikayeleri” gibi kısa yazılar; SEO ve “seni tanıma” için güçlü.
- **Proje detay sayfaları:** Her proje için ayrı sayfa: ekran görüntüleri, tech stack, senin rolün, linkler.
- **Testimonials:** Staj/mentor/arkadaşlardan 1–2 cümlelik referans (istersen “İleride ekleyeceğim” de yazabilirsin).
- **Dark/Light tema:** Zaten var; tercihin cookie/localStorage’da saklansın ki tekrar gelince aynı kalsın.

### Uzun vadede (teknik ve fark yaratan özellikler)
- **Erişilebilirlik (a11y):** Klavye ile gezinme, odak göstergeleri, `aria-label`; görme engelli kullanıcılar ve SEO için iyi.
- **Çok dilli SEO:** TR/EN için ayrı meta ve başlık; `hreflang` ile dil seçimine göre doğru sayfa önerilsin.
- **Performans:** Büyük görselleri sıkıştır/WebP; lazy loading zaten var, gerekirse critical CSS.
- **Backend güvenliği:** Rate limit (spam önleme), contact form’da basit CAPTCHA veya honeypot.

---

## ✅ Özet: LinkedIn’e çıkmadan önce

1. İçeriği güncelle ve linkleri test et.  
2. Meta description + og:image ekle (paylaşım önizlemesi).  
3. Mobilde dene; production build ile hız kontrolü yap.  
4. API key’i sadece backend’de kullan (production’da).  
5. Tek bir “resmi” URL belirle ve LinkedIn’e onu yaz.

Bu listeyi takip edersen hem teknik hem de profesyonel açıdan güvenle LinkedIn’de paylaşabilirsin.
