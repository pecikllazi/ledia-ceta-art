import { client } from '@/sanity/lib/client';
import { newsBySlugQuery, allNewsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import SanityImage from '@/components/shared/SanityImage';
import PortableText from '@/components/ui/PortableText';
import Button from '@/components/ui/Button';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 60;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const news = await client.fetch(allNewsQuery);
  return news.map((item: any) => ({
    slug: item.slug.current,
  }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const news = await client.fetch(newsBySlugQuery, { slug: params.slug });

  if (!news) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Container className="section-padding">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-text-muted">{formatDate(news.date)}</time>
            {news.type && (
              <span className="text-xs uppercase tracking-wider text-sea-deep">
                {news.type}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
            {news.title}
          </h1>

          {news.featuredImage && (
            <div className="relative aspect-video bg-warm-gray mb-8">
              <SanityImage
                image={news.featuredImage}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {news.content && (
          <div className="prose prose-lg max-w-none mb-8">
            <PortableText value={news.content} />
          </div>
        )}

        {news.externalLink && (
          <div className="mb-8">
            <a
              href={news.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sea-deep hover:text-sea-medium transition-colors underline"
            >
              Read full article on external site →
            </a>
          </div>
        )}

        {news.relatedExhibition && (
          <div className="bg-off-white p-6 mb-8">
            <p className="text-sm text-text-muted mb-2">Related Exhibition</p>
            <Link
              href={`/exhibitions/${news.relatedExhibition.slug.current}`}
              className="text-lg font-serif font-medium text-sea-deep hover:text-sea-medium transition-colors"
            >
              {news.relatedExhibition.title} →
            </Link>
          </div>
        )}

        <div className="pt-8 border-t border-warm-gray">
          <Button href="/news" variant="outline">
            Back to News
          </Button>
        </div>
      </article>
    </Container>
  );
}
