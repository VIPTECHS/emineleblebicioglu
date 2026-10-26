'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/content';
import { imageManifest } from '@/data/imageManifest';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const handleScrollToBio = () => {
    const el = document.getElementById('biyografi-giris');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F2EB] pt-6 pb-12 lg:pb-16 border-b border-stoneGray/60">
      
      {/* Background Verified Northern Cyprus Context (Left: Lefkoşa Büyük Han, Right: Girne Antik Liman) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block select-none overflow-hidden">
        {/* Left Side: Lefkoşa Büyük Han Historic Stone Arches */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[24%] bg-cover bg-left opacity-90 transition-opacity"
          style={{ backgroundImage: `url('${imageManifest.heroLeftArchitecture.localPath}')` }}
          title={imageManifest.heroLeftArchitecture.title}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F6F2EB]/50 to-[#F6F2EB]" />
        </div>

        {/* Right Side: Girne Antik Liman & Girne Kalesi */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[28%] bg-cover bg-center opacity-85 transition-opacity"
          style={{ backgroundImage: `url('${imageManifest.heroRightKyrenia.localPath}')` }}
          title={imageManifest.heroRightKyrenia.title}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F6F2EB]/40 to-[#F6F2EB]" />
        </div>
      </div>

      {/* Central Hero Stage Card */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="bg-[#FAF8F4]/95 backdrop-blur-sm border border-stoneGray/70 shadow-[0_15px_45px_rgba(32,32,30,0.06)] p-6 sm:p-10 lg:p-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-bronze" />
                <span className="text-[11px] font-sans font-medium tracking-widest uppercase text-bronze">
                  {language === 'tr' ? siteConfig.descriptorTR : siteConfig.descriptorEN}
                </span>
              </div>

              {/* Main Name Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-light text-charcoal leading-[1.05] tracking-tight">
                Emine<br />
                <span className="font-light">İkiz Leblebicioğlu</span><span className="text-bronze font-serif">.</span>
              </h1>

              {/* Prominent Political Identification Element — TAM Parti Affiliation & Candidacy */}
              <div className="mt-5 mb-2 inline-flex items-center gap-3.5 px-4 py-2.5 bg-white/95 border border-stoneGray/80 border-l-[3px] border-l-[#1B5B9E] shadow-[0_4px_16px_rgba(27,91,158,0.06)] max-w-fit">
                <div className="w-8 h-8 rounded-full bg-[#1B5B9E]/10 p-1 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/tam-parti-logo.png"
                    alt="TAM Parti Logosu"
                    width={24}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 text-xs font-sans tracking-wide">
                  <span className="font-semibold text-charcoal tracking-wider">TAM Parti</span>
                  <span className="text-[#1B5B9E] font-medium select-none">|</span>
                  <span className="text-charcoal/85 font-medium">
                    {language === 'tr' ? 'Girne Milletvekili Aday Adayı' : 'Kyrenia Parliamentary Candidate Nominee'}
                  </span>
                </div>
              </div>

              {/* Subtitle with Bronze Italic Accent */}
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-[2.2rem] text-charcoal mt-5 sm:mt-6 font-normal">
                {language === 'tr' ? (
                  <>
                    Bir İsmin Ardındaki <span className="text-bronze not-italic font-serif">Hikâye.</span>
                  </>
                ) : (
                  <>
                    The Story Behind a <span className="text-bronze not-italic font-serif">Name.</span>
                  </>
                )}
              </p>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-textGray font-sans font-normal">
                {language === 'tr' ? siteConfig.heroIntroTR : siteConfig.heroIntroEN}
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-6 sm:gap-7">
                <button
                  onClick={handleScrollToBio}
                  className="group inline-flex items-center gap-3 px-7 sm:px-8 py-4 bg-[#20201E] text-white text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 hover:bg-black shadow-sm"
                >
                  <span>{language === 'tr' ? siteConfig.primaryActionTR : siteConfig.primaryActionEN}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-bronze group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/siyasi-calismalar"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-[#1B5B9E] transition-colors border-b border-[#1B5B9E]/80 pb-1"
                >
                  <span>{language === 'tr' ? siteConfig.secondaryActionTR : siteConfig.secondaryActionEN}</span>
                  <span className="text-[#1B5B9E] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Layered Editorial Portrait Composition */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px]">
                
                {/* 1. Outer Bronze Geometric Line Frame (offset slightly up & right) */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-bronze/70 pointer-events-none hidden sm:block" />

                {/* 2. Main Portrait Container with Ivory Matting */}
                <div className="relative z-10 bg-white p-2.5 sm:p-3 border border-stoneGray/80 shadow-[0_20px_50px_rgba(32,32,30,0.08)]">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF8F4]">
                    <Image
                      src={imageManifest.portrait.localPath}
                      alt={imageManifest.portrait.altText}
                      fill
                      priority
                      sizes="(min-width: 1024px) 460px, 90vw"
                      className="object-cover object-[center_15%]"
                    />
                  </div>
                </div>

                {/* 3. Vertical Script Watermark on Right Edge of Frame */}
                <div className="hidden sm:block absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 origin-center text-sm font-calligraphy tracking-wider text-bronze select-none pointer-events-none whitespace-nowrap">
                  Emine İkiz Leblebicioğlu
                </div>

                {/* 4. Overlapping Historic Bellapais Abbey Tower (Bottom-Left Corner) */}
                <div 
                  className="absolute -left-4 sm:-left-8 bottom-[-18px] sm:bottom-[-24px] z-20 w-24 sm:w-32 aspect-[3/4] p-1.5 bg-white border border-stoneGray shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                  title="Bellapais Manastırı Gotik Çan Kulesi, Beylerbeyi / Girne"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={imageManifest.towerThumbnail.localPath}
                      alt={imageManifest.towerThumbnail.altText}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 5. Overlapping Handwritten Quote Card (Bottom-Right Corner) */}
                <div className="absolute -right-3 sm:-right-6 bottom-[-20px] sm:bottom-[-26px] z-20 bg-[#FAF8F4] p-3 sm:p-4 border border-stoneGray/80 shadow-[0_12px_28px_rgba(32,32,30,0.1)] max-w-[200px] sm:max-w-[240px] rotate-[-2deg]">
                  <p className="font-calligraphy text-lg sm:text-xl text-charcoal/90 leading-tight">
                    {language === 'tr' 
                      ? '“Eğitimden sivil topluma uzanan bir vizyon…”'
                      : '“A vision spanning education to civil society…”'}
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
