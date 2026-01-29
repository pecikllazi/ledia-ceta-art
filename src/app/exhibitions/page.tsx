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
    <div className="min-h-screen pt-24">
      {/* Page Header */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-biolum-teal/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-biolum-cyan/5 rounded-full blur-[150px]"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-biolum-cyan/80 border border-biolum-cyan/20 rounded-full backdrop-blur-sm mb-6">
              Events & Shows
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6">
              <span className="text-pearl">Exhi</span>
              <span className="text-gradient-ocean">bitions</span>
            </h1>
            <p className="text-xl text-pearl-muted leading-relaxed">
              A chronicle of shows, biennales, and collaborative projects
              around the world.
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="divider-glow"></div>
        </div>
      </div>

      {/* Exhibitions List */}
      <Container className="section-padding">
        <div className="space-y-20">
          {years.map((year) => (
            <div key={year}>
              {/* Year Header */}
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-5xl md:text-6xl font-display font-light text-gradient-ocean">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-biolum-cyan/50 to-transparent"></div>
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
