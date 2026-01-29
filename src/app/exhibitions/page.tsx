import { client } from '@/sanity/lib/client';
import { allExhibitionsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import ExhibitionCard from '@/components/exhibition/ExhibitionCard';

export const revalidate = 60;

export default async function ExhibitionsPage() {
  const exhibitions = await client.fetch(allExhibitionsQuery);

  // Group by year
  const groupedByYear = exhibitions.reduce((acc: any, exhibition: any) => {
    const year = new Date(exhibition.startDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(exhibition);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sea-medium via-sea-dark to-sea-deep py-16 md:py-24 border-b border-sea-medium/30">
        <Container>
          <p className="text-sea-light text-sm uppercase tracking-[0.2em] mb-3 font-medium">
            Exhibitions & Events
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">
            Exhibitions
          </h1>
          <p className="text-sea-pale/80 text-lg max-w-2xl">
            A chronicle of shows, biennales, and collaborative projects
            around the world.
          </p>
        </Container>
      </div>

      <Container className="section-padding">
        <div className="space-y-16">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-serif font-light text-sea-light">
                  {year}
                </h2>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-sea-medium to-transparent"></div>
              </div>
              <div className="space-y-6">
                {groupedByYear[year].map((exhibition: any) => (
                  <ExhibitionCard key={exhibition._id} exhibition={exhibition} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
