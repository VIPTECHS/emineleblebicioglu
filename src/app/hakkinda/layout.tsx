import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/hakkinda',
  'Hakkında — Biyografi',
  'Emine İkiz Leblebicioğlu kimdir? 1980 Hatay doğumlu, Girne’de yaşayan yönetici, KTEB yönetim kurulu üyesi ve TAM Parti Girne milletvekili aday adayı. Hayat hikâyesi ve biyografisi.'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
