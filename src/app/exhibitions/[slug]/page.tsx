import { client } from '@/sanity/lib/client';
import { exhibitionBySlugQuery, allExhibitionsQuery } from '@/sanity/lib/queries';
import ExhibitionDetail from '@/components/exhibition/ExhibitionDetail';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const exhibitions = await client.fetch(allExhibitionsQuery);
  return exhibitions.map((exhibition: any) => ({
    slug: exhibition.slug.current,
  }));
}

export default async function ExhibitionPage({ params }: PageProps) {
  const { slug } = await params;
  const exhibition = await client.fetch(exhibitionBySlugQuery, {
    slug,
  });

  if (!exhibition) {
    notFound();
  }

  return <ExhibitionDetail exhibition={exhibition} />;
}
