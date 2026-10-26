import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/calismalar',
  'Çalışmaları ve Görevleri',
  'Kıbrıs Türk Emlakçılar Birliği (KTEB) ve Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği’ndeki görevleri ile mesleki çalışmaları.'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
