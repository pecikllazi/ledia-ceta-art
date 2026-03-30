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
      (item as HTMLElement).style.transitionDelay = `${index * 80}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [artworks]);

  if (!artworks || artworks.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24 bg-black">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-white">
            Featured Works
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            A curated selection capturing the essence of the sea
          </p>
        </div>

        {/* Uniform Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-12"
        >
          {artworks.slice(0, 14).map((artwork, index) => (
            <Link
              key={artwork._id}
              href={`/works/${artwork.slug.current}`}
              className="gallery-item group block opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="p-2 border border-white/40">
                <div className="relative aspect-square overflow-hidden">
                  <SanityImage
                    image={artwork.mainImage}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                    <div className="p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-serif text-sm md:text-base text-white mb-0.5 line-clamp-1">
                        {artwork.title}
                      </h3>
                      <p className="text-xs text-white/70">
                        {artwork.year}{artwork.medium && ` · ${artwork.medium.name}`}
                      </p>
                    </div>
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
