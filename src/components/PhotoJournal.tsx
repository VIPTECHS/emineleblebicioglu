'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { photoJournal } from '@/data/content';
import { GalleryPhoto } from '@/data/types';
import { EditorialHeading } from './EditorialHeading';
import { LightboxModal } from './LightboxModal';
import { Maximize2, MapPin } from 'lucide-react';

export const PhotoJournal: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="kareler" className="py-24 md:py-36 bg-[#F6F2EB] border-b border-stoneGray/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <EditorialHeading
          label={language === 'tr' ? 'Bölüm 08 · Kareler' : 'Section 08 · Curated Gallery'}
          titleRegular={language === 'tr' ? 'Kareler ve' : 'Curated Moments &'}
          titleItalic={language === 'tr' ? 'Anılar.' : 'Archives.'}
          description={
            language === 'tr'
              ? 'KKTC Cumhurbaşkanlığı resmî kabulü, mesleki idare toplantıları ve Kuzey Kıbrıs’ın tarihi taşınmaz coğrafyasından doğrulanmış fotoğraf seçkisi.'
              : 'Verifiable photographic moments from the Presidency reception, professional governance sessions, and Northern Cyprus architectural heritage.'
          }
        />

        {/* Asymmetrical Editorial Photo Essay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {photoJournal.map((item, index) => {
            // Asymmetric column spans
            const colSpan =
              index === 0
                ? 'md:col-span-5' // Portrait
                : index === 1
                ? 'md:col-span-7' // Presidency Delegation
                : index === 2
                ? 'md:col-span-7' // Kyrenia harbour
                : index === 3
                ? 'md:col-span-5' // Bellapais tower
                : 'md:col-span-12'; // Büyük Han panoramic

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className={`${colSpan} group relative bg-stoneGray-light overflow-hidden cursor-pointer border border-stoneGray/80 shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                <div className={`relative ${index === 0 ? 'aspect-[3/4]' : index === 4 ? 'aspect-[21/9]' : 'aspect-[16/10]'} w-full overflow-hidden`}>
                  <img
                    src={item.imageSrc}
                    alt={item.title[language]}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Expand Overlay Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-charcoal/85 text-white text-[10px] tracking-widest uppercase font-sans border border-white/10">
                      {item.category[language]}
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-[11px] font-sans text-champagne-light mb-1">
                      <MapPin className="w-3 h-3 text-bronze" />
                      <span>{item.location[language]}</span>
                      <span>·</span>
                      <span>{item.year}</span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-light text-white group-hover:text-champagne-light transition-colors">
                      {item.title[language]}
                    </h4>

                    <p className="text-xs text-stoneGray/90 font-sans mt-1 line-clamp-1 font-light">
                      {item.caption[language]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

      </div>
    </section>
  );
};
