import { client } from '@/sanity/lib/client';
import { homepageQuery } from '@/sanity/lib/queries';
import Hero from '@/components/home/Hero';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import CurrentExhibition from '@/components/home/CurrentExhibition';
import ArtistIntro from '@/components/home/ArtistIntro';

export const revalidate = 60;

export default async function HomePage() {
  const data = await client.fetch(homepageQuery);

  const heroImage = data.settings?.heroImage || data.featuredWorks?.[0]?.mainImage;

  return (
    <>
      <Hero
        name={data.artist?.name || 'Ledia Çeta'}
        tagline={data.artist?.tagline || 'Visual Artist'}
        portrait={data.artist?.portrait}
        featuredImage={heroImage}
      />
      <FeaturedWorks artworks={data.featuredWorks || []} />
      <CurrentExhibition exhibition={data.settings?.currentExhibition} />
      <ArtistIntro biographyShort={data.artist?.biographyShort} />
    </>
  );
}
