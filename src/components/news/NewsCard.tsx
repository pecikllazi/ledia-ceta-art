import Link from 'next/link';
import SanityImage from '../shared/SanityImage';

interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  type?: string;
  excerpt?: string;
  featuredImage?: any;
}

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Link href={`/news/${news.slug.current}`} className="group">
      <article className="grid md:grid-cols-[250px,1fr] gap-6 pb-6 border-b border-warm-gray">
        {news.featuredImage && (
          <div className="relative aspect-video md:aspect-[4/3] bg-warm-gray overflow-hidden">
            <SanityImage
              image={news.featuredImage}
              alt={news.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div>
          <div className="flex items-center gap-3 mb-2">
            <time className="text-sm text-text-muted">{formatDate(news.date)}</time>
            {news.type && (
              <span className="text-xs uppercase tracking-wider text-sea-deep">
                {news.type}
              </span>
            )}
          </div>
          <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-sea-deep transition-colors">
            {news.title}
          </h3>
          {news.excerpt && (
            <p className="text-text-secondary line-clamp-3">{news.excerpt}</p>
          )}
        </div>
      </article>
    </Link>
  );
}
