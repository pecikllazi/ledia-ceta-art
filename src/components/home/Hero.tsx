import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';

interface HeroProps {
  name: string;
  tagline: string;
  portrait?: any;
  featuredImage?: any;
}

export default function Hero({ name, tagline, portrait, featuredImage }: HeroProps) {
  const heroImage = featuredImage || portrait;

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-off-white">
      {heroImage && (
        <div className="absolute inset-0 opacity-20">
          <SanityImage
            image={heroImage}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <Container className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-4 text-text-primary">
          {name}
        </h1>
        {tagline && (
          <p className="text-xl md:text-2xl text-text-secondary font-light tracking-wide">
            {tagline}
          </p>
        )}
      </Container>
    </section>
  );
}
