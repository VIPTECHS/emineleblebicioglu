'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { personalIdentity, biographyContent } from '@/data/content';
import { imageManifest } from '@/data/imageManifest';
import { ArrowRight, MapPin, Award, BookOpen, Briefcase, HeartHandshake } from 'lucide-react';
import { VerifiedBadge } from './VerifiedBadge';

export const BiographyIntro: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="biyografi-giris" className="py-24 md:py-32 bg-[#F6F2EB] border-b border-stoneGray/60 relative overflow-hidden">
      
      {/* Background Architectural Watermark */}
      <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 font-serif text-[150px] font-thin text-charcoal/[0.02] select-none pointer-events-none">
        LEBLEBİCİOĞLU
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header Indicator */}
        <div className="flex items-center justify-between pb-6 mb-14 border-b border-bronze/40">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1.5px] bg-bronze" />
            <span className="text-xs uppercase tracking-widest-editorial font-sans text-textGray font-medium">
              {language === 'tr' ? 'Bölüm 01 · Bir İsmin Ardındaki Hikâye' : 'Section 01 · The Story Behind a Name'}
            </span>
          </div>
          <VerifiedBadge status="owner_provided" />
        </div>

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Identity Card & Verified Northern Cyprus Frame */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.08] tracking-tight">
              {language === 'tr' ? (
                <>
                  Bir ismin ardındaki <br />
                  <em className="italic font-normal text-bronze font-serif">
                    gerçek hikâye.
                  </em>
                </>
              ) : (
                <>
                  The authentic story <br />
                  <em className="italic font-normal text-bronze font-serif">
                    behind a name.
                  </em>
                </>
              )}
            </h2>

            {/* Authentic Identity Spec Sheet */}
            <div className="bg-[#FAF8F4] border border-stoneGray/80 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-stoneGray/50">
                <div className="w-14 h-18 overflow-hidden border border-bronze/40 bg-charcoal flex-shrink-0">
                  <img
                    src={imageManifest.portrait.localPath}
                    alt={personalIdentity.fullName}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-bronze font-sans font-semibold block">
                    {language === 'tr' ? 'RESMÎ ŞAHSİ PROFİL' : 'OFFICIAL DOSSIER'}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal font-medium">
                    {personalIdentity.fullName}
                  </h3>
                  <p className="text-xs text-textGray font-sans">
                    {language === 'tr' ? personalIdentity.residence.tr : personalIdentity.residence.en}
                  </p>
                </div>
              </div>

              {/* Factual Data Points */}
              <div className="grid grid-cols-2 gap-3 text-xs font-sans text-charcoal/80 pt-1">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-textGray block">
                    {language === 'tr' ? 'Doğum Tarihi & Yeri' : 'Birthdate & Place'}
                  </span>
                  <span className="font-medium text-charcoal">
                    {language === 'tr' ? `${personalIdentity.birthDate.tr}, ${personalIdentity.birthPlace.tr}` : `${personalIdentity.birthDate.en}, ${personalIdentity.birthPlace.en}`}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-textGray block">
                    {language === 'tr' ? 'İkamet' : 'Residence'}
                  </span>
                  <span className="font-medium text-charcoal">
                    {language === 'tr' ? personalIdentity.residence.tr : personalIdentity.residence.en}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-textGray block">
                    {language === 'tr' ? 'Medeni Durum' : 'Marital Status'}
                  </span>
                  <span className="font-medium text-charcoal">
                    {language === 'tr' ? personalIdentity.maritalStatus.tr : personalIdentity.maritalStatus.en}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-textGray block">
                    {language === 'tr' ? 'Yabancı Dil' : 'Foreign Language'}
                  </span>
                  <span className="font-medium text-charcoal">
                    {language === 'tr' ? personalIdentity.foreignLanguage.tr : personalIdentity.foreignLanguage.en}
                  </span>
                </div>
              </div>

              {/* Key Domains Badges */}
              <div className="pt-3 border-t border-stoneGray/50 flex flex-wrap gap-2 text-[11px] font-sans text-charcoal/70">
                <span className="px-2.5 py-1 bg-white border border-stoneGray/70 flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3 text-bronze" />
                  {language === 'tr' ? 'İTÜ Konservatuvarı' : 'ITU Conservatory'}
                </span>
                <span className="px-2.5 py-1 bg-white border border-stoneGray/70 flex items-center gap-1.5">
                  <Briefcase className="w-3 h-3 text-bronze" />
                  {language === 'tr' ? '2002’den Günümüze' : 'Since 2002'}
                </span>
                <span className="px-2.5 py-1 bg-white border border-stoneGray/70 flex items-center gap-1.5">
                  <HeartHandshake className="w-3 h-3 text-bronze" />
                  {language === 'tr' ? 'Gönüllü Eğitim' : 'Volunteer Education'}
                </span>
              </div>
            </div>

            {/* Architectural Anchor Photo */}
            <div className="border border-stoneGray/80 bg-white p-3 shadow-sm">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={imageManifest.nicosiaArabahmet.localPath}
                  alt={imageManifest.nicosiaArabahmet.altText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/75 backdrop-blur-sm text-white text-[10px] font-sans flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-bronze" />
                  <span>{language === 'tr' ? 'Lefkoşa Arabahmet Kültürel Miras Alanı' : 'Nicosia Arabahmet Heritage Quarter'}</span>
                </div>
              </div>
              <p className="text-[11px] text-textGray font-sans mt-2.5 leading-relaxed">
                {language === 'tr'
                  ? 'Kuzey Kıbrıs’ın tarihi kent dokusu, mesleki örgütlenme ve taşınmaz değerleme ilkelerimizin merkezindedir.'
                  : 'The historic urban heritage of Northern Cyprus anchors our commitment to professional valuation and civic governance.'}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/hakkinda"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-bronze transition-colors"
              >
                <span>{language === 'tr' ? 'Kapsamlı Biyografiyi İnceleyin' : 'Explore Detailed Biography'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-bronze" />
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Monogram Seal */}
          <div className="lg:col-span-7 space-y-6 text-charcoal/80 font-sans leading-relaxed">
            <p className="font-serif text-2xl sm:text-3xl text-charcoal font-light leading-snug">
              {language === 'tr'
                ? "25 Ocak 1980 Hatay doğumlu Emine İkiz Leblebicioğlu, sanat eğitiminden kurumsal yönetime, insan kaynaklarından sivil topluma uzanan çok disiplinli bir birikime sahiptir."
                : "Born on January 25, 1980 in Hatay, Emine İkiz Leblebicioğlu possesses a rich multidisciplinary background spanning conservatory arts, corporate leadership, HR, and civic governance."}
            </p>

            <div className="w-20 h-[1.5px] bg-bronze/60 my-6" />

            {/* Official Structured Text */}
            <div className="space-y-4 text-sm sm:text-base text-charcoal/75 font-light leading-relaxed">
              <p>
                {language === 'tr'
                  ? "İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı'ndan mezun olmuş, ardından yüksek lisans eğitimini Yeditepe Üniversitesi'nde tamamlamıştır. Sanat eğitiminin kazandırdığı analitik dinleme, disiplin ve estetik vizyonu kurumsal iş hayatına taşımıştır."
                  : "Graduating from Istanbul Technical University Turkish Music State Conservatory, she completed her master's studies at Yeditepe University, carrying artistic discipline, active listening, and structural harmony into her corporate career."}
              </p>
              <p>
                {language === 'tr'
                  ? "2002 yılında başlayan profesyonel kariyerinde; telekomünikasyon, müşteri ilişkileri, insan kaynakları, kurumsal eğitim, turizm, bilişim ve gayrimenkul sektörlerinde yöneticilik ve danışmanlık görevleri icra etmiştir. Ekip yönetimi, kurumsal süreç geliştirme ve operasyonel kalite alanlarında uzmanlaşmıştır."
                  : "Beginning in 2002, her career has crossed telecommunications, customer operations, human resources advisory, corporate training, hospitality, IT, and real estate, establishing expertise in team leadership and process architecture."}
              </p>
              <p>
                {language === 'tr'
                  ? "İş hayatının yanı sıra ilköğretim çağındaki çocuklara gönüllü müzik öğretmenliği ve yüzlerce öğrenciye solfej eğitimi vererek toplumsal gelişime katkıda bulunmuştur. Kuzey Kıbrıs’ta mesleki dernek kuruculuğu, birlik yönetim kurulu üyeliği ve toplumsal inisiyatiflerde aktif sorumluluk üstlenmeye devam etmektedir."
                  : "Alongside corporate life, she dedicated years to voluntary music teaching and solfege instruction for hundreds of children, while continuing to serve as a founding association leader and board executive in Northern Cyprus civil society."}
              </p>
            </div>

            {/* Official Signature */}
            <div className="pt-8 border-t border-stoneGray/50 flex items-center justify-between">
              <div>
                <span className="font-calligraphy text-3xl sm:text-4xl text-charcoal block leading-none">
                  Emine İkiz Leblebicioğlu
                </span>
                <span className="text-[10px] uppercase tracking-widest text-textGray font-sans block mt-1.5">
                  Lefkoşa & Girne · Kuzey Kıbrıs Türk Cumhuriyeti
                </span>
              </div>
            </div>

            {/* Verification Citation Banner */}
            <div className="mt-6 p-4 bg-[#FAF8F4] border-l-2 border-bronze text-xs text-charcoal/70 font-sans shadow-sm">
              <span className="font-semibold block text-charcoal-800 mb-0.5">
                {language === 'tr' ? 'Editoryal Güvence & Şeffaflık:' : 'Editorial Assurance & Transparency:'}
              </span>
              {language === 'tr' ? biographyContent.disclaimerTR : biographyContent.disclaimerEN}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
