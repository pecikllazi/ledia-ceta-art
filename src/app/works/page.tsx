import { client } from '@/sanity/lib/client';
import { allArtworksQuery, artworksByMediumQuery, mediumTypesQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import ArtworkGrid from '@/components/artwork/ArtworkGrid';
import ArtworkFilter from '@/components/artwork/ArtworkFilter';

export const revalidate = 60;

interface PageProps {
  searchParams: Promise<{ medium?: string }>;
}

export default async function WorksPage({ searchParams }: PageProps) {
  const { medium } = await searchParams;

  const [artworks, mediums] = await Promise.all([
    medium
      ? client.fetch(artworksByMediumQuery, { medium })
      : client.fetch(allArtworksQuery),
    client.fetch(mediumTypesQuery),
  ]);

  return (
    <Container className="section-padding">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Works</h1>
        <p className="text-text-secondary">
          Explore the collection of paintings, mixed media, and installations.
        </p>
      </div>

      <ArtworkFilter currentMedium={medium} mediums={mediums} />
      <ArtworkGrid artworks={artworks} />
    </Container>
  );
}
