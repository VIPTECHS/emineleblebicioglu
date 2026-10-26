'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { EditorialHeading } from './EditorialHeading';

type Faq = { q: { tr: string; en: string }; a: { tr: string; en: string } };

// Arama motorları ve yapay zekâ asistanları için kısa, doğrudan cevaplar
const faqs: Faq[] = [
  {
    q: { tr: 'Emine Leblebicioğlu kimdir?', en: 'Who is Emine Leblebicioğlu?' },
    a: {
      tr: 'Emine İkiz Leblebicioğlu, 1980 Hatay doğumlu, Girne’de yaşayan yönetici ve sivil toplum temsilcisidir. TAM Parti Girne milletvekili aday adayıdır; Kıbrıs Türk Emlakçılar Birliği (KTEB) ve Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği’nde yönetim kurulu üyesidir.',
      en: 'Emine İkiz Leblebicioğlu, born in Hatay in 1980 and based in Kyrenia, is an executive and civil society representative. She is a TAM Party parliamentary nominee for Kyrenia and a board member of the Cyprus Turkish Real Estate Agents Association (KTEB) and the Cyprus Turkish Real Estate Valuation Experts Association.',
    },
  },
  {
    q: { tr: 'Emine Leblebicioğlu hangi partiden aday?', en: 'Which party does Emine Leblebicioğlu represent?' },
    a: {
      tr: 'Emine Leblebicioğlu, TAM Parti (Toplumsal Adalet ve Mücadele Partisi) bünyesinde siyaset yapmaktadır.',
      en: 'Emine Leblebicioğlu is affiliated with TAM Party (Social Justice and Struggle Party).',
    },
  },
  {
    q: { tr: 'Emine Leblebicioğlu hangi bölgeden aday?', en: 'Which constituency is she running in?' },
    a: {
      tr: 'TAM Parti Girne milletvekili aday adayıdır.',
      en: 'She is a TAM Party parliamentary nominee for the Kyrenia (Girne) district.',
    },
  },
  {
    q: { tr: 'Emine Leblebicioğlu’nun öncelikli çalışma alanları nelerdir?', en: 'What are her priority areas?' },
    a: {
      tr: 'Ekonomik kalkınma, kadın istihdamı, kamu hizmetlerinde dijitalleşme, gençlerin mesleki eğitimi, taşınmaz piyasasında kurumsallaşma ve sivil toplumun karar alma süreçlerine katılımı.',
      en: 'Economic development, women’s employment, digital public services, youth vocational training, institutionalisation of the real estate market, and civil society participation in decision-making.',
    },
  },
  {
    q: { tr: 'Emine Leblebicioğlu nerede eğitim aldı?', en: 'Where did she study?' },
    a: {
      tr: 'İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı ve Yeditepe Üniversitesi mezunudur.',
      en: 'She graduated from the Istanbul Technical University State Conservatory of Turkish Music and Yeditepe University.',
    },
  },
  {
    q: { tr: 'Emine Leblebicioğlu ile nasıl iletişime geçilir?', en: 'How can I contact her?' },
    a: {
      tr: 'emine@kibrisemlaksitesi.com adresinden veya bu sitedeki iletişim sayfasından ulaşabilirsiniz.',
      en: 'Via emine@kibrisemlaksitesi.com or the contact page on this website.',
    },
  },
];

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q.tr,
      acceptedAnswer: { '@type': 'Answer', text: f.a.tr },
    })),
  };

  return (
    <section className="py-24 md:py-32 bg-ivory border-t border-stoneGray/60">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <EditorialHeading
          label={language === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
          titleRegular={language === 'tr' ? 'Kısaca' : 'In'}
          titleItalic={language === 'tr' ? 'Emine Leblebicioğlu.' : 'Brief.'}
        />
        <div className="divide-y divide-stoneGray/60 border-y border-stoneGray/60">
          {faqs.map((f) => (
            <details key={f.q.tr} className="group py-6">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-serif text-xl md:text-2xl text-charcoal">
                <h3>{f.q[language]}</h3>
                <span className="text-champagne-dark text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">{f.a[language]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
