import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/siyasi-calismalar',
  'TAM Parti Girne Siyasi Çalışmaları',
  'Emine Leblebicioğlu’nun TAM Parti (Toplumsal Adalet ve Mücadele Partisi) Girne milletvekili aday adaylığı, siyasi vizyonu ve öncelikli çalışma alanları.'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
