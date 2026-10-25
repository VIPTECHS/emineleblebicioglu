# EMİNE LEBLEBİCİOĞLU — KİŞİSEL PORTFÖY & DİJİTAL BİYOGRAFİ

> **"Bir İsmin Ardındaki Hikâye."**  
> Prestijli, editoryal ve zamansız bir kişisel miras ve dijital biyografi platformu.

Bu proje, **Emine Leblebicioğlu** için tasarlanmış ve geliştirilmiş; bir emlak acentesi veya ilan sitesi **olmayan**, tamamen şahsın kimliğini, mesleki yolculuğunu, sivil toplum görevlerini ve kurumsal temsiliyetlerini uluslararası editoryal yayıncılık standartlarında sunan özel bir web sitesidir.

---

## 🏛️ Tasarım İlkeleri ("Quiet Authority")

- **Editoryal Denge:** Yüksek tirajlı mimarlık ve lüks yaşam dergilerinin tipografik zarafeti.
- **Renk Sistemi:**
  - **Sıcak Fildişi (`#F7F5F0`):** İçerik ve editoryal alanlar için ferah zemin (%70)
  - **Derin Kömür Grisi (`#1D201F`):** Tipografi, prestij kontrastı ve felsefe blokları (%25)
  - **Yumuşak Şampanya (`#B39A78`):** İnce ayraçlar, rozetler ve vurgu detayları (%5)
  - **Taş Grisi (`#D9D5CD`) & Sıcak Vizon (`#A9A093`):** Kenarlıklar ve ikincil dokular
- **Tipografi:**
  - Başlıklar: **Cormorant Garamond** (İtalik serif vurguları ve dergi kapağı tarzı kompozisyon)
  - Metinler: **Manrope** (Modern, yüksek okunurluklu sans-serif, eksiksiz Türkçe karakter desteği)

---

## 🔍 Doğrulanmış Kamu Verisi ve Editoryal Güvence

Sitede yer alan tüm mesleki bilgiler tescilli ve kamuya açık kaynaklara dayandırılmış; şahsi onay bekleyen taslak alanlar ise şeffaf rozetlerle (`VerifiedBadge`) belirtilmiştir:

1. **Kıbrıs Türk Emlakçılar Birliği (KTEB):** Belgelenmiş Yönetim Kurulu Üyeliği.
2. **Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği:** Belgelenmiş Yönetim Kurulu ve Genel Sekreterlik görevi.
3. **Kıbrıs Emlak Sitesi:** Kurucu temsilcilik ve sektörel dijital yayıncılık inisiyatifi.
4. **Leb-Tur Gayrimenkul & Eksper Kıbrıs:** Kamuya açık sicil ve değerleme faaliyetleri (2018 operasyonel başlangıç).
5. **KKTC Cumhurbaşkanlığı Heyet Ziyareti (2025):** Taşınmaz değerlendirme uzmanları heyetiyle üst düzey istişare kabulü.

---

## 🌐 Sayfa ve Bölüm Mimarisi

### Ana Sayfa (Master Homepage)
1. **Editoryal Header & Navigasyon:** Minimal `EL.` monogramı, TR/EN çift dilli geçiş, tam ekran mobil menü.
2. **Bölüm 01 — Hero:** Asimetrik dergi kapağı mizanpajı, editoryal portre alanı, zarif kaydırma rehberi.
3. **Bölüm 02 — Giriş ("Kimdir?"):** "Bir kariyerden daha fazlası" iki sütunlu editoryal anlatım.
4. **Bölüm 03 — Kronoloji ("Yolculuk"):** İnteraktif, kategori filtreli (2018, 2023, 2024, 2025) zaman tüneli.
5. **Bölüm 04 — Görevler ve Sorumluluklar:** Yönetim profili tarzında kurumsal tescil ve birlik kartları.
6. **Bölüm 05 — Çalışmalar ve Katkılar:** Mesleki standartlar, yasal hak savunuculuğu ve dijital vizyon dosyaları.
7. **Bölüm 06 — Bakış Açısı (Perspective):** Kömür grisi derin zemin, felsefi editoryal manifesto ("Deneyim, yalnızca yıllarla ölçülmez").
8. **Bölüm 07 — Basında ve Kamuoyunda:** Filtrelenebilir basın, etkinlik ve kurumsal açıklamalar arşivi.
9. **Bölüm 08 — Kareler (Photo Journal):** Asimetrik fotoğraf seçkisi ve tam ekran Lightbox modal inceleme.
10. **Bölüm 09 — Değerler (Principles):** Güven, Kurumsal Sorumluluk, Süreklilik prensipleri.
11. **Bölüm 10 — İletişim (Dialogue):** Doğrulanmış temas bilgileri, KVKK onaylı ve sunucu doğrulamalı form.
12. **Editoryal Footer:** Büyük `EMİNE LEBLEBİCİOĞLU` tipografisi, telif ve monogram.

### Bağımsız Alt Sayfalar
- `/hakkinda` — Zenginleştirilmiş tam biyografi ve kurumsal profil sayfası
- `/kariyer` — Detaylı kariyer kronolojisi ve birlik organları
- `/calismalar` — İnisiyatif ve sektörel dosyalar
- `/basin` — Filtrelenebilir kamuoyu ve medya bülteni
- `/iletisim` — Resmî randevu ve istişare iletişim kanalı

---

## ⚙️ Teknik Altyapı ve Çalıştırma

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Stil & Tasarım:** Tailwind CSS + PostCSS + Autoprefixer
- **İkonlar:** Lucide React
- **Durum & Dil:** React Context (`LanguageContext`) ile anlık TR/EN desteği
- **SEO & Semantik:** Schema.org `Person` JSON-LD yapılandırılmış verisi

### Geliştirme Sunucusunu Başlatma

```bash
pnpm dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açınız.

### Canlı Prodüksiyon Derlemesi

```bash
pnpm build
pnpm start
```
