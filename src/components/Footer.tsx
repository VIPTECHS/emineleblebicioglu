'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { navigationLinks, siteConfig } from '@/data/content';
import { imageManifest } from '@/data/imageManifest';
import { ArrowUp, Camera, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [manifestModalOpen, setManifestModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#20201E] text-white pt-20 pb-12 border-t border-charcoal-700 relative">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Top Wordmark & Quick Back to Top */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-charcoal-700/80 gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest-editorial text-champagne-light font-sans block mb-2">
                PERSONAL PORTFOLIO & BIOGRAPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white">
                EMİNE İKİZ LEBLEBİCİOĞLU<span className="text-bronze font-serif font-bold">.</span>
              </h2>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stoneGray hover:text-champagne-light transition-colors font-sans"
              aria-label="Yukarı Çık"
            >
              <span>{language === 'tr' ? 'Başa Dön' : 'Top'}</span>
              <div className="p-2 border border-charcoal-700 group-hover:border-champagne-light transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-champagne-light group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Middle Links & Disclaimers */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-sans text-stoneGray">
            
            <div className="md:col-span-4 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-warmTaupe block">
                {language === 'tr' ? 'Misyon & Vizyon' : 'Ethos & Governance'}
              </span>
              <p className="leading-relaxed text-stoneGray/80 max-w-sm font-light">
                {language === 'tr'
                  ? 'Kuzey Kıbrıs’ta yönetim, eğitim, bilişim, gayrimenkul ve sivil toplum alanlarındaki çalışmaları bir araya getiren kişisel portföy ve biyografi arşivi.'
                  : 'A personal portfolio and biographical archive uniting corporate governance, education, IT, real estate, and civil society.'}
              </p>
            </div>

            <div className="md:col-span-4">
              <span className="text-[11px] uppercase tracking-widest text-warmTaupe block mb-3">
                {language === 'tr' ? 'Navigasyon' : 'Navigation Index'}
              </span>
              <div className="grid grid-cols-2 gap-2 text-stoneGray/90">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-champagne-light transition-colors py-0.5"
                  >
                    {language === 'tr' ? link.labelTR : link.labelEN}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-warmTaupe block">
                {language === 'tr' ? 'Resmî Temas & Coğrafi Tescil' : 'Direct Inquiry & Regional Registry'}
              </span>
              <p className="text-stoneGray/90">{siteConfig.contactEmail}</p>
              <p className="text-stoneGray/60">{siteConfig.officialLocation}</p>
              
              <button
                onClick={() => setManifestModalOpen(true)}
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-bronze hover:text-champagne-light transition-colors border-b border-bronze/40 pb-0.5"
              >
                <Camera className="w-3 h-3" />
                <span>
                  {language === 'tr'
                    ? 'Fotoğraf Kaynakları & Doğrulama Belgesi'
                    : 'Photo Credits & Geographic Verification'}
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Micro Line */}
          <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-warmTaupe gap-4">
            <div className="flex items-center gap-3">
              <span>
                © {new Date().getFullYear()} Emine İkiz Leblebicioğlu. {language === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}
              </span>
            </div>

            <div className="text-stoneGray/60 text-center sm:text-right">
              <span>
                {language === 'tr'
                  ? 'Kişisel biyografi ve profesyonel portföy monografı · Ticari ilan sitesi değildir.'
                  : 'Personal biographical portfolio monograph · Not a commercial listing platform.'}
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Photography Verification & Attribution Modal */}
      {manifestModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setManifestModalOpen(false)}
        >
          <div 
            className="bg-[#FAF8F4] max-w-3xl w-full border border-stoneGray p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-charcoal shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setManifestModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-charcoal hover:text-bronze"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-bronze text-xs uppercase tracking-widest font-sans font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>KUZEY KIBRIS FOTOĞRAF DOĞRULAMA MANİFESTOSU</span>
            </div>

            <h3 className="font-serif text-2xl font-light text-charcoal mb-2">
              Telif ve Coğrafi Kaynak Belgesi
            </h3>
            <p className="text-xs text-textGray font-sans mb-6 leading-relaxed">
              Bu web sitesinde yer alan tüm coğrafi fotoğraflar doğrulanmış Kuzey Kıbrıs (KKTC) tarihi mekanlarına aittir. Santorini, Yunan adaları veya sahte tatil köyü görselleri kesinlikle kullanılmamıştır.
            </p>

            <div className="space-y-4 text-xs font-sans">
              {Object.values(imageManifest).map((item) => (
                <div key={item.imageId} className="p-3 bg-white border border-stoneGray/70">
                  <div className="flex items-center justify-between font-semibold text-charcoal mb-1">
                    <span>{item.title}</span>
                    <span className="text-[10px] text-bronze font-mono">{item.license}</span>
                  </div>
                  <div className="text-textGray space-y-0.5 text-[11px]">
                    <p><strong>Bölüm:</strong> {item.section}</p>
                    <p><strong>Konum:</strong> {item.location}</p>
                    <p><strong>Atıf:</strong> {item.attribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
