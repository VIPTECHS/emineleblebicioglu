import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/egitim-ve-katkilar',
  'Eğitim ve Katkılar',
  'İTÜ Türk Musikisi Devlet Konservatuvarı ve Yeditepe Üniversitesi mezunu Emine Leblebicioğlu’nun eğitimi, gönüllü eğitimleri ve toplumsal katkıları.'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
