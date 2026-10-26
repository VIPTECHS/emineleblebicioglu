import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const routes = ['', '/hakkinda', '/siyasi-calismalar', '/kariyer', '/calismalar', '/basin', '/egitim-ve-katkilar', '/iletisim'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/basin' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
