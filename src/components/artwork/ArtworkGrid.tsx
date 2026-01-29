'use client';

import { useEffect, useRef } from 'react';
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
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const items = gridRef.current?.querySelectorAll('.artwork-item');
    items?.forEach((item, index) => {
      (item as HTMLElement).style.transitionDelay = `${index * 50}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [artworks]);

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
    <>
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {artworks.map((artwork) => (
          <Link
            key={artwork._id}
            href={`/works/${artwork.slug.current}`}
            className="artwork-item group block opacity-0 translate-y-6 transition-all duration-500 ease-out"
          >
            <div className="relative overflow-hidden border border-ink/80 bg-ink/5">
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
                  <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-paper/95 text-ink border border-ink/50">
                    Available
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-4 bg-paper border-t border-ink/20">
                <h3 className="text-base font-serif font-normal mb-1 text-ink group-hover:text-ocean transition-colors duration-300 truncate">
                  {artwork.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-stone">
                  <span>{artwork.year}</span>
                  {artwork.medium && (
                    <>
                      <span className="text-ink/30">·</span>
                      <span className="truncate">{artwork.medium.name}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        .artwork-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
