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
        <div className="inline-block p-8 rounded-2xl glass-card">
          <p className="text-pearl-muted text-lg">No artworks found.</p>
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
          <div className="relative overflow-hidden rounded-2xl glass-card card-hover">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <SanityImage
                image={artwork.mainImage}
                alt={artwork.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss via-ocean-abyss/30 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Available Badge */}
              {artwork.available && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-biolum-teal/20 text-biolum-teal border border-biolum-teal/30 backdrop-blur-sm">
                  Available
                </div>
              )}

              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-biolum-cyan/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-xl font-display font-light mb-2 text-pearl group-hover:text-biolum-cyan transition-colors duration-300">
                {artwork.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-pearl-muted">
                <span>{artwork.year}</span>
                {artwork.medium && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-biolum-cyan/50"></span>
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
