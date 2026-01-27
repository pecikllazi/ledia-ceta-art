import Link from 'next/link';
import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Artwork {
  _id: string;
  title: string;
  slug: { current: string };
  year: number;
  medium: string;
  mainImage: any;
}

interface FeaturedWorksProps {
  artworks: Artwork[];
}

export default function FeaturedWorks({ artworks }: FeaturedWorksProps) {
  if (!artworks || artworks.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
            Featured Works
          </h2>
          <p className="text-text-secondary">
            A selection of recent and notable pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artworks.map((artwork) => (
            <Link
              key={artwork._id}
              href={`/works/${artwork.slug.current}`}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-warm-gray overflow-hidden mb-4">
                <SanityImage
                  image={artwork.mainImage}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-medium mb-1 group-hover:text-sea-deep transition-colors">
                {artwork.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {artwork.year} • {artwork.medium}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button href="/works" variant="outline">
            View All Works
          </Button>
        </div>
      </Container>
    </section>
  );
}
