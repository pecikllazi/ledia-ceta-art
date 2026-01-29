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
    <div className="min-h-screen pt-24 bg-paper">
      {/* Page Header */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-6">
              Events & Shows
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-ink">
              Exhibitions
            </h1>
            <p className="text-xl text-warm-gray leading-relaxed">
              A chronicle of shows, biennales, and collaborative projects
              around the world.
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="divider"></div>
        </div>
      </div>

      {/* Exhibitions List */}
      <Container className="section-padding">
        <div className="space-y-20">
          {years.map((year) => (
            <div key={year}>
              {/* Year Header */}
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-5xl md:text-6xl font-serif font-light text-ocean">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-cloud"></div>
              </div>

              {/* Exhibitions for this year */}
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
