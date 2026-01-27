import { client } from '@/sanity/lib/client';
import { allNewsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import NewsCard from '@/components/news/NewsCard';

export const revalidate = 60;

export default async function NewsPage() {
  const news = await client.fetch(allNewsQuery);

  return (
    <Container className="section-padding">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
          News & Press
        </h1>
        <p className="text-text-secondary">
          Latest updates, exhibitions, and media features.
        </p>
      </div>

      <div className="max-w-4xl">
        {news && news.length > 0 ? (
          <div className="space-y-6">
            {news.map((item: any) => (
              <NewsCard key={item._id} news={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-text-secondary py-12">
            No news items available.
          </p>
        )}
      </div>
    </Container>
  );
}
