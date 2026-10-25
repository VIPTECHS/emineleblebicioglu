'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { navigationLinks } from '@/data/content';
import { Menu, X, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-[#FAF8F4] border-b border-[#DCD6CB]/70 transition-all duration-300 ${
          isScrolled ? 'shadow-[0_4px_20px_rgba(32,32,30,0.04)] py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Left: Luxury Handwritten Wordmark */}
          <Link href="/" className="group flex items-center py-1 transition-opacity hover:opacity-90" aria-label="Emine İkiz Leblebicioğlu">
            <div className="flex flex-col">
              <span className="font-calligraphy text-2xl sm:text-[1.75rem] text-charcoal font-normal tracking-wide leading-none group-hover:text-bronze transition-colors whitespace-nowrap">
                Emine İkiz Leblebicioğlu
              </span>
              <span className="text-[9px] uppercase tracking-[0.26em] text-bronze font-sans font-medium mt-1">
                {language === 'tr' ? 'PROFESYONEL YOLCULUK' : 'PROFESSIONAL JOURNEY'}
              </span>
            </div>
          </Link>

          {/* Center: Editorial Nav Links with Vertical Separators */}
          <nav className="hidden xl:flex items-center text-[11px] uppercase tracking-widest font-sans font-medium text-charcoal/80">
            {navigationLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-1 px-3 transition-colors duration-200 hover:text-charcoal ${
                      isActive ? 'text-charcoal font-semibold' : 'text-charcoal/70'
                    }`}
                  >
                    {language === 'tr' ? link.labelTR : link.labelEN}
                    {isActive && (
                      <span className="absolute bottom-[-4px] left-3 right-3 h-[1.5px] bg-bronze" />
                    )}
                  </Link>
                  {idx < navigationLinks.length - 1 && (
                    <span className="text-stoneGray/80 select-none text-[12px]">|</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right: TR | EN Language Switcher + Search Icon */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-xs font-sans tracking-wider text-charcoal/70">
              <button
                onClick={() => setLanguage('tr')}
                className={`transition-colors font-medium ${
                  language === 'tr' ? 'text-charcoal font-semibold' : 'hover:text-charcoal text-textGray'
                }`}
              >
                TR
              </button>
              <span className="text-stoneGray select-none">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors font-medium ${
                  language === 'en' ? 'text-charcoal font-semibold' : 'hover:text-charcoal text-textGray'
                }`}
              >
                EN
              </button>
            </div>

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-charcoal/80 hover:text-charcoal p-1 transition-colors"
              aria-label="Arama"
            >
              <Search className="w-4 h-4 stroke-[1.75]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 text-charcoal hover:text-bronze transition-colors"
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Quick Search Overlay */}
        {searchOpen && (
          <div className="border-t border-stoneGray/60 bg-white py-3 px-6 animate-fadeIn">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-bronze" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'tr'
                    ? 'Biyografi, KTEB, değerleme veya basın başlıklarında arayın...'
                    : 'Search biography, affiliations, appraisal...'
                }
                className="w-full text-sm bg-transparent focus:outline-none text-charcoal placeholder:text-textGray font-sans"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs uppercase tracking-widest text-textGray hover:text-charcoal"
              >
                {language === 'tr' ? 'Kapat' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F4] flex flex-col justify-between p-8 pt-28 animate-fadeIn xl:hidden">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest-editorial text-textGray">
              {language === 'tr' ? 'Navigasyon' : 'Navigation'}
            </p>
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl font-light text-charcoal hover:text-bronze border-b border-stoneGray/40 pb-2 transition-colors"
                >
                  {language === 'tr' ? link.labelTR : link.labelEN}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-stoneGray/60 flex items-center justify-between">
            <div className="flex items-center">
              <span className="font-calligraphy text-xl text-charcoal">
                Emine İkiz Leblebicioğlu
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <button
                onClick={() => setLanguage('tr')}
                className={language === 'tr' ? 'font-bold text-charcoal' : 'text-textGray'}
              >
                TR
              </button>
              <span>|</span>
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'font-bold text-charcoal' : 'text-textGray'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
