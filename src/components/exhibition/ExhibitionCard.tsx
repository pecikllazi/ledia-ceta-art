'use client';

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
    <Link href={`/exhibitions/${exhibition.slug.current}`} className="group block">
      <div className="bg-cream overflow-hidden border border-cloud hover:border-silver transition-colors duration-300">
        <div className="grid md:grid-cols-[280px,1fr]">
          {/* Image */}
          {exhibition.posterImage && (
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[300px] overflow-hidden border-b md:border-b-0 md:border-r border-ink/20">
              <SanityImage
                image={exhibition.posterImage}
                alt={exhibition.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Content - proper padding on all sides */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            {/* Type Badge */}
            {exhibition.type && (
              <span className="inline-block self-start px-3 py-1 text-xs tracking-wider uppercase text-stone border border-ink/20 mb-4">
                {exhibition.type}
              </span>
            )}

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-serif font-normal mb-2 text-ink group-hover:text-ocean transition-colors duration-300">
              {exhibition.title}
            </h3>

            {/* Theme */}
            {exhibition.theme && (
              <p className="text-stone mb-4 italic font-serif">"{exhibition.theme}"</p>
            )}

            {/* Details */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-warm-gray" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {formatDate(exhibition.startDate)}
                {exhibition.endDate && ` – ${formatDate(exhibition.endDate)}`}
              </span>

              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-warm-gray" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {exhibition.city}, {exhibition.country}
              </span>
            </div>

            {/* Venue */}
            {exhibition.venue && (
              <p className="mt-3 text-sm text-warm-gray">{exhibition.venue}</p>
            )}

            {/* View Link */}
            <div className="mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="inline-flex items-center gap-2 text-sm text-ink">
                View Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
