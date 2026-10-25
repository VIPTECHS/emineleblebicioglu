'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { politicalProfile } from '@/data/content';
import { imageManifest } from '@/data/imageManifest';
import { TrendingUp, Users2, Cpu, GraduationCap, Scale, Building, Info, ArrowRight, ExternalLink } from 'lucide-react';
import { VerifiedBadge } from './VerifiedBadge';

const areaIcons = [TrendingUp, Users2, Cpu, GraduationCap, Scale, Building];

export const PoliticalAndPublicSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="siyasi-toplumsal" className="py-20 md:py-28 bg-[#FAF8F4] border-b border-stoneGray/60 relative overflow-hidden">
      
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header Indicator */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-bronze/40">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1.5px] bg-[#1B5B9E]" />
            <span className="text-xs uppercase tracking-widest-editorial font-sans text-textGray font-medium">
              {language === 'tr' ? 'Bölüm 02 · Siyasi ve Toplumsal Çalışmalar' : 'Section 02 · Political & Civic Engagement'}
            </span>
          </div>
          <VerifiedBadge status="owner_provided" />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.08] tracking-tight">
            {language === 'tr' ? (
              <>
                Siyasi ve toplumsal <br />
                <em className="italic font-normal text-[#1B5B9E] font-serif">
                  çalışmalar.
                </em>
              </>
            ) : (
              <>
                Civic & political <br />
                <em className="italic font-normal text-[#1B5B9E] font-serif">
                  engagement.
                </em>
              </>
            )}
          </h2>
          <p className="mt-5 text-sm sm:text-base text-textGray font-sans leading-relaxed">
            {language === 'tr'
              ? 'Toplumsal Adalet ve Mücadele Partisi (TAM Parti) Girne Milletvekili Aday Adaylığı süreci ve Kuzey Kıbrıs’ın geleceğine odaklanan kamu yararı çalışmaları.'
              : 'Her nomination candidacy as TAM Party Kyrenia Parliamentary Candidate Nominee and public-interest initiatives centered on the civic progress of Northern Cyprus.'}
          </p>
        </div>

        {/* Factual Political Status Panel with Authentic TAM Parti Logo & Portrait */}
        <div className="bg-white border border-stoneGray/80 border-t-2 border-t-[#1B5B9E] p-7 sm:p-10 shadow-sm mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Identity & Party Logos */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-20 h-24 overflow-hidden border border-bronze/40 bg-charcoal">
                  <img
                    src={imageManifest.portrait.localPath}
                    alt="Emine İkiz Leblebicioğlu"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div className="w-20 h-24 p-2 bg-[#FAF8F4] border border-stoneGray/70 flex items-center justify-center">
                  <img
                    src={imageManifest.tamPartiLogo.localPath}
                    alt="TAM Parti Resmî Amblemi"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#1B5B9E] font-sans font-semibold block">
                  {language === 'tr' ? 'SİYASİ BAĞLILIK & STATÜ' : 'POLITICAL AFFILIATION'}
                </span>
                <h3 className="font-serif text-2xl text-charcoal font-medium">
                  {politicalProfile.party}
                </h3>
                <p className="text-xs text-textGray font-sans">
                  {language === 'tr' ? politicalProfile.partyFullName.tr : politicalProfile.partyFullName.en}
                </p>
              </div>
            </div>

            {/* Region, Candidacy, Legal Status Note */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:border-l lg:border-stoneGray/50 lg:pl-8 text-xs font-sans">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-textGray block">
                  {language === 'tr' ? 'Seçim Bölgesi' : 'Constituency'}
                </span>
                <span className="font-serif text-lg text-charcoal font-medium">
                  {language === 'tr' ? politicalProfile.constituency.tr : politicalProfile.constituency.en}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-textGray block">
                  {language === 'tr' ? 'Belgelenmiş Statü' : 'Documented Status'}
                </span>
                <span className="font-serif text-lg text-charcoal font-medium">
                  {language === 'tr' ? politicalProfile.status.tr : politicalProfile.status.en}
                </span>
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-stoneGray/30 text-charcoal/70 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#1B5B9E] flex-shrink-0 mt-0.5" />
                <p>
                  {language === 'tr' ? politicalProfile.statusNote.tr : politicalProfile.statusNote.en}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Stated Public-Interest Areas Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-stoneGray/40">
            <span className="text-xs uppercase tracking-widest text-[#1B5B9E] font-sans font-semibold">
              {language === 'tr' ? 'Öne Çıkan İlgi ve Çalışma Alanları' : 'Stated Areas of Public Interest'}
            </span>
            <span className="text-xs text-textGray font-sans">
              {language === 'tr' ? '6 Temel Başlık' : '6 Core Themes'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {politicalProfile.statedInterestAreas.map((area, idx) => {
              const IconComp = areaIcons[idx % areaIcons.length];
              return (
                <div
                  key={area.id}
                  className="bg-[#F6F2EB] border border-stoneGray/70 p-6 shadow-sm transition-all duration-300 hover:bg-white hover:border-[#1B5B9E]/60 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-full bg-white border border-stoneGray/60 flex items-center justify-center text-[#1B5B9E]">
                        <IconComp className="w-4 h-4 stroke-[1.5]" />
                      </div>
                      <span className="font-serif text-sm text-stoneGray">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl text-charcoal font-medium leading-snug">
                      {language === 'tr' ? area.title.tr : area.title.en}
                    </h4>

                    <p className="text-xs font-sans text-charcoal/75 leading-relaxed">
                      {language === 'tr' ? area.description.tr : area.description.en}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action to Dedicated Political Page */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stoneGray/40">
            <div className="text-xs text-textGray font-sans">
              <p>
                {language === 'tr'
                  ? 'Kuzey Kıbrıs’ın sürdürülebilir kalkınması ve toplumsal refahı için belirlenen öncelikli çalışma sahaları.'
                  : 'Priority domains formulated for the sustainable development and civic progress of Northern Cyprus.'}
              </p>
            </div>
            <Link
              href="/siyasi-calismalar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#20201E] text-white text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 hover:bg-[#1B5B9E] flex-shrink-0"
            >
              <span>{language === 'tr' ? 'Siyasi Çalışmaları Ayrıntılı İnceleyin' : 'Explore Political & Civic Details'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
