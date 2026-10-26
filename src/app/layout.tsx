import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, Great_Vibes } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_URL } from '@/lib/seo';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--nf-cormorant',
  display: 'swap',
});
const manrope = Manrope({ subsets: ['latin', 'latin-ext'], variable: '--nf-manrope', display: 'swap' });
const greatVibes = Great_Vibes({ subsets: ['latin', 'latin-ext'], weight: '400', variable: '--nf-greatvibes', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Emine Leblebicioğlu — TAM Parti Girne Milletvekili Aday Adayı',
    template: '%s | Emine İkiz Leblebicioğlu',
  },
  description: 'Emine İkiz Leblebicioğlu’nun resmî web sitesi. TAM Parti Girne milletvekili aday adayı, KTEB yönetim kurulu üyesi; biyografi, siyasi vizyon, kariyer ve basın arşivi.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/emineleblebici.jpeg' },
      { url: '/favicon.ico' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: ['/emineleblebici.jpeg'],
    apple: [
      { url: '/emineleblebici.jpeg' },
      { url: '/apple-touch-icon.png' },
    ],
  },
  keywords: [
    'Emine İkiz Leblebicioğlu',
    'Emine Leblebicioğlu',
    'TAM Parti Girne Milletvekili Adayı',
    'TAM Parti Girne Milletvekili Aday Adayı',
    'Toplumsal Adalet ve Mücadele Partisi',
    'Emine Leblebicioglu',
    'TAM Parti',
    'Girne Milletvekili Adayı',
    'İTÜ Türk Musikisi Devlet Konservatuvarı',
    'Yeditepe Üniversitesi',
    'Kıbrıs Türk Emlakçılar Birliği',
    'KTEB',
    'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği',
    'Girne',
    'Lefkoşa',
    'Kuzey Kıbrıs',
  ],
  authors: [{ name: 'Emine İkiz Leblebicioğlu' }],
  openGraph: {
    title: 'Emine İkiz Leblebicioğlu — TAM Parti Girne Milletvekili Adayı',
    description: 'Emine İkiz Leblebicioğlu’nun resmî web sitesi. TAM Parti Girne milletvekili aday adayı; biyografi, siyasi vizyon ve basın arşivi.',
    url: '/',
    type: 'profile',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    siteName: 'Emine İkiz Leblebicioğlu',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personId = `${SITE_URL}/#person`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Emine İkiz Leblebicioğlu',
        alternateName: ['Emine Leblebicioğlu', 'Emine Leblebicioglu', 'Emine İkiz'],
        description: 'TAM Parti (Toplumsal Adalet ve Mücadele Partisi) Girne milletvekili aday adayı; Kıbrıs Türk Emlakçılar Birliği yönetim kurulu üyesi.',
        image: `${SITE_URL}/emineleblebici.jpeg`,
        url: SITE_URL,
        gender: 'Female',
        birthDate: '1980-01-25',
        birthPlace: { '@type': 'Place', name: 'Hatay, Türkiye' },
        nationality: 'Kuzey Kıbrıs Türk Cumhuriyeti',
        knowsLanguage: ['tr', 'en'],
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı' },
          { '@type': 'CollegeOrUniversity', name: 'Yeditepe Üniversitesi' },
        ],
        jobTitle: 'TAM Parti Girne Milletvekili Aday Adayı',
        affiliation: {
          '@type': 'PoliticalParty',
          name: 'TAM Parti',
          alternateName: 'Toplumsal Adalet ve Mücadele Partisi',
          url: 'https://tamparti.org/',
        },
        memberOf: [
          { '@type': 'Organization', name: 'Kıbrıs Türk Emlakçılar Birliği (KTEB)', url: 'https://kteb.org' },
          { '@type': 'Organization', name: 'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği' },
        ],
        worksFor: { '@type': 'Organization', name: 'Kıbrıs Emlak Sitesi', url: 'https://kibrisemlaksitesi.com' },
        homeLocation: { '@type': 'Place', name: 'Girne, Kuzey Kıbrıs' },
        address: { '@type': 'PostalAddress', addressLocality: 'Girne', addressCountry: 'CY' },
        email: 'emine@kibrisemlaksitesi.com',
        subjectOf: [
          { '@type': 'VideoObject', name: 'Kanal T yayını', url: 'https://www.youtube.com/watch?v=27Qpz0ipjqw' },
          { '@type': 'VideoObject', name: 'Kıbrıs TV yayını', url: 'https://www.youtube.com/watch?v=x2ZZBaJbvZE' },
          { '@type': 'NewsArticle', name: 'Cumhurbaşkanı Tatar, Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği’ni kabul etti', url: 'https://haberkibris.com/cumhurbaskani-tatar-kibris-turk-tasinmaz-mal-degerlendirme-uzmanlari-dernegini-kabul-etti-1840-2025-06-30.html' },
        ],
        // Sosyal medya profilleri eklendiğinde buraya:
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Emine İkiz Leblebicioğlu',
        inLanguage: 'tr-TR',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: 'Emine İkiz Leblebicioğlu — Resmî Web Sitesi',
        mainEntity: { '@id': personId },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
    ],
  };

  return (
    <html lang="tr" className={`${cormorant.variable} ${manrope.variable} ${greatVibes.variable}`}>
      <head>
        <link rel="icon" type="image/jpeg" href="/emineleblebici.jpeg" />
        <link rel="shortcut icon" href="/emineleblebici.jpeg" />
        <link rel="apple-touch-icon" href="/emineleblebici.jpeg" />
      </head>
      <body className="font-sans bg-ivory text-charcoal antialiased selection:bg-champagne selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
