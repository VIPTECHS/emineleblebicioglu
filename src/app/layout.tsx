import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Emine İkiz Leblebicioğlu — Dijital Biyografi ve Kişisel Portföy',
  description:
    "Emine İkiz Leblebicioğlu'nun konservatuvar eğitiminden kurumsal yönetime, insan kaynaklarından bilişim, gayrimenkul ve sivil toplum liderliğine uzanan profesyonel yolculuğu ve biyografisi.",
  keywords: [
    'Emine İkiz Leblebicioğlu',
    'Emine Leblebicioğlu',
    'İTÜ Türk Musikisi Devlet Konservatuvarı',
    'Yeditepe Üniversitesi',
    'Kıbrıs Türk Emlakçılar Birliği',
    'KTEB',
    'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği',
    'TAM Parti Girne',
    'Girne',
    'Lefkoşa',
    'Kuzey Kıbrıs',
    'Kişisel Portföy',
  ],
  authors: [{ name: 'Emine İkiz Leblebicioğlu' }],
  openGraph: {
    title: 'Emine İkiz Leblebicioğlu — Dijital Biyografi ve Kişisel Portföy',
    description: 'Bir İsmin Ardındaki Hikâye. Eğitim, kurumsal yönetim, sivil toplum ve profesyonel portföy.',
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
    url: 'https://emineleblebicioglu.com',
  };

  return (
    <html lang="tr">
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
