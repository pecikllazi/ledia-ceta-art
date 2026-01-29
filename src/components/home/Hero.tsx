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

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Full visibility */}
      {heroImage && (
        <div className="absolute inset-0">
          <SanityImage
            image={heroImage}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-sea-deep/60 via-sea-deep/40 to-sea-deep/70"></div>
        </div>
      )}

      {/* Fallback background if no image */}
      {!heroImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-sea-deep via-sea-medium to-sea-light"></div>
      )}

      {/* Animated wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

      {/* Content */}
      <Container className="relative z-20 text-center">
        <div className="animate-fade-in">
          <p className="text-sea-light text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium">
            Visual Artist
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 text-white drop-shadow-lg">
            {name}
          </h1>
          {tagline && (
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8 max-w-2xl mx-auto">
              {tagline}
            </p>
          )}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button href="/works" variant="primary" className="bg-white text-sea-deep hover:bg-sea-light hover:text-sea-deep border-2 border-white">
              Explore Works
            </Button>
            <Button href="/about" variant="outline" className="border-white text-white hover:bg-white/20">
              About the Artist
            </Button>
          </div>
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sea-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-sea-medium/10 rounded-full blur-3xl"></div>
    </section>
  );
}
