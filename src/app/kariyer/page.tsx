'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { careerPositions, siteConfig } from '@/data/content';
import { EditorialHeading } from '@/components/EditorialHeading';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { Building2, Calendar, CheckCircle2, ArrowRight, Briefcase, Award, ShieldCheck } from 'lucide-react';

const positionImages: Record<string, { src: string; captionTR: string; captionEN: string }> = {
  'pos-global-bilgi': {
    src: '/images/strip-career.jpg',
    captionTR: 'Operasyonel Liderlik & Telekomünikasyon Süreçleri',
    captionEN: 'Operational Leadership & Telecommunications',
  },
  'pos-telpa': {
    src: '/images/hero-left-architecture.jpg',
    captionTR: 'İnsan Kaynakları & Yetkinlik Danışmanlığı',
    captionEN: 'Human Resources & Competence Advisory',
  },
  'pos-jasmine-court': {
    src: '/images/kyrenia-castle.jpg',
    captionTR: 'Jasmine Court Hotel · Girne Turizm Yönetimi',
    captionEN: 'Jasmine Court Hotel · Kyrenia Hospitality Operations',
  },
  'pos-calltech': {
    src: '/images/strip-work.jpg',
    captionTR: 'Çağrı Merkezi Operasyonel Altyapı Yönetimi',
    captionEN: 'Call Center Operational Infrastructure',
  },
  'pos-arday': {
    src: '/images/tower-thumb.jpg',
    captionTR: 'Kurumsal Danışmanlık & Bilişim Projeleri',
    captionEN: 'Corporate Advisory & IT Implementations',
  },
  'pos-realestate': {
    src: '/images/delegation-presidency-tatar.jpg',
    captionTR: 'Kuzey Kıbrıs Gayrimenkul & Cumhurbaşkanlığı Heyet Kabulü',
    captionEN: 'North Cyprus Real Estate & Presidential Delegation',
  },
};

export default function CareerPage() {
  const { language } = useLanguage();
  const [activeSector, setActiveSector] = useState<string>('all');

  const filteredPositions = careerPositions.filter((p) => {
    if (activeSector === 'all') return true;
    return p.id === activeSector;
  });

  return (
    <div className="pt-24 pb-28 bg-[#F6F2EB] min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Page Hero Header */}
        <div className="border-b border-bronze/40 pb-12 mb-16">
          <EditorialHeading
            label={language === 'tr' ? 'Kariyer & Profesyonel Süreç' : 'Career & Trajectory'}
            titleRegular={language === 'tr' ? 'Günümüzden 2002’ye' : 'Present to 2002'}
            titleItalic={language === 'tr' ? 'Kariyer Yolculuğu.' : 'Professional Chronology.'}
            description={
              language === 'tr'
                ? "Gayrimenkul, taşınmaz değerleme ve bilişim yönetiminden başlayarak 2002 yılındaki telekomünikasyon temellerine uzanan 22+ yıllık yönetimsel ve danışmanlık retrospektifi."
                : "A comprehensive 22+ year retrospective tracing from contemporary real estate, valuation, and IT governance back to telecommunications foundations in 2002."
            }
          />
        </div>

        {/* Career Philosophy Quote Card */}
        <div className="bg-[#FAF8F4] border border-stoneGray/80 p-8 sm:p-12 mb-20 shadow-sm relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
              {language === 'tr' ? 'KARİYER VİZYONU' : 'CAREER VISION'}
            </span>
            <p className="font-serif italic text-2xl sm:text-3xl text-charcoal font-light leading-snug">
              {language === 'tr'
                ? '“Gerçek bir profesyonel birikim, tek bir sektöre sıkışıp kalmadan; insanın olduğu her yerde dinleme, organize etme, şeffaflık ve kurumsal disiplini inşa edebilme sanatıdır.”'
                : '“True professional mastery is not confined to a single sector; it is the art of listening, organizing, and establishing transparency and governance wherever human enterprise flourishes.”'}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-sans text-textGray">
              <span className="font-semibold text-charcoal">Emine İkiz Leblebicioğlu</span>
              <span>·</span>
              <span>{language === 'tr' ? 'Profesyonel Yaşam Perspektifi' : 'Professional Life Perspective'}</span>
            </div>
          </div>
        </div>

        {/* Sector Quick Filters (Reverse Chronological) */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          <span className="text-xs uppercase tracking-widest text-textGray font-sans mr-2">
            {language === 'tr' ? 'Dönem Filtresi:' : 'Period Filter:'}
          </span>
          {[
            { id: 'all', labelTR: 'Tüm Dönemler (Günümüz — 2002)', labelEN: 'All Eras (Present — 2002)' },
            { id: 'pos-realestate', labelTR: '2019+ Gayrimenkul & Değerleme', labelEN: '2019+ Real Estate & Valuation' },
            { id: 'pos-arday', labelTR: '2015+ Arday Bilişim', labelEN: '2015+ Arday IT' },
            { id: 'pos-calltech', labelTR: '2012—2014 Calltech', labelEN: '2012—2014 Calltech' },
            { id: 'pos-jasmine-court', labelTR: '2010 Jasmine Court', labelEN: '2010 Jasmine Court' },
            { id: 'pos-telpa', labelTR: '2007—2009 Telpa İK', labelEN: '2007—2009 Telpa HR' },
            { id: 'pos-global-bilgi', labelTR: '2002—2009 Global Bilgi', labelEN: '2002—2009 Global Bilgi' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveSector(f.id)}
              className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-widest transition-all ${
                activeSector === f.id
                  ? 'bg-charcoal text-white font-medium shadow-sm'
                  : 'bg-white border border-stoneGray/70 text-charcoal/70 hover:text-charcoal hover:border-bronze'
              }`}
            >
              {language === 'tr' ? f.labelTR : f.labelEN}
            </button>
          ))}
        </div>

        {/* Long-Form Chronology Cards */}
        <div className="space-y-16">
          {filteredPositions.map((pos, idx) => {
            const imgData = positionImages[pos.id];
            const isEven = idx % 2 === 0;

            return (
              <div
                key={pos.id}
                className="bg-white border border-stoneGray/80 p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-md hover:border-bronze/60 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Column: Oversized Dates & Context Information */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-stoneGray/40">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-3xl sm:text-4xl text-bronze font-light">
                          {pos.period}
                        </span>
                        {pos.isOverlapping && (
                          <span className="px-2 py-0.5 bg-amber-50 border border-amber-300/70 text-[10px] text-amber-800 font-sans tracking-wide">
                            {language === 'tr' ? 'Örtüşen Süreç' : 'Concurrent'}
                          </span>
                        )}
                      </div>
                      <VerifiedBadge status={pos.verificationStatus} />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] uppercase tracking-widest text-textGray font-sans block">
                        {pos.company}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium leading-snug">
                        {language === 'tr' ? pos.position.tr : pos.position.en}
                      </h3>
                      <p className="text-xs font-sans text-bronze font-medium">
                        {language === 'tr' ? pos.sector.tr : pos.sector.en}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-textGray font-sans leading-relaxed italic">
                      {language === 'tr' ? pos.context.tr : pos.context.en}
                    </p>

                    {/* Supporting Context Photo */}
                    {imgData && (
                      <div className="border border-stoneGray/70 overflow-hidden bg-[#FAF8F4] p-2">
                        <div className="aspect-[16/9] overflow-hidden relative">
                          <img
                            src={imgData.src}
                            alt={language === 'tr' ? imgData.captionTR : imgData.captionEN}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-[10px] text-textGray font-sans mt-2">
                          {language === 'tr' ? imgData.captionTR : imgData.captionEN}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Detailed Responsibilities & Scope */}
                  <div className="lg:col-span-7 lg:border-l lg:border-stoneGray/40 lg:pl-10 space-y-6">
                    <span className="text-xs uppercase tracking-widest text-charcoal font-sans font-semibold block pb-2 border-b border-stoneGray/30">
                      {language === 'tr' ? 'Üstlenilen Görev ve Süreçler' : 'Responsibilities & Executive Scope'}
                    </span>

                    <ul className="space-y-3.5 text-xs sm:text-sm font-sans text-charcoal/80 leading-relaxed">
                      {(language === 'tr' ? pos.responsibilities.tr : pos.responsibilities.en).map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Factual Record Statement */}
                    <div className="pt-6 border-t border-stoneGray/30 flex items-center justify-between text-[11px] text-textGray font-sans">
                      <span>
                        {language === 'tr' ? 'Doğrulama Notu: ' : 'Verification Note: '}
                        <strong className="text-charcoal font-medium">
                          {language === 'tr' ? pos.sourceLabel?.tr : pos.sourceLabel?.en}
                        </strong>
                      </span>
                      <span className="text-stoneGray">#0{idx + 1}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-10 border-t border-stoneGray/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/egitim-ve-katkilar"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-bronze transition-colors"
          >
            <span>{language === 'tr' ? 'Eğitim ve Gönüllülük Sayfasına Geçin' : 'Explore Education & Social Impact'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-bronze" />
          </Link>

          <Link
            href="/calismalar"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-bronze transition-colors"
          >
            <span>{language === 'tr' ? 'Sivil Toplum ve Dernek Görevleri' : 'Explore Civil Society & Associations'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-bronze" />
          </Link>
        </div>

      </div>
    </div>
  );
}
