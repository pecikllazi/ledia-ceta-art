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
    <div className="min-h-screen pt-24 bg-paper">
      {/* Page Header */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-6">
              Collection
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-ink">
              Artworks
            </h1>
            <p className="text-xl text-warm-gray leading-relaxed">
              Explore the complete collection of paintings capturing the spirit of the sea,
              coastal landscapes, and the beauty of nature.
            </p>
          </div>
        </Container>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="divider"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <Container className="section-padding">
        <ArtworkFilter currentMedium={medium} mediums={mediums} />
        <ArtworkGrid artworks={artworks} />
      </Container>
    </div>
  );
}
