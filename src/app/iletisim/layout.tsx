import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/iletisim',
  'İletişim',
  'Emine İkiz Leblebicioğlu ile iletişim: TAM Parti Girne milletvekili aday adayı, Girne / Lefkoşa, Kuzey Kıbrıs.'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
