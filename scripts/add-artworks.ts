import dotenv from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@sanity/client';
import { createReadStream, readdirSync } from 'fs';

// Load environment variables from .env.local
dotenv.config({ path: resolve(__dirname, '../.env.local') });

// Create Sanity client with environment variables
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Artwork naming based on image numbers - these are sea-themed paintings
const acrylicArtworkNames: Record<string, { title: string; description: string; series?: string }> = {
  'IMG_2075': { title: 'City by the Sea', description: 'Abstract cityscape reflected in turquoise waters, capturing the harmony between urban life and the ocean.', series: 'Urban Series' },
  'IMG_2076': { title: 'Harbor Dreams', description: 'A dreamy interpretation of a coastal city, where buildings dance with their reflections.', series: 'Urban Series' },
  'IMG_2081': { title: 'Adriatic Depths I', description: 'Deep blue exploration of the underwater world, where light meets the ocean floor.', series: 'Sea Series' },
  'IMG_2082': { title: 'Adriatic Depths II', description: 'Continuation of the underwater journey, revealing hidden treasures beneath the waves.', series: 'Sea Series' },
  'IMG_2092': { title: 'Ocean Whispers', description: 'The sea speaks in shades of blue and green, carrying memories of distant shores.', series: 'Sea Series' },
  'IMG_2095': { title: 'Autumn Rain', description: 'A vibrant red leaf floats on rain-soaked waters, a meditation on seasons and change.', series: 'Nature Series' },
  'IMG_2098': { title: 'Seabed Sanctuary', description: 'An underwater sanctuary where marine life thrives in emerald depths.', series: 'Sea Series' },
  'IMG_2102': { title: 'Tidal Memory', description: 'Waves carry the memory of a thousand journeys, painted in sweeping strokes of blue.', series: 'Sea Series' },
  'IMG_2104': { title: 'Coastal Reverie', description: 'A contemplative view of where land meets sea, bathed in soft morning light.', series: 'Sea Series' },
  'IMG_2105': { title: 'Deep Blue Meditation', description: 'The infinite depth of the ocean invites quiet reflection and inner peace.', series: 'Sea Series' },
  'IMG_2108': { title: 'Storm Approaching', description: 'Dark clouds gather over turbulent waters, nature\'s power made visible.', series: 'Sea Series' },
  'IMG_2111': { title: 'Beneath the Surface', description: 'What lies beneath the waves reveals itself in layers of color and light.', series: 'Sea Series' },
  'IMG_2114': { title: 'Azure Dreams', description: 'Pure blue horizons stretch endlessly, a dream of the perfect sea.', series: 'Sea Series' },
  'IMG_2115': { title: 'Marine Tapestry', description: 'The sea weaves its own tapestry of colors, textures, and life.', series: 'Sea Series' },
  'IMG_2118': { title: 'Twilight Waters', description: 'As day fades to night, the sea transforms into a mirror of the sky.', series: 'Sea Series' },
  'IMG_2120': { title: 'Kelp Forest', description: 'Green tendrils of seaweed create an underwater forest of mystery.', series: 'Sea Series' },
  'IMG_2121': { title: 'Wave Symphony', description: 'Each wave plays its part in the eternal symphony of the ocean.', series: 'Sea Series' },
  'IMG_2124': { title: 'Emerald Tide', description: 'Rich emerald greens dominate this study of coastal waters.', series: 'Sea Series' },
  'IMG_2126': { title: 'Ocean Energy', description: 'The raw power of the sea captured in dynamic brushstrokes.', series: 'Sea Series' },
  'IMG_2128': { title: 'Calm Before Storm', description: 'A deceptively peaceful sea holds the promise of coming change.', series: 'Sea Series' },
  'IMG_2130': { title: 'Underwater Light', description: 'Sunbeams pierce through the water, creating dancing patterns on the seabed.', series: 'Sea Series' },
  'IMG_2132': { title: 'Sea Foam Dreams', description: 'Where waves break, foam creates ephemeral art on the water\'s surface.', series: 'Sea Series' },
  'IMG_2136': { title: 'Coastal Harmony', description: 'Land and sea exist in perfect balance in this serene coastal scene.', series: 'Sea Series' },
  'IMG_2138': { title: 'Deep Current', description: 'Invisible currents shape the underwater world in mysterious ways.', series: 'Sea Series' },
  'IMG_2139': { title: 'Morning Tide', description: 'The first light of day illuminates gentle morning waves.', series: 'Sea Series' },
  'IMG_2141': { title: 'Ocean Solitude', description: 'A meditation on the vastness and solitude of the open sea.', series: 'Sea Series' },
  'IMG_2143': { title: 'Reef Colors', description: 'Vibrant colors of the reef shimmer beneath crystal waters.', series: 'Sea Series' },
  'IMG_2145': { title: 'Metropolitan Blues', description: 'Urban towers rise against a grey sky, their windows reflecting scattered light.', series: 'Urban Series' },
  'IMG_2147': { title: 'Submerged Memories', description: 'Memories sink and settle like treasures on the ocean floor.', series: 'Sea Series' },
  'IMG_2149': { title: 'Aquatic Abstract I', description: 'Pure abstraction inspired by the ever-changing nature of water.', series: 'Sea Series' },
  'IMG_2151': { title: 'Aquatic Abstract II', description: 'Continuing the exploration of water\'s infinite variations.', series: 'Sea Series' },
  'IMG_2153': { title: 'Silver Seas', description: 'Metallic tones dominate this study of light on water.', series: 'Sea Series' },
  'IMG_2155': { title: 'Coastal Winds', description: 'Wind sweeps across the water, leaving trails of movement.', series: 'Sea Series' },
  'IMG_2156': { title: 'Teal Depths', description: 'Rich teal colors create a sense of infinite underwater space.', series: 'Sea Series' },
  'IMG_2159': { title: 'Ocean Rhythms', description: 'The rhythmic pulse of the sea translated into visual form.', series: 'Sea Series' },
  'IMG_2161': { title: 'Sea Glass', description: 'Smooth and translucent like sea-worn glass, colors blend softly.', series: 'Sea Series' },
  'IMG_2163': { title: 'Horizon Line', description: 'Where sky meets sea, infinity begins.', series: 'Sea Series' },
  'IMG_2164': { title: 'Cerulean Dreams', description: 'Deep cerulean blue dominates this dreamlike seascape.', series: 'Sea Series' },
  'IMG_2167': { title: 'Undertow', description: 'The powerful pull of the undertow made visible in swirling colors.', series: 'Sea Series' },
  'IMG_2170': { title: 'Red Poppies', description: 'Vibrant red poppies burst with life against a soft green background.', series: 'Floral Series' },
  'IMG_2172': { title: 'Wave Crest', description: 'The moment before a wave breaks, frozen in paint.', series: 'Sea Series' },
  'IMG_2175': { title: 'Marine Layers', description: 'Layers of blue and green create depth and dimension.', series: 'Sea Series' },
  'IMG_2177': { title: 'Under the Sea', description: 'A journey to the depths where light barely reaches.', series: 'Sea Series' },
  'IMG_2179': { title: 'Coastal Mist', description: 'Morning mist softens the boundary between sea and sky.', series: 'Sea Series' },
  'IMG_2182': { title: 'Flowing Waters', description: 'Water flows eternally, carrying color and light.', series: 'Sea Series' },
  'IMG_2185': { title: 'Abstract Seascape', description: 'The essence of the sea distilled into pure abstraction.', series: 'Sea Series' },
  'IMG_2187': { title: 'Turquoise Bay', description: 'Crystal clear turquoise waters of a secluded bay.', series: 'Sea Series' },
  'IMG_2190': { title: 'Ocean Meditation', description: 'A contemplative piece inviting peaceful reflection.', series: 'Sea Series' },
  'IMG_2192': { title: 'Seascape at Dusk', description: 'The sea transforms as daylight fades into evening.', series: 'Sea Series' },
  'IMG_2194': { title: 'Adriatic Blue', description: 'The distinctive blue of the Adriatic Sea, homeland waters.', series: 'Sea Series' },
  'IMG_2197': { title: 'Marine Abstract', description: 'Abstract interpretation of marine life and movement.', series: 'Sea Series' },
  'IMG_2198': { title: 'Deep Waters', description: 'Venturing into the deepest waters where darkness meets color.', series: 'Sea Series' },
  'IMG_2202': { title: 'Crimson Poppies', description: 'Bold red poppies in a turquoise vase, a celebration of color.', series: 'Floral Series' },
  'IMG_2203': { title: 'Tidal Patterns', description: 'The tide leaves its signature patterns on the shore.', series: 'Sea Series' },
  'IMG_2205': { title: 'Ocean Spirit', description: 'The spirit of the ocean expressed through color and form.', series: 'Sea Series' },
  'IMG_2207': { title: 'Coral Dreams', description: 'Dreams of coral reefs and underwater gardens.', series: 'Sea Series' },
  'IMG_2209': { title: 'Seaside Impression', description: 'An impressionistic view of life by the sea.', series: 'Sea Series' },
  'IMG_2214': { title: 'Small Seascape', description: 'A intimate study of water and light.', series: 'Sea Series' },
  'IMG_2215': { title: 'Coastal Study', description: 'A study of the ever-changing coastal environment.', series: 'Sea Series' },
  'IMG_2217': { title: 'Sea Breeze', description: 'The freshness of sea air captured in paint.', series: 'Sea Series' },
  'IMG_2219': { title: 'Water\'s Edge', description: 'Where water meets land, stories unfold.', series: 'Sea Series' },
  'IMG_2221': { title: 'Maritime Blue', description: 'Rich maritime blue dominates this powerful seascape.', series: 'Sea Series' },
  'IMG_2222': { title: 'Garden Roses', description: 'Delicate pink roses captured in soft, romantic light.', series: 'Floral Series' },
  'IMG_2223': { title: 'Evening Sea', description: 'The sea at evening, mysterious and deep.', series: 'Sea Series' },
  'IMG_2225': { title: 'Flowing Abstract', description: 'Abstract forms flow like water across the canvas.', series: 'Sea Series' },
  'IMG_2228': { title: 'Albanian Waters', description: 'A tribute to the beloved waters of Albania.', series: 'Sea Series' },
};

async function getMediumTypeId(mediumName: string): Promise<string | null> {
  const query = `*[_type == "mediumType" && name == $name][0]._id`;
  const result = await client.fetch(query, { name: mediumName });
  return result;
}

async function createMediumTypeIfNeeded(name: string, slug: string): Promise<string> {
  // Check if it exists
  let id = await getMediumTypeId(name);
  if (id) return id;

  // Create it
  const result = await client.create({
    _type: 'mediumType',
    name: name,
    slug: { _type: 'slug', current: slug },
    order: name === 'Acrylic on Canvas' ? 1 : 2,
  });
  return result._id;
}

async function uploadImage(filePath: string): Promise<any> {
  const imageAsset = await client.assets.upload('image', createReadStream(filePath), {
    filename: filePath.split('/').pop(),
  });
  return imageAsset;
}

async function addArtworks() {
  console.log('Starting to add artworks to Sanity...\n');

  // First, ensure medium types exist
  console.log('Checking/creating medium types...');
  const acrylicMediumId = await createMediumTypeIfNeeded('Acrylic on Canvas', 'acrylic-on-canvas');
  const silkMediumId = await createMediumTypeIfNeeded('Watercolours on Silk', 'watercolours-on-silk');
  console.log(`✓ Acrylic on Canvas medium ID: ${acrylicMediumId}`);
  console.log(`✓ Watercolours on Silk medium ID: ${silkMediumId}\n`);

  // Process Acrylic on Canvas folder
  const acrylicFolder = '/Users/pecikllazi/Documents/Dokumente Ledia/ACRYLIC ON CANVAS';
  const acrylicFiles = readdirSync(acrylicFolder).filter(f => f.endsWith('.JPG') || f.endsWith('.jpg'));

  console.log(`Found ${acrylicFiles.length} acrylic paintings to upload...\n`);

  let order = 1;
  for (const file of acrylicFiles) {
    const imageName = file.replace('.JPG', '').replace('.jpg', '');
    const artworkInfo = acrylicArtworkNames[imageName] || {
      title: `Untitled ${imageName}`,
      description: 'An acrylic painting exploring themes of sea and nature.',
      series: 'Sea Series'
    };

    try {
      console.log(`Uploading: ${artworkInfo.title}...`);

      // Upload image
      const imageAsset = await uploadImage(`${acrylicFolder}/${file}`);

      // Create artwork document
      const artwork = await client.create({
        _type: 'artwork',
        title: artworkInfo.title,
        slug: { _type: 'slug', current: artworkInfo.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') },
        year: 2024,
        medium: { _type: 'reference', _ref: acrylicMediumId },
        surface: 'Canvas',
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id },
        },
        description: artworkInfo.description,
        series: artworkInfo.series,
        available: true,
        featured: order <= 6, // First 6 are featured
        order: order,
      });

      console.log(`✓ Added: ${artworkInfo.title} (ID: ${artwork._id})\n`);
      order++;
    } catch (error) {
      console.error(`✗ Error adding ${artworkInfo.title}:`, error);
    }
  }

  // Process Silk Paintings folder
  const silkFolder = '/Users/pecikllazi/Documents/Dokumente Ledia/SILK PAINTINGS';
  const silkFiles = readdirSync(silkFolder).filter(f => f.endsWith('.JPG') || f.endsWith('.jpg'));

  console.log(`\nFound ${silkFiles.length} silk paintings to upload...\n`);

  for (const file of silkFiles) {
    const title = file.replace('.JPG', '').replace('.jpg', '');

    try {
      console.log(`Uploading: ${title}...`);

      // Upload image
      const imageAsset = await uploadImage(`${silkFolder}/${file}`);

      // Create artwork document
      const artwork = await client.create({
        _type: 'artwork',
        title: title,
        slug: { _type: 'slug', current: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') },
        year: 2025,
        medium: { _type: 'reference', _ref: silkMediumId },
        surface: 'Silk',
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id },
        },
        description: 'A cosmic exploration on silk, blending vibrant colors in a celestial dance of light and energy.',
        series: 'Cosmic Series',
        available: true,
        featured: true,
        order: order,
      });

      console.log(`✓ Added: ${title} (ID: ${artwork._id})\n`);
      order++;
    } catch (error) {
      console.error(`✗ Error adding ${title}:`, error);
    }
  }

  console.log('\nFinished adding all artworks!');
}

// Run the script
addArtworks()
  .then(() => {
    console.log('\nAll done! Check your Sanity Studio to see the artworks.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
