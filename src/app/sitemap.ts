import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ledia-ceta-art.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [artworks, exhibitions, news] = await Promise.all([
    client.fetch(`*[_type == "artwork"]{ slug, _updatedAt }`),
    client.fetch(`*[_type == "exhibition"]{ slug, _updatedAt }`),
    client.fetch(`*[_type == "news"]{ slug, _updatedAt }`),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/works`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/exhibitions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];

  const artworkPages: MetadataRoute.Sitemap = artworks.map((a: any) => ({
    url: `${SITE_URL}/works/${a.slug.current}`,
    lastModified: new Date(a._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const exhibitionPages: MetadataRoute.Sitemap = exhibitions.map((e: any) => ({
    url: `${SITE_URL}/exhibitions/${e.slug.current}`,
    lastModified: new Date(e._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const newsPages: MetadataRoute.Sitemap = news.map((n: any) => ({
    url: `${SITE_URL}/news/${n.slug.current}`,
    lastModified: new Date(n._updatedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...artworkPages, ...exhibitionPages, ...newsPages];
}
