import Link from 'next/link';
import SanityImage from '../shared/SanityImage';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Exhibition {
  _id: string;
  title: string;
  slug: { current: string };
  startDate: string;
  city: string;
}

interface Artwork {
  _id: string;
  title: string;
  titleChinese?: string;
  year: number;
  medium?: {
    name: string;
  };
  surface?: string;
  dimensions?: {
    width: number;
    height: number;
    depth?: number;
    unit: string;
  };
  mainImage: any;
  gallery?: any[];
  description?: string;
  descriptionChinese?: string;
  series?: string;
  available: boolean;
  price?: number;
  exhibitions?: Exhibition[];
}

interface ArtworkDetailProps {
  artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  const formatDimensions = () => {
    if (!artwork.dimensions) return null;
    const { width, height, depth, unit } = artwork.dimensions;
    if (depth) {
      return `${width} × ${height} × ${depth} ${unit}`;
    }
    return `${width} × ${height} ${unit}`;
  };

  return (
    <Container className="section-padding">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="relative aspect-[4/5] bg-sea-dark mb-4 rounded-lg overflow-hidden border border-sea-medium/30">
            <SanityImage
              image={artwork.mainImage}
              alt={artwork.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {artwork.gallery && artwork.gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {artwork.gallery.map((image, index) => (
                <div key={index} className="relative aspect-square bg-sea-dark rounded-lg overflow-hidden border border-sea-medium/30">
                  <SanityImage
                    image={image}
                    alt={`${artwork.title} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-serif font-light mb-2 text-white">{artwork.title}</h1>
          {artwork.titleChinese && (
            <p className="text-2xl text-sea-pale/70 mb-6">{artwork.titleChinese}</p>
          )}

          <div className="space-y-3 mb-8 pb-8 border-b border-sea-medium/30">
            <div className="flex justify-between">
              <span className="text-sea-pale/70">Year</span>
              <span className="font-medium text-white">{artwork.year}</span>
            </div>
            {artwork.medium && (
              <div className="flex justify-between">
                <span className="text-sea-pale/70">Medium</span>
                <span className="font-medium text-white">{artwork.medium.name}</span>
              </div>
            )}
            {artwork.surface && (
              <div className="flex justify-between">
                <span className="text-sea-pale/70">Surface</span>
                <span className="font-medium text-white">{artwork.surface}</span>
              </div>
            )}
            {artwork.dimensions && (
              <div className="flex justify-between">
                <span className="text-sea-pale/70">Dimensions</span>
                <span className="font-medium text-white">{formatDimensions()}</span>
              </div>
            )}
            {artwork.series && (
              <div className="flex justify-between">
                <span className="text-sea-pale/70">Series</span>
                <span className="font-medium text-white">{artwork.series}</span>
              </div>
            )}
          </div>

          {artwork.description && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-medium mb-3 text-sea-light">Description</h2>
              <p className="text-sea-pale/80 leading-relaxed">{artwork.description}</p>
            </div>
          )}

          {artwork.exhibitions && artwork.exhibitions.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-medium mb-3 text-sea-light">Exhibitions</h2>
              <ul className="space-y-2">
                {artwork.exhibitions.map((exhibition) => (
                  <li key={exhibition._id}>
                    <Link
                      href={`/exhibitions/${exhibition.slug.current}`}
                      className="text-sea-light hover:text-white transition-colors"
                    >
                      {exhibition.title} - {exhibition.city} (
                      {new Date(exhibition.startDate).getFullYear()})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4">
            {artwork.available && (
              <Button href="/contact" variant="primary">
                Inquire About This Work
              </Button>
            )}
            <Button href="/works" variant="outline">
              Back to Works
            </Button>
          </div>

          {artwork.available && artwork.price && (
            <p className="mt-4 text-sm text-sea-pale/60">
              Available for purchase • USD ${artwork.price.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
