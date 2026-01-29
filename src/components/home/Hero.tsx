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
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-ocean-abyss">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-twilight/30 via-transparent to-ocean-abyss"></div>

        {/* Hero Image */}
        {heroImage && (
          <div className="absolute inset-0">
            <SanityImage
              image={heroImage}
              alt={name}
              fill
              className="object-cover opacity-60"
              priority
            />
            {/* Multi-layer gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss via-ocean-abyss/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-abyss/60 via-transparent to-ocean-abyss/60"></div>
          </div>
        )}

        {/* Bioluminescent Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-biolum-cyan/10 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-biolum-teal/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-biolum-blue/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating Particles */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-biolum-cyan/30 rounded-full animate-rise"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${8 + Math.random() * 8}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Light Rays Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-conic from-biolum-cyan/20 via-transparent to-transparent rotate-180"></div>
      </div>

      {/* Content */}
      <Container className="relative z-20">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Subtle label */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-biolum-cyan/80 border border-biolum-cyan/20 rounded-full backdrop-blur-sm">
              Visual Artist
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-light mb-6 tracking-tight">
            <span className="block text-pearl">Ledia</span>
            <span className="block text-gradient-ocean text-glow">Çeta</span>
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="text-lg md:text-xl lg:text-2xl text-pearl-muted font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
              {tagline}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/works" variant="primary" size="lg">
              Explore Collection
            </Button>
            <Button href="/about" variant="outline" size="lg">
              About the Artist
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-pearl-subtle animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean-abyss to-transparent pointer-events-none"></div>
    </section>
  );
}
