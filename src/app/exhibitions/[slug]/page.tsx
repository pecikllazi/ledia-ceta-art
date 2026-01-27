import { client } from '@/sanity/lib/client';
import { exhibitionBySlugQuery, allExhibitionsQuery } from '@/sanity/lib/queries';
import ExhibitionDetail from '@/components/exhibition/ExhibitionDetail';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const exhibitions = await client.fetch(allExhibitionsQuery);
  return exhibitions.map((exhibition: any) => ({
    slug: exhibition.slug.current,
  }));
}

export default async function ExhibitionPage({ params }: PageProps) {
  const exhibition = await client.fetch(exhibitionBySlugQuery, {
    slug: params.slug,
  });

  if (!exhibition) {
    notFound();
  }

  return <ExhibitionDetail exhibition={exhibition} />;
}
