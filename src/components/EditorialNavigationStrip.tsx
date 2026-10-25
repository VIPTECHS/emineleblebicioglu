'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { imageManifest } from '@/data/imageManifest';

interface StripItem {
  number: string;
  titleTR: string;
  titleEN: string;
  descTR: string;
  descEN: string;
  href: string;
  image: string;
  alt: string;
  caption: string;
}

const stripItems: StripItem[] = [
  {
    number: '01',
    titleTR: 'Biyografi',
    titleEN: 'Biography',
    descTR: 'Hayatı, eğitimi ve profesyonel yolculuğu.',
    descEN: 'Life, background and professional journey.',
    href: '/hakkinda',
    image: imageManifest.stripBio.localPath,
    alt: imageManifest.stripBio.altText,
    caption: 'Bellapais Manastırı, Girne',
  },
  {
    number: '02',
    titleTR: 'Kariyer Yolculuğu',
    titleEN: 'Career Journey',
    descTR: 'Sektörel deneyimi ve üstlendiği sorumluluklar.',
    descEN: 'Industry experience and governance mandates.',
    href: '/kariyer',
    image: imageManifest.stripCareer.localPath,
    alt: imageManifest.stripCareer.altText,
    caption: 'Girne Antik Liman, KKTC',
  },
  {
    number: '03',
    titleTR: 'Eğitim & Katkılar',
    titleEN: 'Education & Impact',
    descTR: 'Konservatuvar, yüksek lisans ve gönüllülük.',
    descEN: 'Conservatory, master studies, and youth impact.',
    href: '/egitim-ve-katkilar',
    image: imageManifest.stripWork.localPath,
    alt: imageManifest.stripWork.altText,
    caption: 'Büyük Han, Lefkoşa',
  },
  {
    number: '04',
    titleTR: 'Basında',
    titleEN: 'Press & Media',
    descTR: 'Projeleri ve çalışmaları hakkında basın yansımaları.',
    descEN: 'Official press reports and news coverage.',
    href: '/basin',
    image: imageManifest.stripPress.localPath,
    alt: imageManifest.stripPress.altText,
    caption: 'Cumhurbaşkanlığı Kabulü, Lefkoşa',
  },
];

export const EditorialNavigationStrip: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-[#F6F2EB] pb-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* 4-Column Editorial Grid */}
        <div className="bg-[#FAF8F4] border border-stoneGray/70 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stoneGray/70">
          {stripItems.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group p-6 lg:p-7 flex flex-col justify-between hover:bg-white transition-all duration-300 relative"
            >
              {/* Top: Number + Line */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-sans font-medium text-bronze tracking-wider">
                    {item.number}
                  </span>
                  <span className="w-6 h-[1px] bg-bronze/60" />
                  <span className="text-[10px] font-sans text-stoneGray ml-auto tracking-wide hidden xl:inline">
                    {item.caption}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  {/* Left: Title & Subtitle */}
                  <div className="flex-1 pr-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-normal group-hover:text-bronze transition-colors">
                      {language === 'tr' ? item.titleTR : item.titleEN}
                    </h3>
                    <p className="mt-2 text-xs text-textGray leading-relaxed font-sans font-normal">
                      {language === 'tr' ? item.descTR : item.descEN}
                    </p>
                  </div>

                  {/* Right: Authentic Verified Photo Thumbnail */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden border border-stoneGray/60 bg-stoneGray-light">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom: Arrow Interaction */}
              <div className="mt-6 pt-3 flex items-center text-bronze group-hover:translate-x-1.5 transition-transform">
                <span className="text-sm font-sans font-medium">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
