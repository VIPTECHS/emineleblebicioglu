'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationHistory, professionalTrainings } from '@/data/content';
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { VerifiedBadge } from './VerifiedBadge';

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="egitim-birikim" className="py-24 md:py-32 bg-[#FAF8F4] border-b border-stoneGray/60 relative overflow-hidden">
      
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header Indicator */}
        <div className="flex items-center justify-between pb-6 mb-14 border-b border-bronze/40">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1.5px] bg-bronze" />
            <span className="text-xs uppercase tracking-widest-editorial font-sans text-textGray font-medium">
              {language === 'tr' ? 'Bölüm 02 · Eğitim ve Birikim' : 'Section 02 · Education & Academic Background'}
            </span>
          </div>
          <VerifiedBadge status="owner_provided" />
        </div>

        {/* Section Title & Subtitle */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.08] tracking-tight">
            {language === 'tr' ? (
              <>
                Sanat disiplininden <br />
                <em className="italic font-normal text-bronze font-serif">
                  akademik ve kurumsal uzmanlığa.
                </em>
              </>
            ) : (
              <>
                From artistic discipline <br />
                <em className="italic font-normal text-bronze font-serif">
                  to academic & managerial rigor.
                </em>
              </>
            )}
          </h2>
          <p className="mt-5 text-sm sm:text-base text-textGray font-sans leading-relaxed">
            {language === 'tr'
              ? 'İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı’nda temellenen estetik ve icra disiplini, Yeditepe Üniversitesi’ndeki lisansüstü akademik çalışmalar ve çok disiplinli profesyonel eğitimlerle birleşmiştir.'
              : 'The creative and structural discipline honed at Istanbul Technical University Turkish Music State Conservatory converged with graduate studies at Yeditepe University and lifelong executive development.'}
          </p>
        </div>

        {/* Academic Institutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
            </div>
          ))}
        </div>

        {/* Continuous Professional Development: "Sürekli Gelişim" */}
        <div className="bg-[#F6F2EB] border border-stoneGray/80 p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-8 border-b border-stoneGray/50">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-bronze font-sans font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'tr' ? 'Mesleki Donanım' : 'Professional Competencies'}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
                {language === 'tr' ? 'Sürekli Gelişim Alanları' : 'Continuous Development Focus'}
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-textGray font-sans leading-relaxed">
              {language === 'tr'
                ? 'Kariyer süresince yönetim, liderlik, kurumsal iletişim ve insan kaynakları disiplinlerinde edinilen uzmanlık yetkinlikleri.'
                : 'Executive development across management, team leadership, human capital stewardship, and corporate communication.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {professionalTrainings.map((train) => (
              <div
                key={train.id}
                className="bg-white p-5 border border-stoneGray/70 transition-all duration-200 hover:border-bronze/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-bronze">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <h4 className="font-serif text-lg text-charcoal font-medium">
                      {language === 'tr' ? train.topic.tr : train.topic.en}
                    </h4>
                  </div>
                  <p className="text-xs font-sans text-charcoal/70 leading-relaxed">
                    {language === 'tr' ? train.description.tr : train.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-stoneGray/40 text-[11px] text-textGray font-sans">
            <span>
              {language === 'tr'
                ? '* Profesyonel gelişim ve kurumsal eğitim konularını ifade eder.'
                : '* Represents professional development and corporate training focus areas.'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
