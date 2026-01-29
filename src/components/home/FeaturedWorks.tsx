'use client';

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
  if (!artworks || artworks.length === 0) return null;

  return (
    <section className="relative section-padding bg-paper">
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-6">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-ink">
            Featured Works
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of paintings capturing the essence of the sea
            and the beauty of coastal landscapes
          </p>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {artworks.map((artwork, index) => (
            <Link
              key={artwork._id}
              href={`/works/${artwork.slug.current}`}
              className={`group block ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {/* Card */}
              <div className="relative overflow-hidden bg-cream h-full">
                {/* Image Container */}
                <div className={`relative ${index === 0 ? 'aspect-[4/3] md:aspect-[16/12]' : 'aspect-[4/5]'} overflow-hidden`}>
                  <SanityImage
                    image={artwork.mainImage}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className={`font-serif font-normal mb-2 text-ink group-hover:text-ocean transition-colors duration-300 ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  }`}>
                    {artwork.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-stone">
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

        {/* View All Button */}
        <div className="text-center">
          <Button href="/works" variant="outline" size="lg">
            View Complete Collection
          </Button>
        </div>
      </Container>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider"></div>
      </div>
    </section>
  );
}
