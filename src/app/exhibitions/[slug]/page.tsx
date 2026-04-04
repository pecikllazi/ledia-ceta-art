import { client } from '@/sanity/lib/client';
import { exhibitionBySlugQuery, allExhibitionsQuery } from '@/sanity/lib/queries';
import ExhibitionDetail from '@/components/exhibition/ExhibitionDetail';
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
  const exhibition = await client.fetch(exhibitionBySlugQuery, { slug });
  if (!exhibition) return {};

  const ogImage = exhibition.posterImage
    ? builder.image(exhibition.posterImage).width(1200).height(630).url()
    : undefined;

  const dateStr = exhibition.startDate
    ? new Date(exhibition.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '';
  const locationStr = [exhibition.venue, exhibition.city, exhibition.country].filter(Boolean).join(', ');

  const title = `${exhibition.title} - Ledia Ceta Exhibition`;
  const description = exhibition.description
    || `${exhibition.title}${dateStr ? ` (${dateStr})` : ''}${locationStr ? ` at ${locationStr}` : ''}. Exhibition by Albanian visual artist Ledia Ceta.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: exhibition.title }] : [],
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
  const exhibitions = await client.fetch(allExhibitionsQuery);
  return exhibitions.map((exhibition: any) => ({
    slug: exhibition.slug.current,
  }));
}

export default async function ExhibitionPage({ params }: PageProps) {
  const { slug } = await params;
  const exhibition = await client.fetch(exhibitionBySlugQuery, { slug });

  if (!exhibition) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ExhibitionEvent',
    name: exhibition.title,
    ...(exhibition.startDate && { startDate: exhibition.startDate }),
    ...(exhibition.endDate && { endDate: exhibition.endDate }),
    location: {
      '@type': 'Place',
      name: exhibition.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: exhibition.city,
        addressCountry: exhibition.country,
      },
    },
    organizer: {
      '@type': 'Person',
      name: 'Ledia Ceta',
    },
    image: exhibition.posterImage
      ? builder.image(exhibition.posterImage).width(1200).url()
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExhibitionDetail exhibition={exhibition} />
    </>
  );
}
