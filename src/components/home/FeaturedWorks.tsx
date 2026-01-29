'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Artwork {
  _id: string;
  title: string;
  slug: { current: string };
  year: number;
  medium?: {
    name: string;
  };
  mainImage: any;
}

interface FeaturedWorksProps {
  artworks: Artwork[];
}

// Gallery layout pattern - alternating sizes for visual interest
const getLayoutClass = (index: number) => {
  const patterns = [
    'col-span-2 row-span-2', // Large square
    'col-span-1 row-span-2', // Tall portrait
    'col-span-1 row-span-1', // Small square
    'col-span-1 row-span-1', // Small square
    'col-span-1 row-span-2', // Tall portrait
    'col-span-2 row-span-1', // Wide landscape
    'col-span-1 row-span-1', // Small square
    'col-span-1 row-span-1', // Small square
  ];
  return patterns[index % patterns.length];
};

const getAspectClass = (index: number) => {
  const patterns = [
    'aspect-square',      // Large square
    'aspect-[3/4]',       // Tall portrait
    'aspect-square',      // Small square
    'aspect-square',      // Small square
    'aspect-[3/4]',       // Tall portrait
    'aspect-[16/9]',      // Wide landscape
    'aspect-square',      // Small square
    'aspect-square',      // Small square
  ];
  return patterns[index % patterns.length];
};

export default function FeaturedWorks({ artworks }: FeaturedWorksProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

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

    const items = galleryRef.current?.querySelectorAll('.gallery-item');
    items?.forEach((item, index) => {
      (item as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [artworks]);

  if (!artworks || artworks.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24 bg-paper">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-ink">
            Featured Works
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
            A curated selection capturing the essence of the sea
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px]"
        >
          {artworks.slice(0, 8).map((artwork, index) => (
            <Link
              key={artwork._id}
              href={`/works/${artwork.slug.current}`}
              className={`gallery-item group block opacity-0 translate-y-8 transition-all duration-700 ease-out ${getLayoutClass(index)}`}
            >
              <div className="relative h-full w-full overflow-hidden border border-ink/80 bg-ink/5">
                <SanityImage
                  image={artwork.mainImage}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-lg text-paper mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-paper/70">
                      {artwork.year}{artwork.medium && ` · ${artwork.medium.name}`}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button href="/works" variant="outline" size="lg">
            View Complete Collection
          </Button>
        </div>
      </Container>

      {/* CSS for scroll animations */}
      <style jsx global>{`
        .gallery-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
