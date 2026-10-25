'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { pressItems } from '@/data/content';
import { EditorialHeading } from './EditorialHeading';
import { VerifiedBadge } from './VerifiedBadge';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';

export const PressArchive: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'haber' | 'etkinlik' | 'aciklama'>('all');

  const filteredItems = pressItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="basinda-ve-kamuoyunda" className="py-24 md:py-36 bg-[#FAF8F4] border-b border-stoneGray/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading with Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <EditorialHeading
            label={language === 'tr' ? 'Bölüm 07 · Basın & Arşiv' : 'Section 07 · Press & Public Archive'}
            titleRegular={language === 'tr' ? 'Basında ve' : 'Press &'}
            titleItalic={language === 'tr' ? 'Kamuoyunda.' : 'Public Record.'}
            description={
              language === 'tr'
                ? 'Resmî kabul bildirimleri, meslek odası kararları ve basına yansıyan sektörel gelişmeler.'
                : 'Verifiable press releases, union assembly notices, and official government delegations.'
            }
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-2">
            {[
              { id: 'all', tr: 'Tümü', en: 'All Records' },
              { id: 'haber', tr: 'Haberler', en: 'News' },
              { id: 'etkinlik', tr: 'Etkinlikler & Kabuller', en: 'Receptions' },
              { id: 'aciklama', tr: 'Kurumsal Açıklamalar', en: 'Statements' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`text-xs font-sans px-4 py-2 rounded-full border transition-all duration-200 ${
                  filter === f.id
                    ? 'border-charcoal bg-charcoal text-white font-medium'
                    : 'border-stoneGray bg-white text-charcoal/70 hover:border-bronze hover:text-charcoal'
                }`}
              >
                {language === 'tr' ? f.tr : f.en}
              </button>
            ))}
          </div>
        </div>

        {/* Press Items Grid with Real Article Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const hasRealPhoto = item.id === 'p-1';

            return (
              <div
                key={item.id}
                className="bg-white p-8 border border-stoneGray/80 hover:border-bronze transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Real Photo for Documented Reception */}
                  {hasRealPhoto && (
                    <div className="mb-6 relative aspect-[16/9] overflow-hidden border border-stoneGray bg-stoneGray-light">
                      <img
                        src="/images/delegation-presidency-tatar.jpg"
                        alt="Cumhurbaşkanı Tatar, Taşınmaz Mal Değerlendirme Uzmanları Derneğini kabul etti"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/75 backdrop-blur-sm text-white text-[10px] font-sans">
                        Haber Kıbrıs Resmî Fotoğrafı · 30 Haziran 2025
                      </div>
                    </div>
                  )}

                  {/* Meta Header */}
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-stoneGray/40">
                    <div className="flex items-center gap-2 text-xs font-sans text-textGray">
                      <Calendar className="w-3.5 h-3.5 text-bronze" />
                      <span className="font-medium text-charcoal">{item.date}</span>
                      <span className="text-stoneGray">·</span>
                      <span className="uppercase tracking-wider text-[11px]">{item.tag[language]}</span>
                    </div>
                    <VerifiedBadge status={item.verificationStatus} />
                  </div>

                  {/* Source Publication */}
                  <p className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold mb-2">
                    {item.publication}
                  </p>

                  {/* Headline */}
                  <h3 className="font-serif text-2xl text-charcoal font-light leading-snug hover:text-bronze transition-colors">
                    {item.headline[language]}
                  </h3>

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/75 font-sans font-light">
                    {item.summary[language]}
                  </p>
                </div>

                {/* Footer with Outbound Verifiable Link */}
                <div className="mt-8 pt-5 border-t border-stoneGray/40 flex items-center justify-between text-xs font-sans text-textGray">
                  <span className="flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-bronze" />
                    <span>
                      {language === 'tr' ? 'Doğrulanmış Resmî Kayıt' : 'Verified Public Record'}
                    </span>
                  </span>
                  {item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-bronze hover:text-charcoal font-medium"
                    >
                      <span>{language === 'tr' ? 'Habere Git' : 'Source Link'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-warmTaupe uppercase tracking-wider">
                      REF: {item.id.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
