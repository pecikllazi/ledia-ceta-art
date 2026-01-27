import Link from 'next/link';
import SanityImage from '../shared/SanityImage';
import PortableText from '../ui/PortableText';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Artwork {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  year: number;
}

interface Exhibition {
  _id: string;
  title: string;
  titleChinese?: string;
  theme?: string;
  startDate: string;
  endDate?: string;
  venue?: string;
  city: string;
  country: string;
  type?: string;
  description?: any;
  posterImage?: any;
  installationImages?: any[];
  artworks?: Artwork[];
  externalLink?: string;
  catalogLink?: string;
}

interface ExhibitionDetailProps {
  exhibition: Exhibition;
}

export default function ExhibitionDetail({ exhibition }: ExhibitionDetailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Container className="section-padding">
      <div className="max-w-4xl mx-auto">
        {exhibition.type && (
          <span className="inline-block text-sm uppercase tracking-wider text-sea-deep mb-3">
            {exhibition.type}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl font-serif font-light mb-3">
          {exhibition.title}
        </h1>

        {exhibition.titleChinese && (
          <p className="text-2xl text-text-secondary mb-6">{exhibition.titleChinese}</p>
        )}

        {exhibition.theme && (
          <p className="text-xl text-text-secondary mb-6">{exhibition.theme}</p>
        )}

        <div className="text-text-secondary mb-8 space-y-1">
          <p>
            {formatDate(exhibition.startDate)}
            {exhibition.endDate && ` – ${formatDate(exhibition.endDate)}`}
          </p>
          {exhibition.venue && <p>{exhibition.venue}</p>}
          <p>
            {exhibition.city}, {exhibition.country}
          </p>
        </div>

        {exhibition.posterImage && (
          <div className="relative aspect-video bg-warm-gray mb-8">
            <SanityImage
              image={exhibition.posterImage}
              alt={exhibition.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {exhibition.description && (
          <div className="prose prose-lg max-w-none mb-12">
            <PortableText value={exhibition.description} />
          </div>
        )}

        {exhibition.installationImages && exhibition.installationImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Installation Views</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exhibition.installationImages.map((image, index) => (
                <div key={index}>
                  <div className="relative aspect-video bg-warm-gray mb-2">
                    <SanityImage
                      image={image}
                      alt={`Installation view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-text-secondary">{image.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {exhibition.artworks && exhibition.artworks.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Featured Artworks</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {exhibition.artworks.map((artwork) => (
                <Link
                  key={artwork._id}
                  href={`/works/${artwork.slug.current}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] bg-warm-gray mb-2">
                    <SanityImage
                      image={artwork.mainImage}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm font-medium group-hover:text-sea-deep transition-colors">
                    {artwork.title}
                  </p>
                  <p className="text-xs text-text-secondary">{artwork.year}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4 pt-8 border-t border-warm-gray">
          <Button href="/exhibitions" variant="outline">
            Back to Exhibitions
          </Button>
          {exhibition.externalLink && (
            <Button
              href={exhibition.externalLink}
              variant="secondary"
            >
              Visit Official Website
            </Button>
          )}
          {exhibition.catalogLink && (
            <Button
              href={exhibition.catalogLink}
              variant="secondary"
            >
              View Catalog
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}
