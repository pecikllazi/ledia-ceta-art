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
    <section className="relative section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-biolum-cyan/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-biolum-teal/5 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-biolum-cyan/80 border border-biolum-cyan/20 rounded-full backdrop-blur-sm mb-6">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            <span className="text-pearl">Featured </span>
            <span className="text-gradient-ocean">Works</span>
          </h2>
          <p className="text-pearl-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of paintings capturing the essence of the sea
            and the beauty of coastal landscapes
          </p>
        </div>

        {/* Artwork Grid - Masonry-style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {artworks.map((artwork, index) => (
            <Link
              key={artwork._id}
              href={`/works/${artwork.slug.current}`}
              className={`group relative ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl glass-card card-hover h-full">
                {/* Image Container */}
                <div className={`relative ${index === 0 ? 'aspect-[4/3] md:aspect-[16/12]' : 'aspect-[4/5]'} overflow-hidden`}>
                  <SanityImage
                    image={artwork.mainImage}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss via-ocean-abyss/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-biolum-cyan/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  {/* Title */}
                  <h3 className={`font-display font-light mb-2 text-pearl group-hover:text-biolum-cyan transition-colors duration-300 ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  }`}>
                    {artwork.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-pearl-muted">
                    <span>{artwork.year}</span>
                    {artwork.medium && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-biolum-cyan/50"></span>
                        <span>{artwork.medium.name}</span>
                      </>
                    )}
                  </div>

                  {/* View Button - appears on hover */}
                  <div className="mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 text-sm text-biolum-cyan">
                      View Artwork
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-4 -right-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-biolum-cyan/50 to-transparent rotate-45"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button href="/works" variant="outline" size="lg">
            View Complete Collection
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Container>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider-glow"></div>
      </div>
    </section>
  );
}
