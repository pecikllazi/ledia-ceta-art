import { client } from '@/sanity/lib/client';
import { collectionBySlugQuery, artworksByCollectionQuery, allCollectionsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import ArtworkGrid from '@/components/artwork/ArtworkGrid';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const collections = await client.fetch(allCollectionsQuery);
  return collections.map((collection: any) => ({
    slug: collection.slug.current,
  }));
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;

  const [collection, artworks] = await Promise.all([
    client.fetch(collectionBySlugQuery, { slug }),
    client.fetch(artworksByCollectionQuery, { collection: slug }),
  ]);

  if (!collection) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 bg-black">
      {/* Page Header */}
      <div className="relative py-12 md:py-16 overflow-hidden border-b border-white/10">
        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/works" className="hover:text-white transition-colors">
                  Works
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">{collection.title}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 items-end">
            {/* Left - Title */}
            <div>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
                Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-white">
                {collection.title}
              </h1>
              {collection.description && (
                <p className="text-lg text-white/60 leading-relaxed">
                  {collection.description}
                </p>
              )}
            </div>

            {/* Right - Count */}
            <div className="flex gap-8 md:justify-end">
              <div className="text-center md:text-right">
                <p className="text-4xl md:text-5xl font-serif text-white">{artworks.length}</p>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  {artworks.length === 1 ? 'Artwork' : 'Artworks'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Gallery Section */}
      <Container className="py-10 md:py-14">
        {artworks.length > 0 ? (
          <ArtworkGrid artworks={artworks} />
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60">No artworks in this collection yet.</p>
          </div>
        )}
      </Container>

      {/* Back Link */}
      <Container className="pb-16">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Collections
        </Link>
      </Container>
    </div>
  );
}
