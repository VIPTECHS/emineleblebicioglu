export type Language = 'tr' | 'en';

export type VerificationStatus = 
  | 'owner_provided' 
  | 'independently_verified' 
  | 'pending_confirmation' 
  | 'historical' 
  | 'verified'
  | 'draft_placeholder';

export interface Milestone {
  id: string;
  year: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  organization: string;
  verificationStatus: VerificationStatus;
  sourceLabel?: Record<Language, string>;
  sourceUrl?: string;
  category: 'governance' | 'sector' | 'corporate' | 'delegation';
}

export interface CareerPosition {
  id: string;
  period: string;
  years: { start: string; end: string | 'Devam Ediyor' | 'Present' };
  isOverlapping?: boolean;
  company: string;
  position: Record<Language, string>;
  sector: Record<Language, string>;
  responsibilities: Record<Language, string[]>;
  context: Record<Language, string>;
  verificationStatus: VerificationStatus;
  sourceLabel?: Record<Language, string>;
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: Record<Language, string>;
  level: Record<Language, string>;
  description: Record<Language, string>;
  verificationStatus: VerificationStatus;
  sourceLabel?: Record<Language, string>;
}

export interface VolunteerEducationItem {
  id: string;
  period: string;
  institution: string;
  role: Record<Language, string>;
  beneficiariesCount?: string;
  description: Record<Language, string>;
  verificationStatus: VerificationStatus;
  sourceLabel?: Record<Language, string>;
}

export interface ProfessionalTraining {
  id: string;
  topic: Record<Language, string>;
  description: Record<Language, string>;
  category: 'management' | 'communication' | 'hr' | 'corporate';
  verificationStatus: VerificationStatus;
}

export interface PoliticalProfile {
  party: string;
  partyFullName: Record<Language, string>;
  constituency: Record<Language, string>;
  status: Record<Language, string>;
  statusNote: Record<Language, string>;
  verificationStatus: VerificationStatus;
  partyUrl?: string;
  partyProgramUrl?: string;
  partySymbolDescription?: Record<Language, string>;
  corePrinciples?: Array<{
    id: string;
    number: number;
    title: Record<Language, string>;
    description: Record<Language, string>;
  }>;
  statedInterestAreas: Array<{
    id: string;
    title: Record<Language, string>;
    description: Record<Language, string>;
  }>;
  publicActivities?: Array<{
    id: string;
    date: string;
    title: Record<Language, string>;
    organization: string;
    summary: Record<Language, string>;
    sourceUrl?: string;
    type: 'broadcast' | 'meeting' | 'press' | 'announcement';
  }>;
}

export interface Affiliation {
  id: string;
  organization: string;
  role: Record<Language, string>;
  period: Record<Language, string>;
  description: Record<Language, string>;
  verificationStatus: VerificationStatus;
  websiteUrl?: string;
  sourceNote?: Record<Language, string>;
  category: 'association' | 'valuation' | 'corporate' | 'media';
}

export interface Contribution {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  categorySlug: 'mesleki' | 'sektorel' | 'kurumsal' | 'toplumsal';
  summary: Record<Language, string>;
  narrative: Record<Language, string>;
  roleRelation: Record<Language, string>;
  date: string;
  verificationStatus: VerificationStatus;
  sourceUrl?: string;
  accentQuote?: Record<Language, string>;
  image: string;
}

export interface PressItem {
  id: string;
  date: string;
  category: 'haber' | 'etkinlik' | 'aciklama' | 'video' | 'yayin';
  publication: string;
  headline: Record<Language, string>;
  summary: Record<Language, string>;
  verificationStatus: VerificationStatus;
  sourceUrl?: string;
  videoUrl?: string;
  videoId?: string;
  mediaType?: 'article' | 'video' | 'broadcast';
  thumbnailUrl?: string;
  tag: Record<Language, string>;
}

export interface GalleryPhoto {
  id: string;
  title: Record<Language, string>;
  location: Record<Language, string>;
  year: string;
  category: Record<Language, string>;
  aspect: 'portrait' | 'landscape' | 'square';
  placeholderNote: Record<Language, string>;
  caption: Record<Language, string>;
  imageSrc: string;
}

export interface CoreValue {
  id: string;
  number: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  status: VerificationStatus;
}
