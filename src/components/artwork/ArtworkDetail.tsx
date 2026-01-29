'use client';

import Link from 'next/link';
import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Exhibition {
  _id: string;
  title: string;
  slug: { current: string };
  startDate: string;
  city: string;
}

interface Artwork {
  _id: string;
  title: string;
  titleChinese?: string;
  year: number;
  medium?: {
    name: string;
  };
  surface?: string;
  dimensions?: {
    width: number;
    height: number;
    depth?: number;
    unit: string;
  };
  mainImage: any;
  gallery?: any[];
  description?: string;
  descriptionChinese?: string;
  series?: string;
  available: boolean;
  price?: number;
  exhibitions?: Exhibition[];
}

interface ArtworkDetailProps {
  artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  const formatDimensions = () => {
    if (!artwork.dimensions) return null;
    const { width, height, depth, unit } = artwork.dimensions;
    if (depth) {
      return `${width} × ${height} × ${depth} ${unit}`;
    }
    return `${width} × ${height} ${unit}`;
  };

  return (
    <div className="min-h-screen pt-24">
      <Container className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-card mb-6">
              <SanityImage
                image={artwork.mainImage}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Gallery Thumbnails */}
            {artwork.gallery && artwork.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {artwork.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden glass-card cursor-pointer hover:ring-2 ring-biolum-cyan/50 transition-all"
                  >
                    <SanityImage
                      image={image}
                      alt={`${artwork.title} - View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Back Link */}
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-sm text-pearl-muted hover:text-biolum-cyan transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Collection
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-light mb-3 text-pearl">
              {artwork.title}
            </h1>
            {artwork.titleChinese && (
              <p className="text-2xl text-pearl-muted mb-8">{artwork.titleChinese}</p>
            )}

            {/* Details Card */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-pearl-subtle/10">
                  <span className="text-pearl-muted">Year</span>
                  <span className="text-pearl font-medium">{artwork.year}</span>
                </div>
                {artwork.medium && (
                  <div className="flex justify-between items-center py-3 border-b border-pearl-subtle/10">
                    <span className="text-pearl-muted">Medium</span>
                    <span className="text-pearl font-medium">{artwork.medium.name}</span>
                  </div>
                )}
                {artwork.surface && (
                  <div className="flex justify-between items-center py-3 border-b border-pearl-subtle/10">
                    <span className="text-pearl-muted">Surface</span>
                    <span className="text-pearl font-medium">{artwork.surface}</span>
                  </div>
                )}
                {artwork.dimensions && (
                  <div className="flex justify-between items-center py-3 border-b border-pearl-subtle/10">
                    <span className="text-pearl-muted">Dimensions</span>
                    <span className="text-pearl font-medium">{formatDimensions()}</span>
                  </div>
                )}
                {artwork.series && (
                  <div className="flex justify-between items-center py-3">
                    <span className="text-pearl-muted">Series</span>
                    <span className="text-pearl font-medium">{artwork.series}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {artwork.description && (
              <div className="mb-8">
                <h2 className="text-lg font-display font-medium mb-4 text-biolum-cyan">About This Work</h2>
                <p className="text-pearl-muted leading-relaxed">{artwork.description}</p>
              </div>
            )}

            {/* Exhibitions */}
            {artwork.exhibitions && artwork.exhibitions.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-display font-medium mb-4 text-biolum-cyan">Exhibited At</h2>
                <ul className="space-y-2">
                  {artwork.exhibitions.map((exhibition) => (
                    <li key={exhibition._id}>
                      <Link
                        href={`/exhibitions/${exhibition.slug.current}`}
                        className="text-pearl-muted hover:text-biolum-cyan transition-colors"
                      >
                        {exhibition.title} — {exhibition.city} ({new Date(exhibition.startDate).getFullYear()})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {artwork.available && (
                <Button href="/contact" variant="primary" size="lg">
                  Inquire About This Work
                </Button>
              )}
              <Button href="/works" variant="outline">
                View More Works
              </Button>
            </div>

            {/* Price/Availability Note */}
            {artwork.available && artwork.price && (
              <p className="mt-6 text-sm text-pearl-muted">
                Available for purchase • USD ${artwork.price.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
