'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { pressItems } from '@/data/content';
import { EditorialHeading } from './EditorialHeading';
import { Newspaper, Calendar, ExternalLink, Play, Film } from 'lucide-react';

export const PressArchive: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'video' | 'haber' | 'etkinlik' | 'aciklama'>('all');

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
                ? 'Televizyon yayınları, canlı röportajlar, resmî kabul bildirimleri ve basına yansıyan sektörel gelişmeler.'
                : 'Television broadcasts, live interviews, official reception notices, and verified press coverage.'
            }
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-2">
            {[
              { id: 'all', tr: 'Tümü', en: 'All Records' },
              { id: 'video', tr: 'TV & Video Yayınları', en: 'TV & Video Broadcasts' },
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

        {/* Press Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const isVideo = item.mediaType === 'video' || !!item.videoId;
            const hasPhoto = item.thumbnailUrl || (item.id === 'p-1' ? '/images/delegation-presidency-tatar.jpg' : null);

            return (
              <div
                key={item.id}
                className="bg-white p-8 border border-stoneGray/80 hover:border-bronze transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  {/* Media Visual: Video Thumbnail or Press Photo */}
                  {hasPhoto && (
                    <div className="mb-6 relative aspect-[16/9] overflow-hidden border border-stoneGray bg-stoneGray-light">
                      <img
                        src={hasPhoto}
                        alt={item.headline[language]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      
                      {isVideo && item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={language === 'tr' ? 'Yayını İzle' : 'Watch Broadcast'}
                          className="absolute inset-0 bg-charcoal/30 flex items-center justify-center group-hover:bg-charcoal/40 transition-colors"
                        >
                          <div className="w-14 h-14 rounded-full bg-white/95 text-[#c4302b] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </div>
                          <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-charcoal/85 backdrop-blur-sm text-white text-[11px] font-sans font-medium flex items-center gap-1.5">
                            <Film className="w-3 h-3 text-bronze" />
                            {item.publication}
                          </span>
                        </a>
                      )}

                      {!isVideo && item.id === 'p-1' && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/75 backdrop-blur-sm text-white text-[10px] font-sans">
                          Haber Kıbrıs Resmî Fotoğrafı · 30 Haziran 2025
                        </div>
                      )}
                    </div>
                  )}

                  {/* Meta Header */}
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-stoneGray/40">
                    <div className="flex items-center gap-2 text-xs font-sans text-textGray">
                      <Calendar className="w-3.5 h-3.5 text-bronze" />
                      <span className="font-medium text-charcoal">{item.date}</span>
                      <span className="text-stoneGray">·</span>
                      <span className="uppercase tracking-wider text-[11px] text-bronze font-medium">
                        {item.tag[language]}
                      </span>
                    </div>
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

                {/* Footer with Outbound Link / Action */}
                <div className="mt-8 pt-5 border-t border-stoneGray/40 flex items-center justify-between text-xs font-sans text-textGray">
                  <span className="flex items-center gap-1.5 text-charcoal/70">
                    {isVideo ? (
                      <Film className="w-3.5 h-3.5 text-[#1B5B9E]" />
                    ) : (
                      <Newspaper className="w-3.5 h-3.5 text-bronze" />
                    )}
                    <span>{item.publication}</span>
                  </span>
                  
                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-all font-medium ${
                        isVideo
                          ? 'bg-[#c4302b]/10 text-[#c4302b] hover:bg-[#c4302b] hover:text-white'
                          : 'text-bronze hover:text-charcoal'
                      }`}
                    >
                      {isVideo && <Play className="w-3 h-3 fill-current" />}
                      <span>
                        {isVideo
                          ? (language === 'tr' ? 'Yayını İzle' : 'Watch Broadcast')
                          : (language === 'tr' ? 'Habere Git' : 'Source Link')}
                      </span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
