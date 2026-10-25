'use client';

import React from 'react';
import { ContactSection } from '@/components/ContactSection';
import { ValuesSection } from '@/components/ValuesSection';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
      <ValuesSection />
    </div>
  );
}
