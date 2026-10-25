'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { affiliationsData } from '@/data/content';
import { EditorialHeading } from './EditorialHeading';
import { VerifiedBadge } from './VerifiedBadge';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const AffiliationsGrid: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="gorevler-ve-sorumluluklar" className="py-24 md:py-32 bg-ivory-50 border-t border-stoneGray/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <EditorialHeading
          label={language === 'tr' ? 'Bölüm 03 · Kurumsal Profil' : 'Section 03 · Governance & Roles'}
          titleRegular={language === 'tr' ? 'Görevler ve' : 'Roles &'}
          titleItalic={language === 'tr' ? 'Sorumluluklar.' : 'Affiliations.'}
          description={
            language === 'tr'
              ? 'Meslek örgütleri, değerleme dernekleri ve kurumsal platformlardaki belgelenmiş yönetsel temsiller.'
              : 'Formally recorded responsibilities across professional unions, valuation boards, and corporate entities.'
          }
        />

        {/* Editorial Executive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {affiliationsData.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white p-8 md:p-10 border border-stoneGray/70 hover:border-champagne transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              {/* Top Row: Category & Verification */}
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-stoneGray/40">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-warmTaupe-dark font-medium">
                    0{index + 1} // {item.period[language]}
                  </span>
                  <VerifiedBadge status={item.verificationStatus} />
                </div>

                {/* Organization & Role */}
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-light group-hover:text-champagne-dark transition-colors">
                  {item.organization}
                </h3>

                <p className="mt-2 text-xs md:text-sm font-sans uppercase tracking-wider text-champagne-dark font-medium">
                  {item.role[language]}
                </p>

                {/* Description */}
                <p className="mt-5 text-sm md:text-base leading-relaxed text-charcoal/75 font-sans">
                  {item.description[language]}
                </p>
              </div>

              {/* Bottom Note & Action */}
              <div className="mt-8 pt-6 border-t border-stoneGray/40 flex items-end justify-between gap-4">
                <div className="text-[11px] text-warmTaupe-dark font-sans leading-normal max-w-xs">
                  <span className="font-medium text-charcoal-700 block mb-0.5">
                    {language === 'tr' ? 'Tescil & Belge Dayanağı:' : 'Archival Basis:'}
                  </span>
                  {item.sourceNote ? item.sourceNote[language] : ''}
                </div>

                {item.websiteUrl && (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-sans font-medium text-charcoal group-hover:text-champagne-dark transition-colors"
                  >
                    <span>{language === 'tr' ? 'Resmî Sayfa' : 'Official Page'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

              {/* Delicate line expand hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-champagne-dark transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Sektörel Duruş Notu */}
        <div className="mt-12 flex items-center justify-between p-4 bg-white/50 border border-stoneGray/60 text-xs font-sans text-charcoal/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-champagne-dark" />
            <span>
              {language === 'tr'
                ? 'Yukarıdaki kurumlar, Emine İkiz Leblebicioğlu’nun mesleki ve sivil toplum yolculuğunun kilometre taşları olarak listelenmiştir; ticari emlak pazarlama unsuru değildir.'
                : 'The aforementioned bodies constitute documented milestones in Emine İkiz Leblebicioğlu’s career narrative; they do not represent commercial listing inventory.'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
