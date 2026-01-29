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
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sea-deep via-sea-dark to-sea-medium py-16 md:py-24 border-b border-sea-medium/30">
        <Container>
          <p className="text-sea-light text-sm uppercase tracking-[0.2em] mb-3 font-medium">
            Gallery
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">
            Works
          </h1>
          <p className="text-sea-pale/80 text-lg max-w-2xl">
            Explore the collection of paintings capturing the spirit of the sea,
            coastal landscapes, and the beauty of nature.
          </p>
        </Container>
      </div>

      <Container className="section-padding">
        <ArtworkFilter currentMedium={medium} mediums={mediums} />
        <ArtworkGrid artworks={artworks} />
      </Container>
    </div>
  );
}
