'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageSwitcher: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {
  const { language, setLanguage } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <div
      className={`inline-flex items-center text-xs tracking-wider font-sans border rounded-full px-2 py-1 transition-colors ${
        isDark
          ? 'border-charcoal-700 bg-charcoal-900/60 text-stoneGray'
          : 'border-stoneGray/80 bg-ivory-50/80 text-charcoal'
      }`}
    >
      <button
        onClick={() => setLanguage('tr')}
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          language === 'tr'
            ? 'bg-charcoal text-ivory font-medium shadow-sm dark:bg-ivory dark:text-charcoal'
            : 'text-charcoal/60 hover:text-charcoal'
        }`}
        aria-label="Türkçe Dilini Seç"
      >
        TR
      </button>
      <span className="text-stoneGray mx-0.5 text-[10px]">/</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-charcoal text-ivory font-medium shadow-sm dark:bg-ivory dark:text-charcoal'
            : 'text-charcoal/60 hover:text-charcoal'
        }`}
        aria-label="Select English Language"
      >
        EN
      </button>
    </div>
  );
};
