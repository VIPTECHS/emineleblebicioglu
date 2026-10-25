'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { careerPositions } from '@/data/content';
import { EditorialHeading } from './EditorialHeading';
import { VerifiedBadge } from './VerifiedBadge';
import { Building2, ArrowRight, CheckCircle2, Clock, Calendar } from 'lucide-react';

export const CareerTimeline: React.FC = () => {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'corporate' | 'telecom' | 'realestate'>('all');

  const filteredPositions = careerPositions.filter((pos) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'telecom') {
      return pos.id === 'pos-global-bilgi' || pos.id === 'pos-telpa' || pos.id === 'pos-calltech';
    }
    if (selectedFilter === 'corporate') {
      return pos.id === 'pos-jasmine-court' || pos.id === 'pos-arday';
    }
    if (selectedFilter === 'realestate') {
      return pos.id === 'pos-realestate';
    }
    return true;
  });

  return (
    <section id="kariyer-yolculugu" className="py-24 md:py-36 bg-[#FAF8F4] border-b border-stoneGray/60 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <EditorialHeading
            label={language === 'tr' ? 'Bölüm 04 · Kronolojik Süreç' : 'Section 04 · Career Chronology'}
            titleRegular={language === 'tr' ? 'Kariyer' : 'Career'}
            titleItalic={language === 'tr' ? 'Yolculuğu.' : 'Journey.'}
            description={
              language === 'tr'
                ? 'Günümüzden 2002 yılına uzanan; gayrimenkul, bilişim, turizm, insan kaynakları ve telekomünikasyon sektörlerindeki 22+ yıllık yönetimsel ve kurumsal birikim.'
                : 'A 22+ year retrospective tracing from present-day real estate and IT governance back to career beginnings in 2002 across telecommunications and human resources.'
            }
          />

          {/* Filter Navigation (Reverse Chronological) */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {[
              { id: 'all', labelTR: 'Tümü (Günümüz — 2002)', labelEN: 'All (Present — 2002)' },
              { id: 'realestate', labelTR: 'Gayrimenkul (2019+)', labelEN: 'Real Estate (2019+)' },
              { id: 'corporate', labelTR: 'Bilişim & Turizm', labelEN: 'IT & Hospitality' },
              { id: 'telecom', labelTR: 'Telekom & İK (2002—2009)', labelEN: 'Telecom & HR (2002—2009)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-widest transition-all ${
                  selectedFilter === f.id
                    ? 'bg-charcoal text-white font-medium shadow-sm'
                    : 'bg-white border border-stoneGray/70 text-charcoal/70 hover:text-charcoal hover:border-bronze'
                }`}
              >
                {language === 'tr' ? f.labelTR : f.labelEN}
              </button>
            ))}
          </div>
        </div>

        {/* Main Vertical Interactive Timeline */}
        <div className="relative border-l border-bronze/40 ml-4 md:ml-32 pl-6 md:pl-12 space-y-16">
          {filteredPositions.map((pos, idx) => (
            <div key={pos.id} className="relative group">
              
              {/* Timeline Marker Bullet */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-bronze group-hover:scale-125 transition-transform" />

              {/* Sticky Year Indicator (Visible on Desktop to the left of the border) */}
              <div className="md:absolute md:-left-36 md:top-0 font-serif text-2xl md:text-3xl font-light text-bronze mb-2 md:mb-0 select-none">
                {pos.period.split('—')[0].trim()}
              </div>

              {/* Main Position Card */}
              <div className="bg-white border border-stoneGray/80 p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md hover:border-bronze/60">
                
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-stoneGray/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8F4] border border-bronze/40 text-[11px] font-sans font-medium text-bronze uppercase tracking-wider">
                      <Calendar className="w-3 h-3" />
                      {pos.period}
                    </span>
                    {pos.isOverlapping && (
                      <span className="px-2 py-0.5 bg-amber-50 border border-amber-300/70 text-[10px] text-amber-800 font-sans tracking-wide">
                        {language === 'tr' ? 'Örtüşen Dönem' : 'Concurrent Period'}
                      </span>
                    )}
                  </div>
                  <VerifiedBadge status={pos.verificationStatus} />
                </div>

                {/* Company & Title */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-textGray font-sans">
                    <Building2 className="w-3.5 h-3.5 text-bronze" />
                    <span>{pos.company}</span>
                    <span>·</span>
                    <span className="text-bronze font-medium">{language === 'tr' ? pos.sector.tr : pos.sector.en}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium leading-snug">
                    {language === 'tr' ? pos.position.tr : pos.position.en}
                  </h3>
                </div>

                {/* Context Description */}
                <p className="text-xs sm:text-sm text-textGray font-sans leading-relaxed mb-6 italic">
                  {language === 'tr' ? pos.context.tr : pos.context.en}
                </p>

                {/* Responsibilities Bullet List */}
                <div className="space-y-2.5 pt-4 border-t border-stoneGray/30">
                  <span className="text-[11px] uppercase tracking-wider text-charcoal font-sans font-semibold block mb-1">
                    {language === 'tr' ? 'Temel Sorumluluklar & Görev Alanları:' : 'Key Responsibilities & Scope:'}
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-charcoal/75 leading-relaxed">
                    {(language === 'tr' ? pos.responsibilities.tr : pos.responsibilities.en).map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-bronze flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Index */}
                <div className="mt-6 pt-4 border-t border-stoneGray/30 flex items-center justify-end text-[11px] text-stoneGray font-sans">
                  <span>#0{idx + 1}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Action Link to Full Career Dossier */}
        <div className="mt-16 text-center">
          <Link
            href="/kariyer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 hover:bg-black shadow-sm"
          >
            <span>{language === 'tr' ? 'TÜM KARİYER DETAYLARINI İNCELEYİN' : 'EXPLORE COMPLETE CAREER DOSSIER'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-bronze group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
