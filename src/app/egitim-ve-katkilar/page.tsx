'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { educationHistory, volunteerEducationData, professionalTrainings } from '@/data/content';
import { EditorialHeading } from '@/components/EditorialHeading';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { GraduationCap, Music, Users, ArrowRight, CheckCircle2, Sparkles, BookOpen, Quote } from 'lucide-react';

export default function EducationAndContributionsPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-28 bg-[#F6F2EB] min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Page Hero Header */}
        <div className="border-b border-bronze/40 pb-12 mb-16">
          <EditorialHeading
            label={language === 'tr' ? 'Akademik Altyapı & Toplumsal Katkı' : 'Academic Foundation & Civic Impact'}
            titleRegular={language === 'tr' ? 'Eğitim ve' : 'Education &'}
            titleItalic={language === 'tr' ? 'Toplumsal Katkılar.' : 'Social Contributions.'}
            description={
              language === 'tr'
                ? "İTÜ Devlet Konservatuvarı ve Yeditepe Üniversitesi akademik birikiminden; çocuklara yönelik 3 yıllık gönüllü müzik öğretmenliği ve yüzlerce gence ulaştırılan solfej eğitimlerine."
                : "From conservatory and graduate-level academic depth to three years of voluntary primary music instruction and solfege training for hundreds of children."
            }
          />
        </div>

        {/* 1. Academic Background Section: "Eğitim ve Birikim" */}
        <div className="mb-24">
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-bronze/40">
            <div>
              <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold block">
                {language === 'tr' ? 'AKADEMİK GEÇMİŞ' : 'ACADEMIC BACKGROUND'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light mt-1">
                {language === 'tr' ? 'Eğitim ve Akademik Birikim' : 'Education & Academic Formation'}
              </h2>
            </div>
            <VerifiedBadge status="owner_provided" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationHistory.map((edu, idx) => (
              <div
                key={edu.id}
                className="bg-white border border-stoneGray/80 p-8 sm:p-10 shadow-sm relative transition-all duration-300 hover:shadow-md hover:border-bronze/60 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full bg-[#FAF8F4] border border-bronze/40 flex items-center justify-center text-bronze">
                      <GraduationCap className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
                      {idx === 0 ? '01 · LİSANS' : '02 · YÜKSEK LİSANS'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-textGray font-sans block mb-1">
                      {language === 'tr' ? edu.level.tr : edu.level.en}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-sans text-bronze font-medium mt-2">
                      {language === 'tr' ? edu.qualification.tr : edu.qualification.en}
                    </p>
                  </div>

                  <p className="text-sm font-sans text-charcoal/75 leading-relaxed">
                    {language === 'tr' ? edu.description.tr : edu.description.en}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-stoneGray/40 flex items-center justify-between text-xs font-sans text-textGray">
                  <span>{language === 'tr' ? 'Kayıt Kaynağı:' : 'Source Record:'}</span>
                  <span className="font-medium text-charcoal">
                    {language === 'tr' ? edu.sourceLabel?.tr : edu.sourceLabel?.en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Volunteer Education & Youth Social Impact */}
        <div className="mb-24 bg-[#FAF8F4] border border-stoneGray/80 p-8 sm:p-12 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-stoneGray/50">
            <div>
              <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold block">
                {language === 'tr' ? 'GÖNÜLLÜ EĞİTİM & SANAT' : 'VOLUNTARY TEACHING & ARTS'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light mt-1">
                {language === 'tr' ? 'Müziğin ve Eğitimin Hayatındaki Yeri' : 'Music & Volunteer Educational Service'}
              </h2>
            </div>
            <VerifiedBadge status="owner_provided" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {volunteerEducationData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stoneGray/80 p-8 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stoneGray/40">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8F4] border border-bronze/40 text-xs font-sans font-medium text-bronze uppercase tracking-wider">
                      <Music className="w-3.5 h-3.5 text-bronze" />
                      {item.period}
                    </span>
                    {item.beneficiariesCount && (
                      <span className="px-2.5 py-0.5 bg-bronze/10 text-bronze text-xs font-sans font-semibold">
                        {item.beneficiariesCount}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-charcoal font-medium">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-sans text-bronze font-medium mt-1">
                      {language === 'tr' ? item.role.tr : item.role.en}
                    </p>
                  </div>

                  <p className="text-sm font-sans text-charcoal/75 leading-relaxed">
                    {language === 'tr' ? item.description.tr : item.description.en}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-stoneGray/30 flex items-center justify-between text-xs font-sans text-textGray">
                  <span>{language === 'tr' ? 'Kayıt Türü:' : 'Record Type:'}</span>
                  <span className="font-medium text-charcoal">
                    {language === 'tr' ? item.sourceLabel?.tr : item.sourceLabel?.en}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Banner */}
          <div className="p-6 sm:p-8 bg-white border-l-4 border-bronze shadow-sm">
            <p className="font-serif italic text-lg sm:text-xl text-charcoal leading-relaxed">
              {language === 'tr'
                ? '“Bir çocuğa müzik öğretmek, ona yalnızca nota okumayı değil; dünyayı daha derin hissetmeyi, sabrı ve dinleme ahengini öğretmektir.”'
                : '“Teaching music to a child does not merely impart notes on a page; it teaches empathy, patience, and the wisdom of collective harmony.”'}
            </p>
            <span className="block mt-2 text-xs uppercase tracking-widest font-sans font-semibold text-bronze">
              Emine İkiz Leblebicioğlu
            </span>
          </div>
        </div>

        {/* 3. Continuous Professional Development: "Sürekli Gelişim" */}
        <div className="bg-white border border-stoneGray/80 p-8 sm:p-12 shadow-sm mb-20">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-stoneGray/40">
            <div>
              <span className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold block">
                {language === 'tr' ? 'MESLEKİ GELİŞİM' : 'PROFESSIONAL DEVELOPMENT'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light mt-1">
                {language === 'tr' ? 'Sürekli Gelişim Alanları' : 'Continuous Development Disciplines'}
              </h2>
            </div>
            <VerifiedBadge status="owner_provided" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {professionalTrainings.map((train) => (
              <div
                key={train.id}
                className="bg-[#FAF8F4] p-6 border border-stoneGray/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-bronze">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <h3 className="font-serif text-lg text-charcoal font-medium">
                      {language === 'tr' ? train.topic.tr : train.topic.en}
                    </h3>
                  </div>
                  <p className="text-xs font-sans text-charcoal/70 leading-relaxed">
                    {language === 'tr' ? train.description.tr : train.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="pt-8 border-t border-stoneGray/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/kariyer"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-bronze transition-colors"
          >
            <span>{language === 'tr' ? 'Kariyer Yolculuğunu İnceleyin' : 'Explore Career Chronology'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-bronze" />
          </Link>

          <Link
            href="/calismalar"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-bronze transition-colors"
          >
            <span>{language === 'tr' ? 'Mesleki Örgütlenme ve Sivil Toplum' : 'Explore Civil Society & Associations'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-bronze" />
          </Link>
        </div>

      </div>
    </div>
  );
}
