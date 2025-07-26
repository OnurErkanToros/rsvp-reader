# 📚 RSVP Reader - Hızlı Okuma Web Uygulaması

[![Angular](https://img.shields.io/badge/Angular-20.0.0-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Material](https://img.shields.io/badge/Angular%20Material-20.0.4-orange.svg)](https://material.angular.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Proje Hakkında

RSVP Reader, **Rapid Serial Visual Presentation** tekniğini kullanarak hızlı okuma deneyimi sunan modern bir web uygulamasıdır. Kelimeler tek tek, merkezi bir noktada, ayarlanabilir hızda gösterilerek okuma hızınızı artırmanıza yardımcı olur.

### ✨ Özellikler

- 🚀 **Hızlı Okuma**: RSVP tekniği ile kelime kelime okuma
- 📖 **EPUB Desteği**: EPUB formatındaki kitapları okuyabilme
- 📚 **Kütüphane Sistemi**: Okuma geçmişi ve kitap yönetimi
- 🎨 **Modern UI**: Angular Material ile güzel ve kullanıcı dostu arayüz
- 🌙 **Tema Desteği**: Açık/koyu tema seçenekleri
- 📱 **Responsive**: Mobil ve masaüstü uyumlu tasarım
- ⚙️ **Özelleştirilebilir**: Okuma hızı, font boyutu, tema ayarları
- 💾 **Yerel Depolama**: Kullanıcı ayarları ve okuma geçmişi

## 🛠️ Teknolojiler

- **Frontend**: Angular 20.0.0
- **UI Framework**: Angular Material 20.0.4
- **Dil**: TypeScript 5.8.2
- **State Management**: RxJS
- **EPUB Desteği**: epubjs
- **Build Tool**: Angular CLI

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/OnurErkanToros/rsvp-reader.git
cd rsvp-reader
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm start
```

4. **Tarayıcıda açın:**
```
http://localhost:4200
```

## 📁 Proje Yapısı

```
rsvp-reader/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── rsvp/           # RSVP okuma bileşenleri
│   │   │   │   ├── controls/   # Kontrol paneli
│   │   │   │   ├── epub-reader/ # EPUB okuyucu
│   │   │   │   ├── word-display/ # Kelime gösterimi
│   │   │   │   └── ...
│   │   │   └── shared/         # Paylaşılan bileşenler
│   │   ├── pages/              # Sayfa bileşenleri
│   │   │   ├── home/           # Ana sayfa
│   │   │   ├── library/        # Kütüphane
│   │   │   └── reading/        # Okuma sayfası
│   │   ├── services/           # Servisler
│   │   │   ├── rsvp.service.ts # Ana RSVP mantığı
│   │   │   ├── epub.service.ts # EPUB işlemleri
│   │   │   ├── library.service.ts # Kütüphane yönetimi
│   │   │   └── ...
│   │   ├── models/             # TypeScript interfaces
│   │   └── utils/              # Yardımcı fonksiyonlar
│   └── ...
├── public/                     # Statik dosyalar
└── ...
```

## 🎮 Kullanım

### Temel Kullanım

1. **Ana Sayfa**: Uygulamayı açtığınızda ana sayfa karşınıza çıkar
2. **Metin Ekleme**: 
   - Metni doğrudan yapıştırabilirsiniz
   - TXT dosyası yükleyebilirsiniz
   - EPUB dosyası yükleyebilirsiniz
3. **Okuma Ayarları**:
   - WPM (Words Per Minute) hızını ayarlayın
   - Font boyutunu değiştirin
   - Temayı seçin (Açık/Koyu)
4. **Okumaya Başlayın**: Play butonuna basarak okumaya başlayın

### Gelişmiş Özellikler

- **Kütüphane**: Okuduğunuz kitapları kaydedin ve tekrar okuyun
- **İlerleme Takibi**: Okuma ilerlemenizi takip edin
- **Bölüm Seçimi**: EPUB kitaplarda bölüm seçimi yapın
- **Hızlı Kontroller**: Klavye kısayolları ile hızlı kontrol

## 🔧 Geliştirme

### Komutlar

```bash
# Geliştirme sunucusu
npm start

# Production build
npm run build

# Test çalıştırma
npm test

# Linting
npm run lint
```

### Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📊 İlerleme Durumu

| Kategori | İlerleme | Durum |
|----------|----------|-------|
| 🛠️ Backend/Servisler | %100 | ✅ Tamamlandı |
| 🎨 Frontend/UI | %100 | ✅ Tamamlandı |
| 🔗 Integration | %100 | ✅ Tamamlandı |
| 📱 Mobile/Responsive | %85 | ✅ İyi durumda |
| 📚 EPUB Support | %100 | ✅ Tamamlandı |
| 📖 Kütüphane Sistemi | %100 | ✅ Tamamlandı |
| 🎯 Testing | %0 | ❌ Başlanmadı |

## 🤝 Katkıda Bulunanlar

- [Onur](https://github.com/OnurErkanToros) - Proje Geliştiricisi

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **GitHub**: [@OnurErkanToros](https://github.com/OnurErkanToros)

## 🙏 Teşekkürler

- [Angular](https://angular.io/) ekibine
- [Angular Material](https://material.angular.io/) ekibine
- [epubjs](https://github.com/futurepress/epub.js/) ekibine

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!