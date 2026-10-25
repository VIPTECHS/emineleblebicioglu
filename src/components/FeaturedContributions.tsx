'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { featuredContributions } from '@/data/content';
import { EditorialHeading } from './EditorialHeading';
import { VerifiedBadge } from './VerifiedBadge';
import { Layers, Calendar } from 'lucide-react';

export const FeaturedContributions: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'mesleki' | 'sektorel' | 'kurumsal' | 'toplumsal'>('all');

  const filtered = featuredContributions.filter((c) => {
    if (activeTab === 'all') return true;
    return c.categorySlug === activeTab;
  });

  return (
    <section id="calismalar-ve-katkilar" className="py-24 md:py-36 bg-[#F6F2EB] border-b border-stoneGray/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <EditorialHeading
            label={language === 'tr' ? 'Bölüm 04 · İnisiyatifler' : 'Section 04 · Initiatives'}
            titleRegular={language === 'tr' ? 'Çalışmalar ve' : 'Work &'}
            titleItalic={language === 'tr' ? 'Katkılar.' : 'Contributions.'}
            description={
              language === 'tr'
                ? 'Sektörel standartların yükseltilmesi, meslek etiği, şeffaf enformasyon ve sivil toplum diyaloglarına sağlanan katkılar.'
                : 'Substantive contributions across professional standards, ethical valuation, market transparency, and civic dialogue.'
            }
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-2">
            {[
              { id: 'all', tr: 'Tüm Alanlar', en: 'All Pillars' },
              { id: 'mesleki', tr: 'Mesleki Örgütlenme', en: 'Governance' },
              { id: 'sektorel', tr: 'Sektörel Reform', en: 'Industry Reform' },
              { id: 'kurumsal', tr: 'Dijital İnisiyatif', en: 'Digital Platform' },
              { id: 'toplumsal', tr: 'Kamu İstişaresi', en: 'Civic Dialogue' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs font-sans px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-charcoal bg-charcoal text-white font-medium'
                    : 'border-stoneGray bg-white text-charcoal/70 hover:border-bronze hover:text-charcoal'
                }`}
              >
                {language === 'tr' ? tab.tr : tab.en}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Feature Stories */}
        <div className="space-y-16 lg:space-y-24">
          {filtered.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 border border-stoneGray/80 shadow-sm transition-all duration-300 hover:border-bronze/60 hover:shadow-md"
              >
                {/* Visual Editorial Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stoneGray-light border border-stoneGray">
                    <img
                      src={item.image}
                      alt={item.title[language]}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />

                    {/* Image Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-charcoal/85 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-sans border border-white/10">
                        {item.category[language]}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-sans">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-bronze" />
                        <span>{item.date}</span>
                      </div>
                      <span className="text-[11px] text-stoneGray">
                        DOSYA #{item.id.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Story Column */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
                      {item.roleRelation[language]}
                    </span>
                    <VerifiedBadge status={item.verificationStatus} />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light leading-snug">
                    {item.title[language]}
                  </h3>

                  <p className="font-serif text-lg text-charcoal/80 italic">
                    {item.summary[language]}
                  </p>

                  <div className="w-12 h-[1px] bg-bronze/60" />

                  <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
                    {item.narrative[language]}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-xs font-sans text-textGray uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-bronze" />
                    <span>
                      {language === 'tr'
                        ? 'Editoryal Sektör İncelemesi'
                        : 'Editorial Sector Dossier'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
