import { groq } from 'next-sanity';

// Artworks
export const allArtworksQuery = groq`
  *[_type == "artwork"] | order(order asc, year desc) {
    _id,
    title,
    slug,
    year,
    medium,
    mainImage,
    featured,
    available
  }
`;

export const featuredArtworksQuery = groq`
  *[_type == "artwork" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    year,
    medium,
    mainImage
  }
`;

export const artworkBySlugQuery = groq`
  *[_type == "artwork" && slug.current == $slug][0] {
    _id,
    title,
    titleChinese,
    slug,
    year,
    medium,
    surface,
    dimensions,
    mainImage,
    gallery,
    description,
    descriptionChinese,
    series,
    available,
    price,
    exhibitions[]-> {
      _id,
      title,
      slug,
      startDate,
      city
    }
  }
`;

export const artworksByMediumQuery = groq`
  *[_type == "artwork" && medium == $medium] | order(year desc) {
    _id,
    title,
    slug,
    year,
    medium,
    mainImage,
    available
  }
`;

export const mediumTypesQuery = groq`
  *[_type == "mediumType"] | order(order asc) {
    _id,
    name,
    slug
  }
`;

// Exhibitions
export const allExhibitionsQuery = groq`
  *[_type == "exhibition"] | order(startDate desc) {
    _id,
    title,
    slug,
    theme,
    startDate,
    endDate,
    venue,
    city,
    country,
    type,
    posterImage
  }
`;

export const exhibitionBySlugQuery = groq`
  *[_type == "exhibition" && slug.current == $slug][0] {
    _id,
    title,
    titleChinese,
    slug,
    theme,
    startDate,
    endDate,
    venue,
    city,
    country,
    type,
    description,
    posterImage,
    installationImages,
    artworks[]-> {
      _id,
      title,
      slug,
      mainImage,
      year
    },
    externalLink,
    catalogLink
  }
`;

export const currentExhibitionQuery = groq`
  *[_type == "exhibition" && endDate >= now()] | order(startDate asc) [0] {
    _id,
    title,
    slug,
    theme,
    startDate,
    endDate,
    venue,
    city,
    posterImage
  }
`;

// News
export const allNewsQuery = groq`
  *[_type == "news"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    type,
    excerpt,
    featuredImage
  }
`;

export const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    type,
    content,
    featuredImage,
    externalLink,
    relatedExhibition-> {
      title,
      slug
    }
  }
`;

// Artist/About
export const artistProfileQuery = groq`
  *[_type == "artist"][0] {
    name,
    tagline,
    portrait,
    birthPlace,
    currentLocation,
    biographyShort,
    biography,
    artistStatement,
    cv,
    cvPdf {
      asset-> {
        url
      }
    },
    socialLinks
  }
`;

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    ogImage,
    heroImage,
    contactEmail,
    contactPhone,
    location,
    footerText,
    currentExhibition-> {
      _id,
      title,
      slug,
      theme,
      startDate,
      endDate,
      venue,
      city,
      posterImage
    }
  }
`;

// Homepage
export const homepageQuery = groq`
{
  "settings": *[_type == "siteSettings"][0] {
    siteName,
    heroImage,
    currentExhibition-> {
      _id,
      title,
      slug,
      theme,
      startDate,
      endDate,
      venue,
      city,
      posterImage
    }
  },
  "artist": *[_type == "artist"][0] {
    name,
    tagline,
    biographyShort,
    portrait
  },
  "featuredWorks": *[_type == "artwork" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    year,
    medium,
    mainImage
  }
}
`;
