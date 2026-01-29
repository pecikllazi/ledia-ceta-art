'use client';

import Link from 'next/link';
import SanityImage from '../shared/SanityImage';

interface Artwork {
  _id: string;
  title: string;
  slug: { current: string };
  year: number;
  medium?: {
    name: string;
    slug?: { current: string };
  };
  mainImage: any;
  available?: boolean;
}

interface ArtworkGridProps {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  if (!artworks || artworks.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-block p-8 bg-cream border border-cloud">
          <p className="text-warm-gray text-lg">No artworks found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {artworks.map((artwork) => (
        <Link
          key={artwork._id}
          href={`/works/${artwork.slug.current}`}
          className="group"
        >
          <div className="relative overflow-hidden bg-cream">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <SanityImage
                image={artwork.mainImage}
                alt={artwork.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Available Badge */}
              {artwork.available && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-paper/90 text-ocean border border-ocean">
                  Available
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-serif font-normal mb-2 text-ink group-hover:text-ocean transition-colors duration-300">
                {artwork.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-stone">
                <span>{artwork.year}</span>
                {artwork.medium && (
                  <>
                    <span className="w-1 h-px bg-silver"></span>
                    <span>{artwork.medium.name}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
