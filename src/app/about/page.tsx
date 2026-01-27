import { client } from '@/sanity/lib/client';
import { artistProfileQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import SanityImage from '@/components/shared/SanityImage';
import PortableText from '@/components/ui/PortableText';
import Button from '@/components/ui/Button';

export const revalidate = 60;

export default async function AboutPage() {
  const artist = await client.fetch(artistProfileQuery);

  if (!artist) {
    return (
      <Container className="section-padding">
        <p className="text-center text-text-secondary">Artist profile not found.</p>
      </Container>
    );
  }

  return (
    <Container className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[300px,1fr] gap-12 mb-16">
          {artist.portrait && (
            <div className="relative aspect-[3/4] bg-warm-gray">
              <SanityImage
                image={artist.portrait}
                alt={artist.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
              {artist.name}
            </h1>
            {artist.tagline && (
              <p className="text-xl text-text-secondary mb-6">{artist.tagline}</p>
            )}
            {artist.birthPlace && (
              <p className="text-text-secondary mb-2">Born: {artist.birthPlace}</p>
            )}
            {artist.currentLocation && (
              <p className="text-text-secondary mb-6">
                Based: {artist.currentLocation}
              </p>
            )}

            {artist.socialLinks && (
              <div className="flex gap-4 mt-6">
                {artist.socialLinks.instagram && (
                  <a
                    href={artist.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sea-deep hover:text-sea-medium transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {artist.socialLinks.facebook && (
                  <a
                    href={artist.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sea-deep hover:text-sea-medium transition-colors"
                  >
                    Facebook
                  </a>
                )}
                {artist.socialLinks.linkedin && (
                  <a
                    href={artist.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sea-deep hover:text-sea-medium transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {artist.biography && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-light mb-6">Biography</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={artist.biography} />
            </div>
          </div>
        )}

        {artist.artistStatement && (
          <div className="mb-16 bg-off-white p-8 md:p-12">
            <h2 className="text-3xl font-serif font-light mb-6">Artist Statement</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={artist.artistStatement} />
            </div>
          </div>
        )}

        {artist.cv && artist.cv.length > 0 && (
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif font-light">Curriculum Vitae</h2>
              {artist.cvPdf && (
                <Button href={artist.cvPdf.asset?.url} variant="outline">
                  Download PDF
                </Button>
              )}
            </div>

            <div className="space-y-12">
              {artist.cv.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-xl font-serif font-medium mb-4 pb-2 border-b border-warm-gray">
                    {section.sectionTitle}
                  </h3>
                  <div className="space-y-4">
                    {section.items?.map((item: any, itemIndex: number) => (
                      <div key={itemIndex} className="grid md:grid-cols-[120px,1fr] gap-4">
                        <div className="text-sea-deep font-medium">{item.year}</div>
                        <div className="text-text-secondary">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center pt-8 border-t border-warm-gray">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </div>
    </Container>
  );
}
