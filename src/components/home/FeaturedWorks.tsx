import Link from 'next/link';
import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Artwork {
  _id: string;
  title: string;
  slug: { current: string };
  year: number;
  medium?: {
    name: string;
  };
  mainImage: any;
}

interface FeaturedWorksProps {
  artworks: Artwork[];
}

export default function FeaturedWorks({ artworks }: FeaturedWorksProps) {
  if (!artworks || artworks.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-sea-deep via-sea-dark to-sea-deep relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sea-medium/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sea-bright/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-sea-light text-sm uppercase tracking-[0.2em] mb-3 font-medium">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-gradient-sea">
            Featured Works
          </h2>
          <p className="text-sea-pale/80 text-lg max-w-2xl mx-auto">
            A selection of recent paintings exploring the depths of the sea
            and the beauty of coastal landscapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artworks.map((artwork, index) => (
            <Link
              key={artwork._id}
              href={`/works/${artwork.slug.current}`}
              className="group card-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] bg-sea-dark overflow-hidden rounded-lg mb-4 shadow-sea border border-sea-medium/30">
                <SanityImage
                  image={artwork.mainImage}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-sea-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">View Artwork</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 text-white group-hover:text-sea-light transition-colors duration-300">
                {artwork.title}
              </h3>
              <p className="text-sm text-sea-pale/70 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-sea-medium"></span>
                {artwork.year}{artwork.medium && ` • ${artwork.medium.name}`}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button href="/works" variant="primary" className="shadow-sea hover:shadow-sea-lg transition-shadow">
            View All Works
          </Button>
        </div>
      </Container>
    </section>
  );
}
