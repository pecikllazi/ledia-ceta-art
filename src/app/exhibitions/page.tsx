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
  const totalExhibitions = exhibitions.length;

  return (
    <div className="min-h-screen pt-24 bg-paper">
      {/* Page Header */}
      <div className="relative py-12 md:py-16 overflow-hidden border-b border-ink/10">
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            {/* Left - Title */}
            <div>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-4">
                Events & Shows
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-ink">
                Exhibitions
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed">
                A chronicle of shows, biennales, and collaborative projects
                around the world.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex gap-8 md:justify-end">
              <div className="text-center md:text-right">
                <p className="text-4xl md:text-5xl font-serif text-ink">{totalExhibitions}</p>
                <p className="text-xs uppercase tracking-wider text-stone">Exhibitions</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-4xl md:text-5xl font-serif text-ink">{years.length}</p>
                <p className="text-xs uppercase tracking-wider text-stone">Years Active</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Exhibitions List */}
      <Container className="py-12 md:py-16">
        <div className="space-y-16">
          {years.map((year) => (
            <div key={year}>
              {/* Year Header */}
              <div className="flex items-center gap-6 mb-8">
                <h2 className="text-4xl md:text-5xl font-serif font-light text-ink">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-ink/10"></div>
                <span className="text-sm text-stone">{groupedByYear[year].length} shows</span>
              </div>

              {/* Exhibitions for this year */}
              <div className="space-y-5">
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
