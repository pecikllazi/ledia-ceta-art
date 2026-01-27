import Link from 'next/link';
import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Exhibition {
  _id: string;
  title: string;
  slug: { current: string };
  theme?: string;
  startDate: string;
  endDate: string;
  venue?: string;
  city: string;
  posterImage?: any;
}

interface CurrentExhibitionProps {
  exhibition: Exhibition | null;
}

export default function CurrentExhibition({ exhibition }: CurrentExhibitionProps) {
  if (!exhibition) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="section-padding bg-off-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {exhibition.posterImage && (
            <div className="relative aspect-[4/3] bg-warm-gray overflow-hidden">
              <SanityImage
                image={exhibition.posterImage}
                alt={exhibition.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div>
            <p className="text-sm uppercase tracking-wider text-sea-deep mb-2">
              Current Exhibition
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              {exhibition.title}
            </h2>
            {exhibition.theme && (
              <p className="text-xl text-text-secondary mb-4">{exhibition.theme}</p>
            )}
            <div className="space-y-2 mb-6">
              <p className="text-text-secondary">
                {formatDate(exhibition.startDate)} – {formatDate(exhibition.endDate)}
              </p>
              {exhibition.venue && (
                <p className="text-text-secondary">{exhibition.venue}</p>
              )}
              <p className="text-text-secondary">{exhibition.city}</p>
            </div>
            <Button href={`/exhibitions/${exhibition.slug.current}`} variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
