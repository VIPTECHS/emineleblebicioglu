import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/kariyer',
  'Kariyer Yolculuğu',
  'Emine Leblebicioğlu’nun 2002’den bu yana yönetim, insan kaynakları, bilişim ve gayrimenkul alanlarındaki kariyer kronolojisi.'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
