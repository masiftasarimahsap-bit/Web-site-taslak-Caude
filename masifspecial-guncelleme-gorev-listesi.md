# 🔧 masifspecial.shop — Kapsamlı Güncelleme ve İyileştirme Görev Listesi

**Tarih:** 24 Mart 2026  
**Site:** https://www.masifspecial.shop/  
**Durum:** Tüm görevler analiz raporundan + kullanıcı taleplerinden derlenmiştir.

---

## 📑 İÇİNDEKİLER

1. [KRİTİK DÜZELTMELER — Acil](#1-kritik-düzeltmeler--acil)
2. [YENİ ÖZELLİKLER — Kullanıcı Talepleri](#2-yeni-özellikler--kullanıcı-talepleri)
3. [SEO & TEKNİK ALTYAPI](#3-seo--teknik-altyapı)
4. [KULLANICI DENEYİMİ (UX) İYİLEŞTİRMELERİ](#4-kullanıcı-deneyimi-ux-iyileştirmeleri)
5. [PERFORMANS OPTİMİZASYONU](#5-performans-optimizasyonu)
6. [GÜVENLİK & YASAL UYUMLULUK](#6-güvenlik--yasal-uyumluluk)
7. [UZUN VADELİ GELİŞTİRMELER](#7-uzun-vadeli-geliştirmeler)

---

## 1. KRİTİK DÜZELTMELER — Acil

### 1.1 ✅ WhatsApp Numarası Güncellemesi
**Önem:** 🔴 KRİTİK  
**Durum:** Tüm alt sayfalarda `905XXXXXXXXX` placeholder kalmış.

**Yapılacak:**
- Tüm sayfalardaki `https://wa.me/905XXXXXXXXX` linklerini `https://wa.me/905067786885` olarak değiştir
- **Etkilenen dosyalar:** `ahsap-masa-saati.html`, `ahsap-duvar-saati.html`, `ahsap-samdanlar.html`, `ahsap-ayaklar.html`, `ahsap-duvar-rafi.html`, `ahsap-vazolar.html`
- Toplam yaklaşık 20+ link değişikliği

---

### 1.2 ✅ İletişim Bilgileri Güncellemesi
**Önem:** 🔴 KRİTİK

**Yapılacak:**
- **Web adresi satırı:** `www.masifspecial.com` → `hasan.ozel@masifspecial.shop` olarak değiştir
- Bağlantıyı `mailto:hasan.ozel@masifspecial.shop` olarak ayarla
- Label'ı "Web" yerine "E-posta" olarak güncelle (zaten bir e-posta satırı var: `info@masifspecial.com` — iki ayrı e-posta mı olacak yoksa birleştirilecek mi karar verilmeli)
- **Konum:** "Türkiye" → "Kayseri, Türkiye" olarak güncelle
- **Etkilenen bölümler:** Ana sayfa iletişim bloğu + tüm sayfalardaki footer

**Önerilen iletişim bloğu yapısı:**
```
E-posta: hasan.ozel@masifspecial.shop
Genel: info@masifspecial.com
Konum: Kayseri, Türkiye
```

---

### 1.3 ✅ Görsel Modalı (Lightbox) Hatasının Giderilmesi
**Önem:** 🔴 KRİTİK

**Mevcut sorun:** Tüm sayfalarda footer'ın altında boş bir modal/lightbox kodu var:
```html
×
<img src="" alt="Ürün görseli">
```
Bu kod çalışmıyor ve ekranda artık bir `×` butonu görünüyor.

**Yapılacak (2 seçenek):**

**Seçenek A — Tam çalışır lightbox yap (ÖNERİLEN):**
- Tüm ürün galeri görsellerine `onclick` veya `data-lightbox` attribute ekle
- Modal açıldığında tıklanan görselin büyük halini göster
- Kapatma butonu (×), dışına tıklayınca kapanma, ESC tuşu desteği ekle
- Önceki/sonraki görsel navigasyonu (opsiyonel)

**Seçenek B — Temizle:**
- Modal HTML bloğunu ve ilgili CSS/JS'yi tamamen sil
- Galeri görselleri tıklanınca büyütme olmadan kalsın

**Etkilenen dosyalar:** Tüm HTML dosyaları (7 adet)

---

### 1.4 ✅ URL'lerdeki Türkçe Karakter ve Boşluk Temizliği
**Önem:** 🔴 KRİTİK

**Mevcut sorun:** Görsel/video dosya yollarında Türkçe karakter, boşluk ve parantez var.

**Sorunlu klasör adları:**
```
/Ahşap Masa Saati ve videoları/
/Ahşap duvar Saati Görsel ve Videoları/
/Ahşap Şamdanlar görsel ve video/
/Duvar Rafı /                          ← Fazladan boşluk!
/Hisar duvar Rafı görsel ve Videoları /  ← Fazladan boşluk!
/Ahşap Ayaklar/
/Ahşap Vazolar/
```

**Sorunlu dosya adları:**
```
5 (1).png
7 (1).png
10 (1).png
4 (2).png
3 (1).png
14 (1).png
baytekin (4).jpg
baytekin (3).jpg
Gemini_Generated_Image_xxxxx.png  ← Okunaksız isimlendirme
```

**Yapılacak:**
1. Tüm klasörleri yeniden adlandır:
   ```
   /Ahşap Masa Saati ve videoları/    → /images/masa-saati/
   /Ahşap duvar Saati Görsel ve.../   → /images/duvar-saati/
   /Ahşap Şamdanlar görsel ve.../     → /images/samdanlar/
   /Duvar Rafı /                      → /images/duvar-rafi/
   /Hisar duvar Rafı görsel ve.../    → /images/hisar-rafi/
   /Ahşap Ayaklar/                    → /images/ayaklar/
   /Ahşap Vazolar/                    → /images/vazolar/
   ```
2. Tüm dosyaları anlamlı, SEO uyumlu isimlerle yeniden adlandır:
   ```
   5 (1).png → roma-rakam-kadran.png
   Gemini_Generated_Image_xxxxx.png → minimal-cizgi-duvar-saati.png
   baytekin (4).jpg → oval-kemerli-raf-dogal.jpg
   ```
3. Tüm HTML dosyalarındaki `src` referanslarını güncelle

**Etkilenen dosyalar:** Tüm HTML dosyaları + tüm görsel/video dosyaları

---

## 2. YENİ ÖZELLİKLER — Kullanıcı Talepleri

### 2.1 🆕 Hepsiburada Mağaza Entegrasyonu
**Önem:** 🟠 YÜKSEK

**Yapılacak:**
- Ana sayfa "Online Mağazalar" bölümüne yeni mağaza kartı ekle
- Footer "Mağazalar" bölümüne link ekle
- **URL:** `https://www.hepsiburada.com/magaza/masifspecial`

**Yeni kart içeriği:**
```
Hepsiburada — Masif Special
Tüm ürün koleksiyonumuzu Hepsiburada üzerinden güvenle satın alabilirsiniz.
Mağazayı Ziyaret Et ↗
```

**Tasarım kuralları:**
- Mevcut Shopier/Etsy kartlarıyla aynı boyut, padding, hover efekti
- Hepsiburada'nın turuncu renk tonunu (#FF6000) ikon veya accent olarak kullanabilirsin
- Grid düzeninde 4. kart olarak veya 5 kartlık yeni layout'a geç

**Etkilenen dosyalar:** `index.html` + tüm alt sayfaların footer bölümleri

---

### 2.2 🆕 Çoklu Dil Desteği (TR / EN)
**Önem:** 🟠 YÜKSEK

**Yapılacak:**

**A) Dil Değiştirici Butonu:**
- Navbar'ın sağ üst köşesine (menü öğelerinin yanına) şık bir TR / EN toggle ekle
- Mobilde de erişilebilir olmalı (hamburger menü içinde veya dışında)
- Aktif dil vurgulu gösterilmeli (örn: **TR** | EN)

**B) i18n Altyapısı:**
- `lang/tr.json` ve `lang/en.json` dosyaları oluştur
- Tüm mevcut metinlerin İngilizce çevirilerini yap
- JavaScript tabanlı bir dil değiştirme mekanizması kur
- Kullanıcının dil tercihini `localStorage`'da sakla
- Sayfa yenilendiğinde son seçilen dil korunsun

**C) Çevrilmesi gereken ana bölümler:**

| Türkçe | İngilizce |
|--------|-----------|
| Ana Sayfa | Home |
| Ürünler | Products |
| Hakkımızda | About Us |
| Mağazalar | Stores |
| İletişim | Contact |
| El İşçiliğinin Zarafeti | The Elegance of Craftsmanship |
| Koleksiyonu Keşfet | Explore Collection |
| Masaüstü Ahşap Saatler | Wooden Desk Clocks |
| Duvar Saatleri | Wall Clocks |
| Ahşap Şamdanlar | Wooden Candleholders |
| Mobilya Ayakları | Furniture Legs |
| Dekoratif Ürünler | Decorative Items |
| Koleksiyonu Gör | View Collection |
| Mağazayı Ziyaret Et | Visit Store |
| Doğanın Eşsiz Dokusunu Yaşatıyoruz | Preserving Nature's Unique Texture |
| Bizimle İletişime Geçin | Get in Touch |
| Mesaj Gönder | Send Message |
| WhatsApp'tan Yazın | Message on WhatsApp |
| Sipariş Ver | Order Now |
| Tüm hakları saklıdır | All rights reserved |

**D) Alt sayfalar için ek çeviriler:**
- Her ürün sayfasının tüm metinleri (açıklamalar, teknik özellikler tablosu, sipariş adımları)
- Breadcrumb metinleri
- Buton metinleri

**E) HTML lang Attribute:**
- `<html lang="tr">` → dil değiştirildiğinde `<html lang="en">` olarak güncellenmeli

**Etkilenen dosyalar:** Tüm HTML dosyaları + 2 yeni JSON dosyası

---

### 2.3 🆕 Dış Bağlantı İkonları (↗)
**Önem:** 🟡 ORTA

**Yapılacak:**
- Kullanıcıyı site dışına yönlendiren tüm butonlara dış bağlantı ikonu ekle
- İkon: `↗` (Unicode: U+2197) veya SVG external-link ikonu

**Uygulanacak butonlar:**
```
"Koleksiyonu Gör →"    → "Koleksiyonu Gör ↗"     (Etsy/Shopier'a giden linkler)
"Mağazayı Ziyaret Et"  → "Mağazayı Ziyaret Et ↗"
"Sipariş Ver →"         → "Sipariş Ver ↗"         (WhatsApp'a giden linkler)
```

**Kural:** Site içi navigasyon linkleri (→ oku) değiştirilmemeli. Sadece `target="_blank"` olan veya harici URL'ye giden linkler etkilenmeli.

**Ayrıca:**
- Tüm harici linklere `target="_blank"` ve `rel="noopener noreferrer"` attribute'ları ekle

**Etkilenen dosyalar:** Tüm HTML dosyaları

---

## 3. SEO & TEKNİK ALTYAPI

### 3.1 Google İndeksleme — Acil
**Önem:** 🔴 KRİTİK

**Mevcut sorun:** `site:masifspecial.shop` aramasında sıfır sonuç. Site Google'da hiç görünmüyor.

**Yapılacak:**
1. **robots.txt oluştur:**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.masifspecial.shop/sitemap.xml
   ```

2. **sitemap.xml oluştur:**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url><loc>https://www.masifspecial.shop/</loc><priority>1.0</priority></url>
     <url><loc>https://www.masifspecial.shop/ahsap-masa-saati.html</loc><priority>0.9</priority></url>
     <url><loc>https://www.masifspecial.shop/ahsap-duvar-saati.html</loc><priority>0.9</priority></url>
     <url><loc>https://www.masifspecial.shop/ahsap-samdanlar.html</loc><priority>0.8</priority></url>
     <url><loc>https://www.masifspecial.shop/ahsap-vazolar.html</loc><priority>0.8</priority></url>
     <url><loc>https://www.masifspecial.shop/ahsap-ayaklar.html</loc><priority>0.8</priority></url>
     <url><loc>https://www.masifspecial.shop/ahsap-duvar-rafi.html</loc><priority>0.8</priority></url>
   </urlset>
   ```

3. **Google Search Console'a kayıt ol** (manual — sen yapacaksın)
4. **Bing Webmaster Tools'a da kayıt ol** (opsiyonel)

**Oluşturulacak dosyalar:** `robots.txt`, `sitemap.xml`

---

### 3.2 Heading Etiketleri SEO Optimizasyonu
**Önem:** 🟠 YÜKSEK

**Yapılacak — Sayfa bazında H1 ve H2 güncellemeleri:**

| Sayfa | Mevcut H1 | Önerilen H1 |
|-------|-----------|-------------|
| index.html | El İşçiliğinin Zarafeti | El Yapımı Premium Masif Ahşap Ürünler |
| ahsap-masa-saati.html | Ahşap Masa Saatleri | El Yapımı Doğal Ahşap Masaüstü Saat — Kayın Ağacı |
| ahsap-duvar-saati.html | Ahşap Duvar Saatleri | Kişiselleştirilebilir Masif Ahşap Duvar Saati |
| ahsap-samdanlar.html | Ahşap Şamdanlar | El Yapımı Tornalı Ahşap Şamdan — Kayın Ağacı |
| ahsap-vazolar.html | Ahşap Dekoratif Vazolar | Doğal Ahşap Dekoratif Vazo — Kayın & Ceviz |
| ahsap-ayaklar.html | Kişiye Özel Ahşap Mobilya Ayakları | Tornalanmış Masif Ahşap Mobilya Ayağı — Kişiye Özel |
| ahsap-duvar-rafi.html | Ahşap Duvar Rafları | Oval Kemerli Ahşap Duvar Rafı — Doğal Kayın |

**H2 örnekleri:**
```
"Ürünlerimiz"           → "El Yapımı Masif Ahşap Ürün Koleksiyonumuz"
"Üç Farklı Kadran"      → "Üç Farklı Ahşap Saat Kadran Modeli"
"Doğanın Eşsiz Dokusunu Yaşatıyoruz" → "Masif Ahşap El İşçiliği Hikayemiz"
"Bizi Bulun"             → "Online Ahşap Ürün Mağazalarımız"
```

---

### 3.3 Görsel Alt Etiketleri (Alt Text) Optimizasyonu
**Önem:** 🟠 YÜKSEK

**Mevcut sorun:** Bazı görsellerde genel alt metinleri var, bazılarında ise "Görsel 1", "Görsel 2" gibi anlamsız değerler kullanılmış.

**Yapılacak — Tüm görsellere SEO uyumlu alt text yaz:**

**Ana sayfa örnekleri:**
```
Mevcut: alt="Masaüstü Ahşap Saatler"
Yeni:   alt="El yapımı kayın ağacı masaüstü saat — masif ahşap doğal doku"

Mevcut: alt="Ahşap Duvar Saatleri"
Yeni:   alt="Kişiselleştirilebilir masif ahşap duvar saati — sessiz mekanizma"

Mevcut: alt="Ahşap Şamdanlar"
Yeni:   alt="Tornalı doğal kayın ağacı şamdan seti — el yapımı dekoratif"

Mevcut: alt="Ahşap Mobilya Ayakları"
Yeni:   alt="Tornalanmış masif kayın ağacı mobilya ayağı — kanepe ve sehpa için"
```

**Alt sayfa galeri görselleri örnekleri:**
```
Mevcut: alt="Görsel 1"
Yeni:   alt="Minimal çizgi kadran ahşap masa saati — kayın ağacı ön görünüm"

Mevcut: alt="Görsel 2"
Yeni:   alt="Modern rakam kadran masaüstü ahşap saat — ofis masası üzerinde"

Mevcut: alt="Görsel 3"
Yeni:   alt="Roma rakamı kadran kayın ağacı masa saati — klasik tasarım"
```

**Kural:** Her alt text:
- Ürünü ve malzemesini tanımlamalı
- Benzersiz olmalı (aynı alt text tekrar etmemeli)
- 5–15 kelime arasında olmalı
- Anahtar kelime spam'i yapmamalı

**Etkilenen dosyalar:** Tüm HTML dosyaları (toplamda ~150+ img etiketi)

---

### 3.4 Meta Description Etiketleri
**Önem:** 🟠 YÜKSEK

**Yapılacak — Her sayfa için benzersiz meta description:**

```html
<!-- index.html -->
<meta name="description" content="Doğal masif ahşaptan el yapımı premium tasarım ürünleri. Masaüstü saat, duvar saati, şamdan, vazo ve mobilya ayakları. Kişiselleştirilebilir, Kayseri'den Türkiye'ye kargo.">

<!-- ahsap-masa-saati.html -->
<meta name="description" content="Kayın ağacından el yapımı ahşap masa saati. Sessiz mekanizma, 3 kadran modeli, lazer kazıma ile kişiselleştirme. Ofis ve ev dekorasyonu için ideal hediye.">

<!-- ahsap-duvar-saati.html -->
<meta name="description" content="Doğal kayın ağacından kişiselleştirilebilir ahşap duvar saati. 30cm ve 40cm boyutlar, sessiz mekanizma. İsim, tarih veya logo kazıma seçeneği.">

<!-- ahsap-samdanlar.html -->
<meta name="description" content="Torna tekniğiyle üretilen el yapımı ahşap şamdan setleri. 5 farklı model, 3'lü set seçeneği. Kayın ağacından dekoratif şamdanlar.">

<!-- ahsap-vazolar.html -->
<meta name="description" content="Doğal kayın ve ceviz ağacından el yapımı dekoratif ahşap vazolar. Damla, şişe ve ince boyun formları. Kuru çiçek ve pampas otu için ideal.">

<!-- ahsap-ayaklar.html -->
<meta name="description" content="Kişiye özel tornalanmış masif ahşap mobilya ayakları. Kayın ağacından, 4-20 inch arası her boy. Klasik tornalı ve modern konik modeller.">

<!-- ahsap-duvar-rafi.html -->
<meta name="description" content="Oval kemerli doğal ahşap duvar rafı. Kayın ağacından, açık ve koyu ton seçenekleri. Gizli asma aparatıyla kolay montaj. Hisar serisi mevcut.">
```

---

### 3.5 Schema.org Yapısal Veri (Structured Data)
**Önem:** 🟡 ORTA

**Yapılacak — Her ürün sayfasına JSON-LD ekle:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "El Yapımı Ahşap Masa Saati",
  "description": "Kayın ağacından, sessiz mekanizmalı, kişiselleştirilebilir masaüstü saat",
  "brand": { "@type": "Brand", "name": "masif." },
  "material": "Kayın Ağacı (Beech Wood)",
  "manufacturer": {
    "@type": "Organization",
    "name": "masif.",
    "url": "https://www.masifspecial.shop"
  },
  "image": "https://www.masifspecial.shop/images/masa-saati/minimal-kadran.png",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "TRY"
  }
}
</script>
```

**Ayrıca ana sayfaya Organization schema ekle:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "masif.",
  "url": "https://www.masifspecial.shop",
  "email": "hasan.ozel@masifspecial.shop",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kayseri",
    "addressCountry": "TR"
  }
}
</script>
```

---

### 3.6 Canonical URL Ekleme
**Önem:** 🟡 ORTA

**Yapılacak — Her sayfanın `<head>` bölümüne:**
```html
<link rel="canonical" href="https://www.masifspecial.shop/ahsap-masa-saati.html">
```

---

### 3.7 Open Graph & Twitter Card Meta Etiketleri
**Önem:** 🟡 ORTA

**Yapılacak — Her sayfaya sosyal medya paylaşım meta etiketleri ekle:**
```html
<meta property="og:title" content="El Yapımı Ahşap Masa Saati — masif.">
<meta property="og:description" content="Kayın ağacından, sessiz mekanizmalı, kişiselleştirilebilir masaüstü saat">
<meta property="og:image" content="https://www.masifspecial.shop/images/masa-saati/og-image.jpg">
<meta property="og:url" content="https://www.masifspecial.shop/ahsap-masa-saati.html">
<meta property="og:type" content="product">
<meta name="twitter:card" content="summary_large_image">
```

---

## 4. KULLANICI DENEYİMİ (UX) İYİLEŞTİRMELERİ

### 4.1 Sabit (Sticky) WhatsApp Butonu
**Önem:** 🟠 YÜKSEK

**Yapılacak:**
- Tüm sayfalarda sağ alt köşeye sabit bir WhatsApp butonu ekle
- Yeşil (#25D366) renkli, WhatsApp ikonu ile
- Hover'da hafif büyüme animasyonu
- Link: `https://wa.me/905067786885`
- Mobilde de görünmeli, footer'la çakışmamalı

```css
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: #25D366;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}
.whatsapp-float:hover { transform: scale(1.1); }
```

---

### 4.2 İletişim Formu İşlevselliği
**Önem:** 🟠 YÜKSEK

**Mevcut sorun:** Form backend'e bağlı değil, gönderim çalışmıyor.

**Yapılacak (Seçenekler):**
1. **Formspree** (ücretsiz, kolay): `action="https://formspree.io/f/{form_id}"` ekle
2. **Netlify Forms** (eğer Netlify'da host ediyorsan)
3. **Google Forms** embed
4. **EmailJS** (JavaScript tabanlı, backend gerektirmez)

Formspree önerilen çözüm — kayıt ol, form ID al, `<form>` tag'ine action ekle.

---

### 4.3 Fiyat Bilgisi Eklenmesi
**Önem:** 🟠 YÜKSEK

**Mevcut sorun:** Hiçbir üründe fiyat yok. Kullanıcı nereye tıklayacağını, ne ödeyeceğini bilmiyor.

**Yapılacak:**
- Her ürün kartına en azından "başlangıç fiyatı" ekle
- Örnek format: `₺450'den başlayan fiyatlarla` veya `Fiyat bilgisi için iletişime geçin`
- Alt sayfalarda teknik özellikler tablosunun altına fiyat aralığı ekle

---

### 4.4 Sosyal Medya Linkleri
**Önem:** 🟡 ORTA

**Yapılacak:**
- Footer'a sosyal medya ikon satırı ekle
- En az: Instagram, Pinterest (el yapımı ürünler için en etkili kanallar)
- İkonlar: SVG veya Font Awesome

---

### 4.5 Müşteri Yorumları / Testimonial Bölümü
**Önem:** 🟡 ORTA

**Yapılacak:**
- Ana sayfaya "Müşterilerimiz Ne Diyor?" bölümü ekle
- Etsy yorumlarından alıntılar yapılabilir
- Yıldız rating gösterimi
- Slider/carousel formatında

---

### 4.6 Ana Sayfa Uzunluğunu Optimize Et
**Önem:** 🟡 ORTA

**Mevcut sorun:** Ana sayfa çok uzun — tüm koleksiyon galerileri (masaüstü saatler 9 görsel, duvar saatleri 10 görsel, vazolar 9 görsel, dekoratif ürünler 3 görsel) alt alta sıralanmış.

**Yapılacak:**
- Ana sayfada yalnızca kategori kartlarını göster (mevcut "Ürünlerimiz" bölümü yeterli)
- Alt koleksiyon galerilerini kaldır veya en fazla 3-4 görselle sınırla
- Ideal ana sayfa akışı: Hero → Kategoriler → Kısa Hakkımızda → Mağazalar → İletişim

---

### 4.7 404 Hata Sayfası
**Önem:** 🟢 DÜŞÜK

**Yapılacak:**
- Özel `404.html` sayfası tasarla
- "masif." markasıyla uyumlu tasarım
- Ana sayfaya ve popüler kategorilere yönlendirme linkleri

---

## 5. PERFORMANS OPTİMİZASYONU

### 5.1 Görsel Optimizasyonu
**Önem:** 🟠 YÜKSEK

**Yapılacak:**
- Tüm görselleri WebP formatına dönüştür (JPEG/PNG fallback ile)
- `<picture>` etiketi ile modern tarayıcılarda WebP, eskide JPEG sun
- Görselleri uygun boyutta resize et (masaüstü: max 1200px genişlik, thumbnail: 400px)
- Lazy loading ekle: `loading="lazy"` attribute'u tüm fold-altı görsellere

```html
<picture>
  <source srcset="images/masa-saati/minimal-kadran.webp" type="image/webp">
  <img src="images/masa-saati/minimal-kadran.jpg" alt="..." loading="lazy">
</picture>
```

---

### 5.2 Video Optimizasyonu
**Önem:** 🟡 ORTA

**Yapılacak:**
- Videolar için poster image ekle (ilk kare veya özel thumbnail)
- `preload="none"` veya `preload="metadata"` ayarla
- Mobilde otomatik oynatma devre dışı bırak
```html
<video poster="images/video-poster.jpg" preload="none" playsinline>
```

---

### 5.3 CSS/JS Minification
**Önem:** 🟡 ORTA

**Yapılacak:**
- CSS dosyalarını minify et
- JavaScript dosyalarını minify et
- Kritik CSS'yi inline olarak `<head>`'e ekle
- Render-blocking kaynakları `defer` veya `async` ile yükle

---

## 6. GÜVENLİK & YASAL UYUMLULUK

### 6.1 KVKK / Gizlilik Politikası
**Önem:** 🟠 YÜKSEK (YASAL ZORUNLULUK)

**Yapılacak:**
1. `gizlilik-politikasi.html` sayfası oluştur
2. `kullanim-kosullari.html` sayfası oluştur
3. Çerez bildirimi (cookie banner) ekle
4. Footer'a bu sayfaların linklerini ekle

---

### 6.2 Harici Link Güvenliği
**Önem:** 🟡 ORTA

**Yapılacak:**
- Tüm `target="_blank"` linklerine `rel="noopener noreferrer"` ekle
- Bu güvenlik açığını tüm sayfalarda kontrol et

---

## 7. UZUN VADELİ GELİŞTİRMELER

### 7.1 Blog Bölümü
- SEO için ahşap, dekorasyon, DIY içerikleri
- "Ahşap saat bakımı nasıl yapılır", "Masif ahşap nedir" gibi yazılar
- Organik trafik çekmek için long-tail keyword hedefleme

### 7.2 Google Analytics & Meta Pixel
- GA4 tracking kodu ekle
- Facebook/Meta Pixel ekle (reklam hedeflemesi için)

### 7.3 E-posta Bülteni
- Mailchimp veya benzeri ile e-posta toplama formu
- Footer'a veya popup olarak "Yeni ürünlerden haberdar olun" bölümü

### 7.4 PWA (Progressive Web App) Desteği
- Manifest dosyası
- Service worker
- Mobilde "Ana ekrana ekle" özelliği

---

## 📊 UYGULAMA ÖNCELİK TABLOSU

| # | Görev | Önem | Zorluk | Süre |
|---|-------|------|--------|------|
| 1 | WhatsApp numarası düzeltme | 🔴 Kritik | Kolay | 15 dk |
| 2 | İletişim bilgileri güncelleme | 🔴 Kritik | Kolay | 15 dk |
| 3 | Lightbox düzeltme/temizleme | 🔴 Kritik | Orta | 1-2 saat |
| 4 | robots.txt + sitemap.xml | 🔴 Kritik | Kolay | 30 dk |
| 5 | Hepsiburada mağaza ekleme | 🟠 Yüksek | Kolay | 30 dk |
| 6 | Dış bağlantı ikonları (↗) | 🟡 Orta | Kolay | 30 dk |
| 7 | Meta description etiketleri | 🟠 Yüksek | Kolay | 45 dk |
| 8 | Heading etiketleri SEO | 🟠 Yüksek | Kolay | 1 saat |
| 9 | Görsel alt etiketleri | 🟠 Yüksek | Orta | 2-3 saat |
| 10 | Sabit WhatsApp butonu | 🟠 Yüksek | Kolay | 30 dk |
| 11 | Dosya/klasör adı temizliği | 🔴 Kritik | Zor | 3-4 saat |
| 12 | Çoklu dil desteği (TR/EN) | 🟠 Yüksek | Zor | 6-10 saat |
| 13 | İletişim formu entegrasyonu | 🟠 Yüksek | Orta | 1 saat |
| 14 | Görsel optimizasyonu (WebP) | 🟠 Yüksek | Orta | 2-3 saat |
| 15 | Schema.org markup | 🟡 Orta | Orta | 1-2 saat |
| 16 | KVKK / Gizlilik sayfaları | 🟠 Yüksek | Orta | 2-3 saat |
| 17 | Fiyat bilgisi ekleme | 🟠 Yüksek | Kolay | 1 saat |
| 18 | Sosyal medya linkleri | 🟡 Orta | Kolay | 30 dk |
| 19 | Müşteri yorumları bölümü | 🟡 Orta | Orta | 2-3 saat |
| 20 | Canonical + OG meta tags | 🟡 Orta | Kolay | 1 saat |
| 21 | 404 hata sayfası | 🟢 Düşük | Kolay | 1 saat |
| 22 | Blog bölümü | 🟢 Düşük | Zor | 5+ saat |
| 23 | Analytics entegrasyonu | 🟡 Orta | Kolay | 30 dk |

---

## 📝 NOTLAR

- **Tahmini toplam iş süresi:** 35-50 saat (tüm görevler dahil)
- **İlk sprint (1-10 arası görevler):** ~8-10 saat
- Dosya/klasör yeniden adlandırma (görev 11), tüm HTML dosyalarında toplu güncelleme gerektirir — bu görevi diğer güncellemelerle birlikte yapmak verimli olur
- Çoklu dil desteği (görev 12) en kapsamlı geliştirme — bağımsız bir sprint olarak planlanabilir
- Google Search Console kaydı (görev 4 sonrası) site sahibi tarafından yapılmalıdır

---

*Bu görev listesi, 24 Mart 2026 tarihli site analiz raporuna ve kullanıcı taleplerine dayanmaktadır.*
