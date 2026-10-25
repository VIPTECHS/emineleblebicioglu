'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { politicalProfile, personalIdentity, siteConfig } from '@/data/content';
import { imageManifest } from '@/data/imageManifest';
import { 
  TrendingUp, 
  Users2, 
  Cpu, 
  GraduationCap, 
  Scale, 
  Building, 
  Info, 
  ExternalLink, 
  Calendar, 
  ArrowLeft,
  CheckCircle2,
  TreePine,
  ShieldCheck,
  Tv,
  Users,
  Play
} from 'lucide-react';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { EditorialHeading } from '@/components/EditorialHeading';

const areaIcons = [TrendingUp, Users2, Cpu, GraduationCap, Scale, Building];

export default function PoliticalPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-28 bg-[#F6F2EB] min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Back navigation & Page Label */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-charcoal/70 hover:text-charcoal transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'tr' ? 'Ana Sayfaya Dön' : 'Return to Home'}</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="border-b border-[#1B5B9E]/30 pb-12 mb-16">
          <EditorialHeading
            label={language === 'tr' ? 'Siyasi & Toplumsal Çalışmalar · Girne' : 'Political & Civic Engagement · Kyrenia'}
            titleRegular={language === 'tr' ? 'Toplumsal Adalet ve' : 'Social Justice and'}
            titleItalic={language === 'tr' ? 'Mücadele Vizyonu.' : 'Civic Leadership.'}
            description={
              language === 'tr'
                ? "Toplumsal Adalet ve Mücadele Partisi (TAM Parti) Girne Milletvekili Aday Adayı Emine İkiz Leblebicioğlu'nun siyasi katılım süreci, ilkeleri ve kamu yararına odaklanan vizyonu."
                : "The political participation, foundational principles, and public-interest vision of Emine İkiz Leblebicioğlu as TAM Party Kyrenia Parliamentary Candidate Nominee."
            }
          />
        </div>

        {/* SECTION 01 — Identification & Candidate Status Panel */}
        <section className="bg-white border border-stoneGray/80 border-t-4 border-t-[#1B5B9E] p-8 sm:p-12 shadow-sm mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1B5B9E]/5 rounded-bl-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Anchor: Genuine Portrait + Authentic TAM Parti Logo */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
              
              {/* Portrait */}
              <div className="relative w-40 sm:w-44 aspect-[3/4] border-2 border-stoneGray/80 shadow-md flex-shrink-0 bg-charcoal">
                <img
                  src={imageManifest.portrait.localPath}
                  alt={personalIdentity.fullName}
                  className="w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute bottom-1 right-1 bg-white/95 px-1.5 py-0.5 text-[9px] font-sans font-medium text-charcoal uppercase tracking-wider">
                  Resmî Portre
                </div>
              </div>

              {/* TAM Parti Official Emblem Box */}
              <div className="flex-1 w-full flex flex-col justify-between p-5 bg-[#FAF8F4] border border-stoneGray/80 text-center sm:text-left">
                <div className="flex justify-center sm:justify-start">
                  <div className="w-20 h-20 p-2 bg-white rounded-md border border-stoneGray/60 shadow-sm flex items-center justify-center">
                    <img
                      src={imageManifest.tamPartiLogo.localPath}
                      alt="TAM Parti Resmî Amblemi"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#1B5B9E] font-sans font-bold block">
                    {language === 'tr' ? 'SİYASİ PARTİ' : 'POLITICAL PARTY'}
                  </span>
                  <div className="font-serif text-xl sm:text-2xl text-charcoal font-medium leading-tight">
                    {politicalProfile.party}
                  </div>
                  <div className="text-xs text-textGray font-sans leading-tight">
                    {language === 'tr' ? politicalProfile.partyFullName.tr : politicalProfile.partyFullName.en}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stoneGray/40 flex items-center justify-center sm:justify-start gap-1 text-[11px] text-bronze font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Resmî Kurumsal Amblem</span>
                </div>
              </div>

            </div>

            {/* Candidate Details & Constitutional Clarification */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:border-l lg:border-stoneGray/50 lg:pl-10">
              
              <div className="flex items-center justify-between pb-4 border-b border-stoneGray/40">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#1B5B9E] font-sans font-semibold">
                    {language === 'tr' ? 'KÜNYE & TEMSİLİYET' : 'CREDENTIALS & AFFILIATION'}
                  </span>
                  <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-light mt-1">
                    {personalIdentity.fullName}
                  </h1>
                </div>
                <VerifiedBadge status="owner_provided" />
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans">
                <div className="space-y-1 bg-[#FAF8F4] p-4 border border-stoneGray/60">
                  <span className="text-[10px] uppercase tracking-wider text-textGray font-semibold block">
                    {language === 'tr' ? 'Seçim Bölgesi' : 'Electoral District'}
                  </span>
                  <span className="font-serif text-lg text-charcoal font-medium block">
                    {language === 'tr' ? politicalProfile.constituency.tr : politicalProfile.constituency.en}, KKTC
                  </span>
                  <span className="text-[11px] text-textGray block">
                    {language === 'tr' ? 'Kuzey Kıbrıs Türk Cumhuriyeti' : 'Northern Cyprus'}
                  </span>
                </div>

                <div className="space-y-1 bg-[#FAF8F4] p-4 border border-stoneGray/60">
                  <span className="text-[10px] uppercase tracking-wider text-[#1B5B9E] font-semibold block">
                    {language === 'tr' ? 'Siyasi Statü' : 'Nomination Status'}
                  </span>
                  <span className="font-serif text-lg text-charcoal font-medium block text-[#1B5B9E]">
                    {language === 'tr' ? politicalProfile.status.tr : politicalProfile.status.en}
                  </span>
                  <span className="text-[11px] text-textGray block">
                    {language === 'tr' ? 'Ön Seçim / Aday Adaylığı' : 'Pre-candidacy / Nominee Stage'}
                  </span>
                </div>
              </div>

              {/* Legal Transparency Note */}
              <div className="p-4 bg-[#F6F2EB] border-l-2 border-[#1B5B9E] text-xs text-charcoal/80 font-sans flex items-start gap-3">
                <Info className="w-4 h-4 text-[#1B5B9E] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {language === 'tr' ? politicalProfile.statusNote.tr : politicalProfile.statusNote.en}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 02 — Political Background & Civic Ethos */}
        <section className="mb-20">
          <div className="flex items-center gap-3 pb-4 mb-8 border-b border-stoneGray/50">
            <span className="w-8 h-[1.5px] bg-[#1B5B9E]" />
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#1B5B9E]">
              {language === 'tr' ? '02 · Siyasi Katılımın Arka Planı' : '02 · Political Background & Civic Ethos'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light leading-snug">
                {language === 'tr' ? (
                  <>
                    Mesleki birikimden <br />
                    <em className="italic font-normal text-[#1B5B9E] font-serif">
                      kamusal sorumluluğa.
                    </em>
                  </>
                ) : (
                  <>
                    From professional experience <br />
                    <em className="italic font-normal text-[#1B5B9E] font-serif">
                      to civic responsibility.
                    </em>
                  </>
                )}
              </h2>
              <p className="text-sm font-sans text-textGray leading-relaxed">
                {language === 'tr'
                  ? 'Emine İkiz Leblebicioğlu’nun siyasi çalışmalara katılımı, soyut bir siyaset arayışından değil; 2002 yılından bu yana telekomünikasyon, insan kaynakları, turizm, bilişim ve gayrimenkul sektörlerinde bilfiil üstlendiği yönetsel sorumluluklardan ve sivil toplum mücadelelerinden filizlenmiştir.'
                  : 'Her engagement in political life does not stem from abstract political ambition, but is rooted in concrete leadership experience since 2002 across telecommunications, HR, tourism, IT, real estate governance, and community civil society.'}
              </p>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-stoneGray/80 space-y-6 text-sm text-charcoal/85 leading-relaxed font-sans shadow-sm">
              <p>
                {language === 'tr'
                  ? 'Kıbrıs Türk Emlakçılar Birliği (KTEB) Yönetim Kurulu üyeliği ve Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği kurucu genel sekreterliği görevlerinde edindiği saha deneyimi; adada mevzuat boşluklarının giderilmesi, şeffaflık ilkelerinin hakim kılınması ve liyakate dayalı kurumsal yönetimin inşası yönündeki kararlılığını pekiştirmiştir.'
                  : 'Her grassroots executive responsibilities within the Cyprus Turkish Realtors Association (KTEB) and as founding General Secretary of the Property Valuation Experts Association underscored the crucial necessity for legislative clarity, ethical transparency, and merit-based governance across Northern Cyprus.'}
              </p>
              <p>
                {language === 'tr'
                  ? 'Konservatuvar disiplininden gelen analitik estetik anlayışı, Yeditepe Üniversitesi’ndeki akademik yüksek lisans eğitimi ve ilköğretim çağındaki çocuklara adanmış 3 yıllık gönüllü öğretmenlik deneyimi, onun siyasete bakışında insani, eğitici ve yapıcı bir perspektif oluşturmaktadır.'
                  : 'A rigorous formative discipline rooted in conservatory training, complemented by graduate academic research at Yeditepe University and three years of voluntary music teaching for primary schoolchildren, shapes a constructive, human-centric approach to civic stewardship.'}
              </p>
              <div className="pt-4 border-t border-stoneGray/40 flex items-center gap-4 text-xs text-bronze font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#1B5B9E]" />
                <span>
                  {language === 'tr'
                    ? 'Popülizmden uzak; veriye, mevzuata ve toplumsal mutabakata dayalı çalışma ahlakı.'
                    : 'A grounded work ethic rooted in empirical data, institutional law, and civic consensus.'}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 03 — 6 Stated Public-Interest Areas */}
        <section className="mb-20">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-stoneGray/50">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#1B5B9E]" />
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#1B5B9E]">
                {language === 'tr' ? '03 · Kamu Yararı ve Öncelikli İlgi Alanları' : '03 · Stated Public-Interest Areas'}
              </span>
            </div>
            <span className="text-xs text-textGray font-sans">
              {language === 'tr' ? '6 Temel Saha' : '6 Core Domains'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {politicalProfile.statedInterestAreas.map((area, idx) => {
              const IconComp = areaIcons[idx % areaIcons.length];
              return (
                <div
                  key={area.id}
                  className="bg-white border border-stoneGray/80 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1B5B9E] flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#FAF8F4] border border-stoneGray/60 flex items-center justify-center text-[#1B5B9E] group-hover:bg-[#1B5B9E] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="font-serif text-sm text-stoneGray group-hover:text-[#1B5B9E] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-charcoal font-medium leading-snug group-hover:text-[#1B5B9E] transition-colors">
                      {language === 'tr' ? area.title.tr : area.title.en}
                    </h3>

                    <p className="text-xs font-sans text-charcoal/75 leading-relaxed">
                      {language === 'tr' ? area.description.tr : area.description.en}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 04 — TAM Parti Affiliation & 8 Core Principles */}
        <section className="bg-white border border-stoneGray/80 p-8 sm:p-12 shadow-sm mb-20">
          
          <div className="flex items-center justify-between pb-6 mb-10 border-b border-stoneGray/40">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#1B5B9E]" />
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#1B5B9E]">
                {language === 'tr' ? '04 · TAM Parti Bağlılığı & 8 Temel İlke' : '04 · TAM Party Affiliation & 8 Core Principles'}
              </span>
            </div>
            <span className="text-xs text-textGray font-sans">
              {language === 'tr' ? 'Toplumsal Adalet ve Mücadele' : 'Social Justice and Struggle'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Olive Tree Symbolism & Authentic Logo */}
            <div className="lg:col-span-5 bg-[#FAF8F4] p-8 border border-stoneGray/80 text-center sm:text-left space-y-6">
              <div className="flex justify-center sm:justify-start">
                <div className="w-28 h-28 p-3 bg-white rounded-lg border border-stoneGray/70 shadow-sm flex items-center justify-center">
                  <img
                    src={imageManifest.tamPartiLogo.localPath}
                    alt="TAM Parti Resmî Amblemi"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#1B5B9E] font-sans font-bold block">
                  {language === 'tr' ? 'KÖKLÜ SİMGE · ZEYTİN AĞACI' : 'DEEP ROOTS · THE OLIVE TREE'}
                </span>
                <h3 className="font-serif text-2xl text-charcoal font-medium">
                  {language === 'tr' ? 'Zeytin Ağacı ve 8 Kök Dalı' : 'The Olive Tree & Its 8 Roots'}
                </h3>
                <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                  {language === 'tr'
                    ? politicalProfile.partySymbolDescription?.tr
                    : politicalProfile.partySymbolDescription?.en}
                </p>
              </div>

              {/* Official Links */}
              <div className="pt-4 border-t border-stoneGray/40 space-y-3">
                <a
                  href={politicalProfile.partyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-3 bg-white border border-stoneGray/70 text-xs font-sans font-medium text-charcoal hover:border-[#1B5B9E] hover:text-[#1B5B9E] transition-colors"
                >
                  <span>{language === 'tr' ? 'TAM Parti Resmî Web Sitesi' : 'TAM Party Official Website'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={politicalProfile.partyProgramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-3 bg-[#1B5B9E] text-white text-xs font-sans font-medium hover:bg-[#154679] transition-colors"
                >
                  <span>{language === 'tr' ? 'Resmî Parti Programını İnceleyin' : 'Review Official Party Program'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 8 Principles Grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="pb-2">
                <h3 className="font-serif text-2xl text-charcoal font-light">
                  {language === 'tr' ? 'Partinin 8 Temel İlkesi' : 'The 8 Guiding Principles'}
                </h3>
                <p className="text-xs text-textGray font-sans mt-1">
                  {language === 'tr'
                    ? 'Zeytin ağacının toprağa uzanan 8 kök dalıyla temsil edilen vazgeçilmez temel değerler.'
                    : 'Foundational values symbolized by the eight root branches of the Mediterranean olive tree.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {politicalProfile.corePrinciples?.map((principle) => (
                  <div
                    key={principle.id}
                    className="p-4 bg-[#FAF8F4] border border-stoneGray/60 hover:bg-white hover:border-[#1B5B9E]/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#1B5B9E] text-white text-[10px] font-sans font-bold flex items-center justify-center flex-shrink-0">
                        {principle.number}
                      </span>
                      <h4 className="font-serif text-base text-charcoal font-medium">
                        {language === 'tr' ? principle.title.tr : principle.title.en}
                      </h4>
                    </div>
                    <p className="text-[11px] text-charcoal/75 font-sans leading-relaxed pl-7">
                      {language === 'tr' ? principle.description.tr : principle.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* SECTION 05 — Public Activities & Media Archive */}
        <section className="mb-12">
          
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-stoneGray/50">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#1B5B9E]" />
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#1B5B9E]">
                {language === 'tr' ? '05 · Kamusal Etkinlik & Medya Kayıtları' : '05 · Public Activities & Media Archive'}
              </span>
            </div>
            <span className="text-xs text-textGray font-sans">
              {language === 'tr' ? 'Kronoloji' : 'Chronology'}
            </span>
          </div>

          <div className="space-y-4">
            {politicalProfile.publicActivities?.map((activity) => (
              <div
                key={activity.id}
                className="bg-white border border-stoneGray/80 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#1B5B9E] transition-colors"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#1B5B9E] bg-[#1B5B9E]/10 px-2.5 py-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {activity.date}
                    </span>
                    <span className="text-xs font-sans text-stoneGray">|</span>
                    <span className="text-xs font-sans text-charcoal/70 font-medium">
                      {activity.organization}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-charcoal font-medium">
                    {language === 'tr' ? activity.title.tr : activity.title.en}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-charcoal/80 leading-relaxed">
                    {language === 'tr' ? activity.summary.tr : activity.summary.en}
                  </p>
                </div>

                {activity.sourceUrl && (
                  <a
                    href={activity.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-3 border text-xs font-sans font-medium transition-all flex-shrink-0 ${
                      activity.type === 'broadcast'
                        ? 'border-[#c4302b]/40 text-[#c4302b] bg-[#c4302b]/5 hover:bg-[#c4302b] hover:text-white hover:border-[#c4302b]'
                        : 'border-stoneGray/80 text-charcoal hover:bg-[#1B5B9E] hover:text-white hover:border-[#1B5B9E]'
                    }`}
                  >
                    {activity.type === 'broadcast' && <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>
                      {activity.type === 'broadcast'
                        ? (language === 'tr' ? 'Yayını İzle' : 'Watch Broadcast')
                        : (language === 'tr' ? 'Kaynağı Görüntüle' : 'View Source')}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}