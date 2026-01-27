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
    <Container className="section-padding">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
          Exhibitions
        </h1>
        <p className="text-text-secondary">
          A chronicle of shows, biennales, and collaborative projects.
        </p>
      </div>

      <div className="space-y-12">
        {years.map((year) => (
          <div key={year}>
            <h2 className="text-3xl font-serif font-light mb-6 pb-2 border-b-2 border-sea-deep">
              {year}
            </h2>
            <div className="space-y-6">
              {groupedByYear[year].map((exhibition: any) => (
                <ExhibitionCard key={exhibition._id} exhibition={exhibition} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
