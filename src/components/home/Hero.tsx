'use client';

import { useEffect, useState } from 'react';
import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface HeroProps {
  name: string;
  tagline: string;
  portrait?: any;
  featuredImage?: any;
}

export default function Hero({ name, tagline, portrait, featuredImage }: HeroProps) {
  const heroImage = featuredImage || portrait;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-deep-sea">
        {heroImage && (
          <div className="absolute inset-0">
            <SanityImage
              image={heroImage}
              alt={name}
              fill
              className="object-cover opacity-70"
              priority
            />
            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-sea via-deep-sea/40 to-deep-sea/20"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <Container className="relative z-20">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Subtle label */}
          <div className="mb-8">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-cream/70">
              Visual Artist
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-light mb-6 tracking-tight text-cream">
            <span className="block">Ledia</span>
            <span className="block italic">Çeta</span>
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="text-lg md:text-xl lg:text-2xl text-cream/80 font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
              {tagline}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/works" variant="secondary" size="lg">
              Explore Collection
            </Button>
            <Button href="/about" variant="ghost" size="lg" className="text-cream/80 hover:text-cream hover:bg-cream/10">
              About the Artist
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-cream/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
