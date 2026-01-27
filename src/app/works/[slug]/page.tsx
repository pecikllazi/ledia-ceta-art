import { client } from '@/sanity/lib/client';
import { artworkBySlugQuery, allArtworksQuery } from '@/sanity/lib/queries';
import ArtworkDetail from '@/components/artwork/ArtworkDetail';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const artworks = await client.fetch(allArtworksQuery);
  return artworks.map((artwork: any) => ({
    slug: artwork.slug.current,
  }));
}

export default async function ArtworkPage({ params }: PageProps) {
  const artwork = await client.fetch(artworkBySlugQuery, { slug: params.slug });

  if (!artwork) {
    notFound();
  }

  return <ArtworkDetail artwork={artwork} />;
}
