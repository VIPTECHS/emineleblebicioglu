'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { volunteerEducationData } from '@/data/content';
import { Music, Users, HeartHandshake, Sparkles, BookOpen, Quote } from 'lucide-react';
import { VerifiedBadge } from './VerifiedBadge';

export const MusicAndSocialImpact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="muzik-ve-katki" className="py-24 md:py-32 bg-[#F6F2EB] border-b border-stoneGray/60 relative overflow-hidden">
      
      {/* Background Decorative Musical Watermark */}
      <div className="hidden lg:block absolute -left-10 bottom-10 font-serif text-[180px] font-thin text-charcoal/[0.02] select-none pointer-events-none">
        SOLFEJ
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header Indicator */}
        <div className="flex items-center justify-between pb-6 mb-14 border-b border-bronze/40">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1.5px] bg-bronze" />
            <span className="text-xs uppercase tracking-widest-editorial font-sans text-textGray font-medium">
              {language === 'tr' ? 'Bölüm 04 · Toplumsal Katkı' : 'Section 04 · Civic Contribution'}
            </span>
          </div>
          <VerifiedBadge status="owner_provided" />
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.08] tracking-tight">
              {language === 'tr' ? (
                <>
                  Müziğin ve eğitimin <br />
                  <em className="italic font-normal text-bronze font-serif">
                    hayatındaki yeri.
                  </em>
                </>
              ) : (
                <>
                  The place of music <br />
                  <em className="italic font-normal text-bronze font-serif">
                    and youth education.
                  </em>
                </>
              )}
            </h2>
            <p className="mt-5 text-sm sm:text-base text-textGray font-sans leading-relaxed max-w-2xl">
              {language === 'tr'
                ? "İTÜ Türk Musikisi Devlet Konservatuvarı'ndan gelen sanatsal birikimin, ilköğretim çağındaki çocuklara ve genç nesillere gönüllü bir sorumluluk bilinciyle aktarıldığı anlamlı dönem."
                : "A foundational biographical chapter where conservatory artistic discipline was channelled into voluntary music education and ear-training for hundreds of young students."}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 bg-white border border-stoneGray/80 shadow-sm max-w-xs">
              <span className="text-[10px] uppercase tracking-widest text-bronze font-sans font-semibold block mb-1">
                {language === 'tr' ? 'TOPLUMSAL ETKİ' : 'CIVIC IMPACT'}
              </span>
              <p className="font-serif text-2xl text-charcoal font-medium">
                ~150 {language === 'tr' ? 'Öğrenci' : 'Students'}
              </p>
              <p className="text-xs text-textGray font-sans mt-1">
                {language === 'tr'
                  ? 'Kültür merkezi bünyesinde solfej ve müzik formasyonu kazanan çocuklar.'
                  : 'Young students introduced to solfege and foundational musical literacy.'}
              </p>
            </div>
          </div>
        </div>

        {/* Two Detailed Initiatives Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {volunteerEducationData.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#FAF8F4] border border-stoneGray/80 p-8 sm:p-10 shadow-sm relative transition-all duration-300 hover:shadow-md hover:border-bronze/60 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Header Period & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-stoneGray/50">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stoneGray/70 text-xs font-sans font-medium text-bronze uppercase tracking-widest">
                    <Music className="w-3.5 h-3.5 text-bronze" />
                    {item.period}
                  </span>
                  {item.beneficiariesCount && (
                    <span className="px-2.5 py-1 bg-bronze/10 text-bronze text-xs font-sans font-semibold">
                      {item.beneficiariesCount}
                    </span>
                  )}
                </div>

                {/* Institution & Role */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-textGray font-sans block mb-1">
                    {language === 'tr' ? 'Gönüllü Eğitim Faaliyeti' : 'Voluntary Education Initiative'}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium leading-snug">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-sans text-bronze font-medium mt-1">
                    {language === 'tr' ? item.role.tr : item.role.en}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm font-sans text-charcoal/75 leading-relaxed">
                  {language === 'tr' ? item.description.tr : item.description.en}
                </p>

              </div>

              {/* Footer Source Note */}
              <div className="pt-6 mt-8 border-t border-stoneGray/40 flex items-center justify-between text-xs font-sans text-textGray">
                <span>{language === 'tr' ? 'Kayıt Türü:' : 'Record Type:'}</span>
                <span className="font-medium text-charcoal">
                  {language === 'tr' ? item.sourceLabel?.tr : item.sourceLabel?.en}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Human-Centered Editorial Highlight Quote */}
        <div className="p-8 sm:p-10 bg-white border-l-4 border-bronze shadow-sm max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-bronze flex-shrink-0 opacity-60 mt-1" />
            <div className="space-y-3">
              <p className="font-serif italic text-lg sm:text-xl text-charcoal leading-relaxed">
                {language === 'tr'
                  ? '“Müzik, yalnızca bir sanat icrası değil; çocukların dünyayı dinleme, anlama ve ahenk içinde birlikte üretme biçimidir. Erken yaşta sanatla tanışan bir zihin, hayatın her evresinde nezaketi ve sorumluluğu rehber edinir.”'
                  : '“Music is more than an artistic pursuit; it teaches children how to listen, understand, and create in harmony. A young mind enriched by the arts carries empathy, precision, and civic responsibility into every walk of life.”'}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-charcoal">
                  Emine İkiz Leblebicioğlu
                </span>
                <span className="text-stoneGray">·</span>
                <span className="text-xs text-textGray font-sans">
                  {language === 'tr' ? 'Konservatuvar Formasyonu ve Gönüllü Eğitim Notları' : 'Conservatory Notes & Educational Perspective'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
