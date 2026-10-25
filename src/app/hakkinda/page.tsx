'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { personalIdentity, biographyContent, politicalProfile } from '@/data/content';
import { imageManifest } from '@/data/imageManifest';
import { EditorialHeading } from '@/components/EditorialHeading';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ArrowRight, MapPin, Sparkles, BookOpen, Briefcase, HeartHandshake, ShieldCheck, Landmark } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  const sections = language === 'tr' ? biographyContent.sectionsTR : biographyContent.sectionsEN;

  return (
    <div className="pt-24 pb-28 bg-[#F6F2EB] min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Page Hero Header */}
        <div className="border-b border-bronze/40 pb-12 mb-16">
          <EditorialHeading
            label={language === 'tr' ? 'Biyografi & Monograf' : 'Biography & Monograph'}
            titleRegular={language === 'tr' ? 'Emine İkiz Leblebicioğlu' : 'Who is Emine İkiz'}
            titleItalic={language === 'tr' ? 'Kimdir?' : 'Leblebicioğlu?'}
            description={
              language === 'tr'
                ? "Sanat eğitiminden kurumsal yönetime, insan kaynaklarından sivil toplum liderliğine uzanan kapsamlı şahsi ve mesleki biyografi."
                : 'A comprehensive personal and professional monograph spanning conservatory arts, corporate management, human resources, and civic leadership.'
            }
          />
        </div>

        {/* 1. Executive Portrait & Official Profile Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24 bg-[#FAF8F4] p-6 sm:p-10 border border-stoneGray/80 shadow-sm relative">
          
          {/* Architectural Gold Corner Accents */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-bronze" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-bronze" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-bronze" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-bronze" />

          {/* Left: Authentic Portrait with Museum Matting */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden border border-bronze/60 shadow-xl bg-charcoal-900 group">
              <img
                src={imageManifest.portrait.localPath}
                alt={imageManifest.portrait.altText}
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-charcoal/85 backdrop-blur-md text-white text-[10px] font-sans tracking-widest uppercase border border-bronze/30 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-bronze" />
                  {language === 'tr' ? 'RESMÎ ŞAHSİ PORTRE' : 'OFFICIAL PORTRAIT'}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="font-serif text-2xl font-light">Emine İkiz Leblebicioğlu</h3>
                <p className="text-[11px] font-sans text-stoneGray">
                  {language === 'tr' ? 'Lefkoşa & Girne · Kuzey Kıbrıs' : 'Nicosia & Kyrenia · Northern Cyprus'}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Curated Identity Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stoneGray/50">
              <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
                {language === 'tr' ? 'TEMEL BİYOGRAFİ & KİMLİK BİLGİLERİ' : 'CORE IDENTITY & BIOGRAPHY'}
              </span>
              <VerifiedBadge status="owner_provided" />
            </div>

            {/* Official Master Biography Text */}
            <div className="p-6 bg-white border-l-4 border-bronze shadow-sm space-y-3 font-serif text-charcoal/90 text-lg sm:text-xl font-light leading-relaxed">
              <p>
                {language === 'tr' ? biographyContent.officialIntroTR : biographyContent.officialIntroEN}
              </p>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-stoneGray/40 text-xs font-sans text-charcoal/80">
              <div className="p-3 bg-white border border-stoneGray/60">
                <span className="block text-[10px] uppercase tracking-widest text-bronze font-semibold mb-0.5">
                  {language === 'tr' ? 'DOĞUM YERİ & TARİHİ' : 'BIRTHDATE & PLACE'}
                </span>
                <p className="font-medium">
                  {language === 'tr' ? `${personalIdentity.birthDate.tr}, ${personalIdentity.birthPlace.tr}` : `${personalIdentity.birthDate.en}, ${personalIdentity.birthPlace.en}`}
                </p>
              </div>

              <div className="p-3 bg-white border border-stoneGray/60">
                <span className="block text-[10px] uppercase tracking-widest text-bronze font-semibold mb-0.5">
                  {language === 'tr' ? 'İKAMETGÂH' : 'RESIDENCE'}
                </span>
                <p className="font-medium">
                  {language === 'tr' ? personalIdentity.residence.tr : personalIdentity.residence.en}
                </p>
              </div>

              <div className="p-3 bg-white border border-stoneGray/60">
                <span className="block text-[10px] uppercase tracking-widest text-bronze font-semibold mb-0.5">
                  {language === 'tr' ? 'MEDENİ DURUM' : 'MARITAL STATUS'}
                </span>
                <p className="font-medium">
                  {language === 'tr' ? personalIdentity.maritalStatus.tr : personalIdentity.maritalStatus.en}
                </p>
              </div>

              <div className="p-3 bg-white border border-stoneGray/60">
                <span className="block text-[10px] uppercase tracking-widest text-bronze font-semibold mb-0.5">
                  {language === 'tr' ? 'YABANCI DİL' : 'FOREIGN LANGUAGE'}
                </span>
                <p className="font-medium">
                  {language === 'tr' ? personalIdentity.foreignLanguage.tr : personalIdentity.foreignLanguage.en}
                </p>
              </div>

              <div className="p-3 bg-white border border-stoneGray/60">
                <span className="block text-[10px] uppercase tracking-widest text-bronze font-semibold mb-0.5">
                  {language === 'tr' ? 'EĞİTİM ALTYAPISI' : 'EDUCATION'}
                </span>
                <p className="font-medium">İTÜ Konservatuvarı & Yeditepe Y.L.</p>
              </div>

              <div className="p-3 bg-white border border-stoneGray/60">
                <span className="block text-[10px] uppercase tracking-widest text-bronze font-semibold mb-0.5">
                  {language === 'tr' ? 'KARİYER BAŞLANGICI' : 'CAREER START'}
                </span>
                <p className="font-medium">2002 (22+ {language === 'tr' ? 'Yıl' : 'Years'})</p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="font-calligraphy text-2xl sm:text-3xl text-charcoal">
                  Emine İkiz Leblebicioğlu
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 2. Structured Thematic Subsections (Asymmetrical Editorial Photo-Text Layouts) */}
        <div className="space-y-16">
          <div className="border-b border-bronze/40 pb-4">
            <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
              {language === 'tr' ? 'TEMATİK BÖLÜMLER' : 'THEMATIC DOSSIERS'}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light mt-1">
              {language === 'tr' ? 'Hayatın ve Kariyerin Evreleri' : 'Chapters of Life & Career'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((sec, idx) => (
              <div
                key={sec.id}
                className="bg-white border border-stoneGray/80 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-bronze/60 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stoneGray/40">
                    <span className="font-serif text-sm text-bronze font-medium">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-textGray font-sans">
                      {sec.subtitle}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl text-charcoal font-medium leading-snug">
                    {sec.title}
                  </h4>

                  <p className="text-sm font-sans text-charcoal/75 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Verified Northern Cyprus Architectural Context */}
        <div className="mt-24 bg-[#FAF8F4] border border-stoneGray/80 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold block">
                {language === 'tr' ? 'COĞRAFİ & KÜLTÜREL KÖKLER' : 'GEOGRAPHIC & CULTURAL ROOTS'}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light leading-snug">
                {language === 'tr' ? 'Kuzey Kıbrıs’ın Tarihi ve Mesleki Dokusu' : 'Northern Cyprus Heritage & Context'}
              </h3>
              <p className="text-xs sm:text-sm text-textGray font-sans leading-relaxed">
                {language === 'tr'
                  ? 'Girne’nin tarihi limanı, Bellapais Manastırı’nın gotik dinginliği ve Lefkoşa’nın geleneksel mimari mirası; Emine İkiz Leblebicioğlu’nun sivil toplum ve taşınmaz değerleme perspektifine ilham veren daimi bir zemin oluşturur.'
                  : 'Kyrenia’s historic harbour, the serenity of Bellapais Abbey, and Nicosia’s architectural heritage ground Emine İkiz Leblebicioğlu’s dedication to civic governance and valuation ethics.'}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] overflow-hidden border border-stoneGray/70 relative">
                <img
                  src={imageManifest.kyreniaHarbour.localPath}
                  alt={imageManifest.kyreniaHarbour.altText}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/75 text-white text-[10px] font-sans">
                  Girne Antik Liman
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden border border-stoneGray/70 relative">
                <img
                  src={imageManifest.bellapaisAbbey.localPath}
                  alt={imageManifest.bellapaisAbbey.altText}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/75 text-white text-[10px] font-sans">
                  Bellapais Manastırı
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Step Navigation */}
        <div className="mt-20 pt-10 border-t border-stoneGray/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/kariyer"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-bronze transition-colors"
          >
            <span>{language === 'tr' ? 'Kariyer Kronolojisine Geçin' : 'Explore Career Chronology'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-bronze" />
          </Link>

          <Link
            href="/egitim-ve-katkilar"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-bronze transition-colors"
          >
            <span>{language === 'tr' ? 'Eğitim ve Gönüllü Katkıları İnceleyin' : 'Explore Education & Social Impact'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-bronze" />
          </Link>
        </div>

      </div>
    </div>
  );
}
