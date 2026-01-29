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
    <div className="min-h-screen pt-24">
      {/* Page Header */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-biolum-cyan/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-biolum-teal/5 rounded-full blur-[150px]"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-biolum-cyan/80 border border-biolum-cyan/20 rounded-full backdrop-blur-sm mb-6">
              Collection
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6">
              <span className="text-pearl">Art</span>
              <span className="text-gradient-ocean">works</span>
            </h1>
            <p className="text-xl text-pearl-muted leading-relaxed">
              Explore the complete collection of paintings capturing the spirit of the sea,
              coastal landscapes, and the beauty of nature.
            </p>
          </div>
        </Container>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="divider-glow"></div>
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
