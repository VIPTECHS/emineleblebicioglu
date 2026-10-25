'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AffiliationsGrid } from '@/components/AffiliationsGrid';
import { PoliticalAndPublicSection } from '@/components/PoliticalAndPublicSection';
import { FeaturedContributions } from '@/components/FeaturedContributions';
import { PhotoJournal } from '@/components/PhotoJournal';
import { EditorialHeading } from '@/components/EditorialHeading';

export default function WorkPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-28 bg-[#F6F2EB] min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Page Hero Header */}
        <div className="border-b border-bronze/40 pb-12 mb-16">
          <EditorialHeading
            label={language === 'tr' ? 'Sivil Toplum & Mesleki Örgütlenme' : 'Civil Society & Professional Governance'}
            titleRegular={language === 'tr' ? 'Kurumsal & Toplumsal' : 'Institutional & Civic'}
            titleItalic={language === 'tr' ? 'Çalışmaları.' : 'Contributions.'}
            description={
              language === 'tr'
                ? "Kıbrıs Türk Emlakçılar Birliği, Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği ve kamu nezdindeki istişari heyet görevleri ile toplumsal inisiyatifler."
                : "Active board governance in KTEB, founding secretariat in the Valuation Experts Association, and consultative public delegations."
            }
          />
        </div>

        {/* 1. Civil Society & Professional Associations */}
        <AffiliationsGrid />

        {/* 2. Political & Public-Interest Dimensions */}
        <div className="mt-16">
          <PoliticalAndPublicSection />
        </div>

        {/* 3. Featured Contributions */}
        <div className="mt-16">
          <FeaturedContributions />
        </div>

        {/* 4. Photographic Journal */}
        <div className="mt-16">
          <PhotoJournal />
        </div>

      </div>
    </div>
  );
}
