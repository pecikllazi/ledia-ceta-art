'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SanityImage from '../shared/SanityImage';

interface Collection {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  coverImage?: any;
  artworkCount: number;
  firstArtwork?: {
    mainImage: any;
  };
}

interface CollectionGridProps {
  collections: Collection[];
}

export default function CollectionGrid({ collections }: CollectionGridProps) {
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

    const items = gridRef.current?.querySelectorAll('.collection-item');
    items?.forEach((item, index) => {
      (item as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [collections]);

  if (!collections || collections.length === 0) {
    return null;
  }

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {collections.map((collection) => {
          const coverImage = collection.coverImage || collection.firstArtwork?.mainImage;

          return (
            <Link
              key={collection._id}
              href={`/works/collection/${collection.slug.current}`}
              className="collection-item group block opacity-0 translate-y-6 transition-all duration-500 ease-out"
            >
              {/* Outer frame with thin white border and spacing */}
              <div className="p-3 border border-white/40 mb-4">
                {/* Collection Card */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {coverImage ? (
                    <SanityImage
                      image={coverImage}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                      <span className="text-white/30 text-sm">No image</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm tracking-wider uppercase">
                      View Collection
                    </span>
                  </div>
                </div>
              </div>

              {/* Collection Info */}
              <div>
                <h3 className="text-xl font-serif text-white group-hover:text-white/80 transition-colors mb-1">
                  {collection.title}
                </h3>
                <p className="text-sm text-white/50">
                  {collection.artworkCount} {collection.artworkCount === 1 ? 'artwork' : 'artworks'}
                </p>
                {collection.description && (
                  <p className="text-sm text-white/40 mt-2 line-clamp-2">
                    {collection.description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <style jsx global>{`
        .collection-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
