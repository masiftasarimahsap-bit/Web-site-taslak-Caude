# CLAUDE.md — masif. Web Sitesi

## Proje
Masif Special — premium el yapımı ahşap ürünler markası.
Çok sayfalı site, koyu lüks tema, Türkçe + İngilizce dil desteği.

## Dosya Yapısı
```
index.html              — Ana sayfa (hero, ürün grid, showcase, hakkımızda, mağazalar, iletişim)
ahsap-masa-saati.html   — Masaüstü saat koleksiyonu alt sayfası
ahsap-duvar-saati.html  — Duvar saati koleksiyonu alt sayfası
ahsap-samdanlar.html    — Şamdan koleksiyonu alt sayfası
ahsap-vazolar.html      — Vazo koleksiyonu alt sayfası
ahsap-ayaklar.html      — Mobilya ayağı koleksiyonu alt sayfası
ahsap-duvar-rafi.html   — Duvar rafı koleksiyonu alt sayfası
gizlilik-politikasi.html — KVKK / Gizlilik politikası
kullanim-kosullari.html  — Kullanım koşulları
404.html                — 404 hata sayfası

style.css               — Ana stil dosyası (tüm sayfalar)
product.css             — Alt sayfa stili
script.js               — Animasyonlar ve etkileşimler
i18n.js                 — TR/EN dil değiştirme mekanizması

images/                 — Tüm medya dosyaları (temiz yapı)
  masa-saati/           — Masaüstü saat görselleri/videoları
  duvar-saati/          — Duvar saati görselleri/videoları
  samdanlar/            — Şamdan görselleri/videoları
  vazolar/              — Vazo görselleri
  ayaklar/              — Mobilya ayağı görselleri/videoları
  duvar-rafi/           — Duvar rafı görselleri
  hisar-rafi/           — Hisar rafı görselleri
  kapi-isimlik/         — Kapı isimliği görselleri

lang/                   — Çeviri dosyaları (referans)
  tr.json               — Türkçe çeviriler
  en.json               — İngilizce çeviriler

robots.txt              — SEO robots dosyası
sitemap.xml             — SEO sitemap
CNAME                   — Custom domain: www.masifspecial.shop
```

## Marka
- Renk: koyu zemin `#0c0b09`, altın vurgu `#c9a26c`
- Font: Fraunces (başlıklar) + DM Sans (metin)
- Ton: premium, minimal, lüks

## Teknik Detaylar
- **SEO:** Schema.org JSON-LD, canonical URL, OG tags, SEO-optimized H1 headings
- **i18n:** `data-i18n` attributeleriyle TR/EN geçiş (i18n.js, localStorage)
- **Erişilebilirlik:** Tüm görsellerde açıklayıcı alt text
- **Harici linkler:** ↗ ikonu ile işaretli (WhatsApp, Sipariş Ver)
- **Yasal:** KVKK aydınlatma metni + kullanım koşulları sayfaları

## Geliştirme Kuralları
- Değişiklik sonrası her zaman GitHub'a push et
- Repo: `masiftasarimahsap-bit/Web-site-taslak-Caude`
- Yeni görsel: `images/kategori-adi/` klasörüne koy (Türkçe karakter ve boşluk yok)
- Kullanılmayan görselleri `images/` klasöründe bırakma
- Alt sayfalarda `product.css` ve `style.css` birlikte kullanılır

## Domain
- GitHub Pages: `masiftasarimahsap-bit.github.io/Web-site-taslak-Caude`
- Custom domain: `www.masifspecial.shop`
