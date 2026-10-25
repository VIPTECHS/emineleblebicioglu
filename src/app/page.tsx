import React from 'react';
import { Hero } from '@/components/Hero';
import { EditorialNavigationStrip } from '@/components/EditorialNavigationStrip';
import { BiographyIntro } from '@/components/BiographyIntro';
import { EducationSection } from '@/components/EducationSection';
import { CareerTimeline } from '@/components/CareerTimeline';
import { MusicAndSocialImpact } from '@/components/MusicAndSocialImpact';
import { AffiliationsGrid } from '@/components/AffiliationsGrid';
import { PoliticalAndPublicSection } from '@/components/PoliticalAndPublicSection';
import { FeaturedContributions } from '@/components/FeaturedContributions';
import { PressArchive } from '@/components/PressArchive';
import { PhotoJournal } from '@/components/PhotoJournal';
import { ValuesSection } from '@/components/ValuesSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialNavigationStrip />
      
      {/* SECTION 01 — Bir İsmin Ardındaki Hikâye */}
      <BiographyIntro />
      
      {/* SECTION 02 — Siyasi ve Toplumsal Çalışmalar (Positioned early in reading flow) */}
      <PoliticalAndPublicSection />

      {/* SECTION 03 — Eğitim ve Birikim */}
      <EducationSection />

      {/* SECTION 04 — Kariyer Yolculuğu */}
      <CareerTimeline />

      {/* SECTION 05 — Müzik ve Toplumsal Katkı */}
      <MusicAndSocialImpact />

      {/* SECTION 06 — Sivil Toplum ve Mesleki Görevler */}
      <AffiliationsGrid />

      {/* Mesleki Katkılar & Vizyon */}
      <FeaturedContributions />

      {/* SECTION 07 — Basında ve Kamuoyunda */}
      <PressArchive />

      {/* SECTION 08 — Kareler */}
      <PhotoJournal />

      {/* Temel Değerler */}
      <ValuesSection />

      {/* SECTION 09 — İletişim */}
      <ContactSection />
    </>
  );
}
