import type { Metadata } from 'next';

export const SITE_URL = 'https://emineleblebicioglu.com';
export const PERSON_NAME = 'Emine İkiz Leblebicioğlu';

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${PERSON_NAME}`,
      description,
      url: path,
      type: 'profile',
      locale: 'tr_TR',
      siteName: PERSON_NAME,
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${PERSON_NAME}`, description },
  };
}
