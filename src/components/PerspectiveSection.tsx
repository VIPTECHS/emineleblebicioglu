'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { editorialPerspective } from '@/data/content';
import { Sparkles } from 'lucide-react';

export const PerspectiveSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-32 md:py-44 bg-charcoal text-ivory relative overflow-hidden border-t border-b border-charcoal-800">
      {/* Subtle Starfield / Watermark Dust Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#F7F5F0_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Regal Roman Numeral Archival Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[180px] sm:text-[260px] font-thin text-white/[0.015] select-none pointer-events-none tracking-widest">
        MMXXV
      </div>

      {/* Decorative Champagne Vertical Lines */}
      <div className="hidden lg:block absolute left-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-charcoal-700 to-transparent" />
      <div className="hidden lg:block absolute right-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-charcoal-700 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="w-10 h-[1px] bg-champagne" />
          <span className="text-xs uppercase tracking-widest-editorial font-sans text-champagne-light font-medium flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            {language === 'tr' ? 'Bölüm 05 · Bakış Açısı & Felsefe' : 'Section 05 · Perspective & Ethos'}
          </span>
          <span className="w-10 h-[1px] bg-champagne" />
        </div>

        {/* Oversized Expressive Serif Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ivory tracking-tight leading-[1.08]">
          {language === 'tr' ? (
            <>
              Deneyim, yalnızca <br />
              <em className="italic font-normal font-serif text-champagne-light">
                yıllarla ölçülmez.
              </em>
            </>
          ) : (
            <>
              Experience is not measured <br />
              <em className="italic font-normal font-serif text-champagne-light">
                by years alone.
              </em>
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p className="mt-8 font-serif text-xl sm:text-2xl text-stoneGray font-light max-w-2xl mx-auto leading-relaxed">
          {language === 'tr'
            ? editorialPerspective.quoteSubtitleTR
            : editorialPerspective.quoteSubtitleEN}
        </p>

        <div className="w-24 h-[1.5px] bg-champagne/50 mx-auto my-12" />

        {/* Editorial Body Text */}
        <div className="max-w-3xl mx-auto text-stoneGray/85 font-sans text-base sm:text-lg leading-relaxed space-y-6 font-light">
          <p>
            {language === 'tr'
              ? editorialPerspective.editorialNoteTR
              : editorialPerspective.editorialNoteEN}
          </p>
        </div>

        {/* Monogram Badge */}
        <div className="mt-14 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-champagne/30 bg-charcoal-950/70 text-xs text-stoneGray font-sans">
          <span className="w-2 h-2 rounded-full bg-champagne-light animate-pulse" />
          <span>
            {language === 'tr'
              ? 'Editoryal Monograf · Emine İkiz Leblebicioğlu'
              : 'Editorial Monograph · Emine İkiz Leblebicioğlu'}
          </span>
        </div>

      </div>
    </section>
  );
};
