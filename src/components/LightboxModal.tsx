'use client';

import React from 'react';
import { GalleryPhoto } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { X, MapPin, Calendar } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  const { language } = useLanguage();

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-charcoal border border-stoneGray/20 text-ivory overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-ivory/80 hover:text-ivory transition-colors"
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Image */}
          <div className="lg:col-span-8 bg-black flex items-center justify-center min-h-[350px]">
            <img
              src={photo.imageSrc}
              alt={photo.title[language]}
              className="w-full h-full max-h-[70vh] object-cover"
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-champagne-light mb-3">
                <span>{photo.category[language]}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory mb-4">
                {photo.title[language]}
              </h3>

              <div className="space-y-2 text-xs text-stoneGray font-sans mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-champagne" />
                  <span>{photo.location[language]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-champagne" />
                  <span>{photo.year}</span>
                </div>
              </div>

              <p className="text-sm font-sans text-stoneGray/90 leading-relaxed mb-4">
                {photo.caption[language]}
              </p>
            </div>

            <div className="pt-6 border-t border-charcoal-700 text-xs text-warmTaupe font-sans leading-relaxed">
              <span className="font-medium text-ivory block mb-1">
                {language === 'tr' ? 'Editoryal Not:' : 'Editorial Note:'}
              </span>
              {photo.placeholderNote[language]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
