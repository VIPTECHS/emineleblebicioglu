'use client';

import React from 'react';

interface EditorialHeadingProps {
  label?: string;
  titleRegular: string;
  titleItalic: string;
  titleSuffix?: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  label,
  titleRegular,
  titleItalic,
  titleSuffix = '',
  description,
  align = 'left',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-champagne" />
          <span
            className={`text-[11px] md:text-xs uppercase tracking-widest-editorial font-sans font-medium ${
              isDark ? 'text-champagne-light' : 'text-warmTaupe-dark'
            }`}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] ${
          isDark ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        <span>{titleRegular} </span>
        <em className="italic font-normal font-serif text-champagne-dark dark:text-champagne-light">
          {titleItalic}
        </em>
        {titleSuffix && <span> {titleSuffix}</span>}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed font-sans ${
            isDark ? 'text-stoneGray' : 'text-charcoal/75'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
