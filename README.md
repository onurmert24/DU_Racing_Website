# Düzce Üniversitesi Motor Sporları Website

MIT FSAE sitesi esinlenerek tasarlanmış, Düzce Üniversitesi Motor Sporları topluluğu için minimalist ve modern web sitesi.

## Tasarım Özellikleri

- **MIT FSAE Tarzı**: Minimalist, büyük tipografi, siyah-beyaz ağırlıklı tasarım
- **Büyük Başlıklar**: Etkileyici hero section ve büyük fontlar
- **Temiz Layout**: Sade ve profesyonel görünüm
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Hızlı**: Minimum yükleme süreleri

## Site Bölümleri

### Ana Sayfa (index.html)
- **Hero Section**: "Hızlı arabalar yapıyoruz. Her formülün ötesinde." ana mesajı
- **Araç Tanıtımı**: Model Yıl 25 aracının tanıtımı
- **Araç İstatistikleri**: Hızlanma, maksimum hız ve ağırlık bilgileri
- **Sponsor Bölümü**: Destekçi firmalar grid düzeninde

### Hakkımızda Sayfası (about.html)
- **Misyon & Vizyon**: Topluluk hedefleri
- **Değerler**: Temel ilkelerimiz
- **İstatistikler**: Kuruluş yılı, üye sayısı, başarılar
- **Tarihçe**: 2019'dan günümüze kronolojik gelişim

### Takım Sayfası (team.html)
- **Liderlik**: Takım lideri ve danışman akademisyen
- **Departmanlar**: 5 ana departman (Şasi, Powertrain, Elektronik, Aerodinamik, İş Geliştirme)
- **Takım Üyeleri**: Her departmandan 3'er kişi
- **Katılım**: Yeni üye başvuru süreci

### Sponsorlar Sayfası (sponsors.html)
- **Ana Sponsorlar**: Düzce Üniversitesi, TUSAŞ, Ford Otosan
- **Teknoloji Ortakları**: SolidWorks, ANSYS, MATLAB, Altium
- **Endüstri Ortakları**: Otomotiv ve savunma sanayi firmaları
- **Sponsorluk Fırsatları**: Sponsorluk paketleri ve iletişim

## Teknolojiler

- HTML5
- CSS3 (Flexbox, Grid, Animasyonlar)
- JavaScript (ES6+)
- Font Awesome (İkonlar)
- Google Fonts

## Kurulum

1. Repoyu klonlayın:
```bash
git clone [repo-url]
cd DU_Racing_website
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:3000` adresine gidin.

## Yapı

```
DU_Racing_website/
├── index.html              # Ana sayfa (MIT FSAE tarzında)
├── css/
│   └── style.css          # Minimalist stil dosyası
├── js/
│   └── script.js          # Temel JavaScript
├── images/
│   ├── car-my25.png       # Ana araç görseli
│   ├── car-front.png      # Araç ön görünüş
│   ├── car-side.png       # Araç yan görünüş
│   ├── car-back.png       # Araç arka görünüş
│   ├── team/              # Takım üyesi fotoğrafları
│   │   ├── leader-1.jpg
│   │   ├── leader-2.jpg
│   │   ├── chassis-1.jpg
│   │   └── [diğer üyeler]
│   └── sponsors/          # Sponsor logoları
│       ├── duzce-uni.png
│       ├── bosch.png
│       ├── ford-otosan.png
│       └── [diğer sponsorlar]
├── package.json           # Proje yapılandırması
└── README.md             # Bu dosya
```

## Özelleştirme

### Tasarım Renkleri (MIT Tarzı)
- Arka Plan: #fff (Beyaz)
- Ana Metin: #000 (Siyah)
- İkincil Metin: #666 (Gri)
- Vurgular: Minimal, siyah-beyaz ağırlıklı

### Tipografi
- Font Ailesi: 'Inter' (Google Fonts)
- Büyük başlıklar (clamp fonksiyonu ile responsive)
- Minimalist harf aralığı (-2px büyük başlıklarda)
- Font ağırlıkları: 300 (light), 500 (normal), 900 (black)

### Görseller
- `images/car-*.png`: Araç görselleri (placeholder olarak gri kutular)
- `images/sponsors/*.png`: Sponsor logoları (beyaz/şeffaf logolar önerilir)
- Görseller CSS ile filtre edilir (grayscale, invert)

## Deployment

### GitHub Pages
1. Repository'yi GitHub'a push edin
2. Settings > Pages bölümünden kaynak olarak main branch'i seçin
3. Site otomatik olarak yayınlanır

### Netlify
1. `npm run build` komutu ile build alın
2. Netlify'a dosyaları yükleyin
3. Domain ayarlarını yapın

## Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakın.

## İletişim

Düzce Üniversitesi Motor Sporları
- E-posta: motorsporlari@duzce.edu.tr
- Telefon: +90 380 542 11 33
- Adres: Düzce Üniversitesi, Merkez Kampüs, Konuralp, 81620 Düzce

## Değişiklik Geçmişi

### v1.0.0 (2024-10-05)
- İlk sürüm yayınlandı
- Temel sayfalar eklendi
- Responsive tasarım tamamlandı
- İletişim formu eklendi