import Container from '../ui/Container';
import Button from '../ui/Button';

interface ArtistIntroProps {
  biographyShort?: string;
}

export default function ArtistIntro({ biographyShort }: ArtistIntroProps) {
  if (!biographyShort) return null;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            About the Artist
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            {biographyShort}
          </p>
          <Button href="/about" variant="outline">
            Read Full Biography
          </Button>
        </div>
      </Container>
    </section>
  );
}
