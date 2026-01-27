import Link from 'next/link';
import SanityImage from '../shared/SanityImage';

interface Exhibition {
  _id: string;
  title: string;
  slug: { current: string };
  theme?: string;
  startDate: string;
  endDate?: string;
  venue?: string;
  city: string;
  country: string;
  type?: string;
  posterImage?: any;
}

interface ExhibitionCardProps {
  exhibition: Exhibition;
}

export default function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Link href={`/exhibitions/${exhibition.slug.current}`} className="group">
      <div className="grid md:grid-cols-[200px,1fr] gap-6 pb-6 border-b border-warm-gray">
        {exhibition.posterImage && (
          <div className="relative aspect-[4/5] bg-warm-gray overflow-hidden">
            <SanityImage
              image={exhibition.posterImage}
              alt={exhibition.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div>
          {exhibition.type && (
            <span className="inline-block text-xs uppercase tracking-wider text-sea-deep mb-2">
              {exhibition.type}
            </span>
          )}
          <h3 className="text-2xl font-serif font-medium mb-2 group-hover:text-sea-deep transition-colors">
            {exhibition.title}
          </h3>
          {exhibition.theme && (
            <p className="text-text-secondary mb-3">{exhibition.theme}</p>
          )}
          <div className="text-sm text-text-secondary space-y-1">
            <p>
              {formatDate(exhibition.startDate)}
              {exhibition.endDate && ` – ${formatDate(exhibition.endDate)}`}
            </p>
            {exhibition.venue && <p>{exhibition.venue}</p>}
            <p>
              {exhibition.city}, {exhibition.country}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
