import { client } from '@/sanity/lib/client';
import { artworkBySlugQuery, allArtworksQuery } from '@/sanity/lib/queries';
import ArtworkDetail from '@/components/artwork/ArtworkDetail';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import imageUrlBuilder from '@sanity/image-url';

export const revalidate = 60;

const builder = imageUrlBuilder(client);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = await client.fetch(artworkBySlugQuery, { slug });
  if (!artwork) return {};

  const ogImage = artwork.mainImage
    ? builder.image(artwork.mainImage).width(1200).height(630).url()
    : undefined;

  const title = `${artwork.title} (${artwork.year}) - Ledia Ceta`;
  const description = artwork.description
    || `${artwork.title}, ${artwork.year}${artwork.medium ? ` - ${artwork.medium.name}` : ''}. Original artwork by Albanian visual artist Ledia Ceta.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: artwork.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export async function generateStaticParams() {
  const artworks = await client.fetch(allArtworksQuery);
  return artworks.map((artwork: any) => ({
    slug: artwork.slug.current,
  }));
}

export default async function ArtworkPage({ params }: PageProps) {
  const { slug } = await params;
  const artwork = await client.fetch(artworkBySlugQuery, { slug });

  if (!artwork) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: artwork.title,
    creator: {
      '@type': 'Person',
      name: 'Ledia Ceta',
      nationality: 'Albanian',
    },
    dateCreated: String(artwork.year),
    artMedium: artwork.medium?.name,
    ...(artwork.dimensions && {
      width: { '@type': 'Distance', name: `${artwork.dimensions.width} ${artwork.dimensions.unit}` },
      height: { '@type': 'Distance', name: `${artwork.dimensions.height} ${artwork.dimensions.unit}` },
    }),
    image: artwork.mainImage
      ? builder.image(artwork.mainImage).width(1200).url()
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArtworkDetail artwork={artwork} />
    </>
  );
}
