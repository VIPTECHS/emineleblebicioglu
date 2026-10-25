'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { VerificationStatus } from '@/data/types';
import { CheckCircle2, ShieldCheck, AlertCircle, Clock, Award } from 'lucide-react';

interface VerifiedBadgeProps {
  status: VerificationStatus;
  customText?: { tr: string; en: string };
  size?: 'sm' | 'md';
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({
  status,
  customText,
  size = 'sm'
}) => {
  const { language } = useLanguage();

  if (status === 'verified' || status === 'independently_verified') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-bronze/40 bg-bronze/10 text-charcoal ${
          size === 'sm' ? 'text-[11px]' : 'text-xs'
        } font-sans tracking-wide`}
        title={
          language === 'tr'
            ? 'Resmî sicil, tescil belgesi veya basına yansıyan bağımsız kayıt.'
            : 'Formally recorded or publicly documented archive record.'
        }
      >
        <CheckCircle2 className="w-3 h-3 text-bronze" />
        <span className="font-medium">
          {customText
            ? customText[language]
            : language === 'tr'
            ? 'Doğrulanmış Kayıt'
            : 'Verified Record'}
        </span>
      </span>
    );
  }

  if (status === 'owner_provided') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-stoneGray/80 bg-white text-charcoal/80 ${
          size === 'sm' ? 'text-[11px]' : 'text-xs'
        } font-sans tracking-wide`}
        title={
          language === 'tr'
            ? 'Şahsi biyografi beyanı doğrultusunda sunulan resmî profil bilgisi.'
            : 'Biographical profile record provided by the individual.'
        }
      >
        <ShieldCheck className="w-3 h-3 text-bronze" />
        <span className="font-medium">
          {customText
            ? customText[language]
            : language === 'tr'
            ? 'Biyografi Beyanı'
            : 'Owner-Provided'}
        </span>
      </span>
    );
  }

  if (status === 'historical') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-stoneGray/80 bg-stoneGray/20 text-charcoal/70 ${
          size === 'sm' ? 'text-[11px]' : 'text-xs'
        } font-sans tracking-wide`}
        title={
          language === 'tr'
            ? 'Geçmiş dönemde tamamlanmış tarihsel görev kaydı.'
            : 'Historically completed professional or civic tenure.'
        }
      >
        <Clock className="w-3 h-3 text-textGray" />
        <span className="font-medium">
          {customText
            ? customText[language]
            : language === 'tr'
            ? 'Tarihsel Görev'
            : 'Historical Tenure'}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-stoneGray bg-stoneGray/20 text-charcoal/70 ${
        size === 'sm' ? 'text-[11px]' : 'text-xs'
      } font-sans tracking-wide`}
      title={
        language === 'tr'
          ? 'Taslak metin: Ek resmi teyit veya şahsi arşiv onayı beklemektedir.'
          : 'Pending final review and authorization.'
      }
    >
      <AlertCircle className="w-3 h-3 text-warmTaupe-dark" />
      <span className="font-medium">
        {customText
          ? customText[language]
          : language === 'tr'
          ? 'Onay / Teyit Sürecinde'
          : 'Pending Review'}
      </span>
    </span>
  );
};
