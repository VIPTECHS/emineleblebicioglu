import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Emine İkiz Leblebicioğlu — TAM Parti Girne Milletvekili Adayı',
  description: 'TAM Parti Girne Milletvekili Adayı Emine İkiz Leblebicioğlu — Dijital Biyografi ve Kişisel Portföy.',
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
    description: 'TAM Parti Girne Milletvekili Adayı Emine İkiz Leblebicioğlu — Dijital Biyografi ve Kişisel Portföy.',
    type: 'profile',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    siteName: 'Emine İkiz Leblebicioğlu',
    images: [
      {
        url: '/emineleblebici.jpeg',
        width: 1530,
        height: 2048,
        alt: 'Emine İkiz Leblebicioğlu — TAM Parti Girne Milletvekili Adayı',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emine İkiz Leblebicioğlu',
    birthDate: '1980-01-25',
    birthPlace: {
      '@type': 'Place',
      name: 'Hatay, Türkiye',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Yeditepe Üniversitesi',
      },
    ],
    jobTitle: 'Yönetici, Danışman & Sivil Toplum Temsilcisi',
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Kıbrıs Türk Emlakçılar Birliği (KTEB)',
      },
      {
        '@type': 'Organization',
        name: 'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Girne / Lefkoşa',
      addressCountry: 'Kuzey Kıbrıs Türk Cumhuriyeti',
    },
    email: 'emine@kibrisemlaksitesi.com',
    url: 'https://emineleblebicioglu.com',
  };

  return (
    <html lang="tr">
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
