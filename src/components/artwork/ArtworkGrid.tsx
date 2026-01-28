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
      <div className="text-center py-12">
        <p className="text-text-secondary">No artworks found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            {artwork.available && (
              <div className="absolute top-4 right-4 bg-sea-deep text-white text-xs px-3 py-1 rounded-full">
                Available
              </div>
            )}
          </div>
          <h3 className="text-lg font-serif font-medium mb-1 group-hover:text-sea-deep transition-colors">
            {artwork.title}
          </h3>
          <p className="text-sm text-text-secondary">
            {artwork.year}{artwork.medium && ` • ${artwork.medium.name}`}
          </p>
        </Link>
      ))}
    </div>
  );
}
