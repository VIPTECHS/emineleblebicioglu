'use client';

import React from 'react';
import { VerificationStatus } from '@/data/types';

interface VerifiedBadgeProps {
  status: VerificationStatus;
  customText?: { tr: string; en: string };
  size?: 'sm' | 'md';
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = () => {
  return null;
};