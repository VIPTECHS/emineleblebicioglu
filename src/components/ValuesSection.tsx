'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { coreValues } from '@/data/content';
import { EditorialHeading } from './EditorialHeading';
import { VerifiedBadge } from './VerifiedBadge';

export const ValuesSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-ivory-50 border-t border-stoneGray/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <EditorialHeading
          label={language === 'tr' ? 'Bölüm 08 · Prensipler' : 'Section 08 · Core Principles'}
          titleRegular={language === 'tr' ? 'Mesleki' : 'Professional'}
          titleItalic={language === 'tr' ? 'İlkeler.' : 'Foundations.'}
          description={
            language === 'tr'
              ? 'Sektörel çalışmalarda, mesleki temsilde ve kurumsal girişimlerde esas alınan temel yaklaşımlar.'
              : 'Enduring guidelines governing institutional stewardship, stakeholder trust, and disciplined practice.'
          }
        />

        {/* 3-Column Minimal Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {coreValues.map((val) => (
            <div
              key={val.id}
              className="bg-white p-8 md:p-10 border border-stoneGray/70 flex flex-col justify-between hover:border-champagne transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-stoneGray/40">
                  <span className="font-serif text-3xl sm:text-4xl text-champagne-dark font-light">
                    {val.number}
                  </span>
                  <VerifiedBadge status={val.status} />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-light leading-snug">
                  {val.title[language]}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-wider font-sans text-champagne-dark font-medium">
                  {val.subtitle[language]}
                </p>

                <div className="w-10 h-[1px] bg-stoneGray my-5" />

                <p className="text-sm sm:text-base leading-relaxed text-charcoal/75 font-sans">
                  {val.description[language]}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stoneGray/30 text-[11px] text-warmTaupe-dark font-sans">
                {language === 'tr'
                  ? 'Taslak prensip teması · Şahsi onay beklemektedir.'
                  : 'Draft philosophical theme · Subject to direct review.'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
