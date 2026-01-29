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
      <div className="relative py-12 md:py-16 overflow-hidden border-b border-ink/10">
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            {/* Left - Title */}
            <div>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-4">
                Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-ink">
                Artworks
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed">
                Explore the complete collection of paintings capturing the spirit of the sea.
              </p>
            </div>

            {/* Right - Count */}
            <div className="flex gap-8 md:justify-end">
              <div className="text-center md:text-right">
                <p className="text-4xl md:text-5xl font-serif text-ink">{artworks.length}</p>
                <p className="text-xs uppercase tracking-wider text-stone">
                  {medium ? 'Matching Works' : 'Total Works'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Gallery Section */}
      <Container className="py-10 md:py-14">
        <ArtworkFilter currentMedium={medium} mediums={mediums} />
        <ArtworkGrid artworks={artworks} />
      </Container>
    </div>
  );
}
