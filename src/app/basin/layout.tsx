import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/basin',
  'Basında Emine Leblebicioğlu',
  'Kanal T, Kıbrıs TV ve haber sitelerinde Emine Leblebicioğlu: röportajlar, yayınlar ve basın haberleri arşivi.'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
