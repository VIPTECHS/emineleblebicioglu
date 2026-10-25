'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/data/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('el_portfolio_lang') as Language;
      if (saved === 'tr' || saved === 'en') {
        setLanguageState(saved);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('el_portfolio_lang', lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === 'tr' ? 'en' : 'tr';
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
