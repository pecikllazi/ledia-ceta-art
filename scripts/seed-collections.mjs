/**
 * Sanity Migration Script
 *
 * This script creates collections and updates artwork statuses.
 *
 * Run with: node scripts/seed-collections.mjs
 *
 * Requirements:
 * - SANITY_TOKEN environment variable (with write permissions)
 * - NEXT_PUBLIC_SANITY_PROJECT_ID environment variable
 * - NEXT_PUBLIC_SANITY_DATASET environment variable
 */

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET');
  process.exit(1);
}

if (!token) {
  console.error('Missing SANITY_API_TOKEN - you need a write token to run this script');
  console.error('Create one at: https://www.sanity.io/manage/project/' + projectId + '/api#tokens');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Collections to create
const collections = [
  {
    _id: 'collection-sea',
    _type: 'collection',
    title: 'Sea Collection',
    slug: { _type: 'slug', current: 'sea-collection' },
    description: 'A collection of paintings inspired by the sea, capturing its movement, colors, and spirit.',
    order: 1,
    featured: true,
  },
  {
    _id: 'collection-flowers',
    _type: 'collection',
    title: 'Flower Collection',
    slug: { _type: 'slug', current: 'flower-collection' },
    description: 'Vibrant floral paintings celebrating the beauty of nature.',
    order: 2,
    featured: true,
  },
];

// Keywords to match artworks to collections
const seaKeywords = ['sea', 'ocean', 'water', 'wave', 'marine', 'adriatic', 'coastal', 'tide', 'underwater', 'reef', 'depths', 'aquatic', 'harbor', 'bay'];
const flowerKeywords = ['poppy', 'poppies', 'flower', 'floral', 'rose', 'roses', 'garden', 'bloom'];

async function main() {
  console.log('Starting migration...\n');

  // Step 1: Create collections
  console.log('1. Creating collections...');
  for (const collection of collections) {
    try {
      await client.createOrReplace(collection);
      console.log(`   ✓ Created collection: ${collection.title}`);
    } catch (error) {
      console.error(`   ✗ Error creating ${collection.title}:`, error.message);
    }
  }

  // Step 2: Get all artworks
  console.log('\n2. Fetching artworks...');
  const artworks = await client.fetch(`*[_type == "artwork"] {
    _id,
    title,
    medium-> {
      name,
      slug
    }
  }`);
  console.log(`   Found ${artworks.length} artworks`);

  // Step 3: Assign artworks to collections based on title keywords and update status
  console.log('\n3. Updating artworks...');

  let soldCount = 0;
  const maxSold = 4;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const titleLower = artwork.title?.toLowerCase() || '';

    // Determine collection based on title keywords
    let collectionRef = null;

    // Check for flower-related keywords
    if (flowerKeywords.some(keyword => titleLower.includes(keyword))) {
      collectionRef = { _type: 'reference', _ref: 'collection-flowers' };
    }
    // Check for sea-related keywords
    else if (seaKeywords.some(keyword => titleLower.includes(keyword))) {
      collectionRef = { _type: 'reference', _ref: 'collection-sea' };
    }

    // Determine status: first 4 artworks are sold, rest are available
    const status = soldCount < maxSold ? 'sold' : 'available';
    if (status === 'sold') soldCount++;

    try {
      const patch = client.patch(artwork._id);

      if (collectionRef) {
        patch.set({ collection: collectionRef });
      }
      patch.set({ status });

      await patch.commit();
      const collectionName = collectionRef?._ref === 'collection-sea' ? 'Sea Collection' :
                            collectionRef?._ref === 'collection-flowers' ? 'Flower Collection' : null;
      console.log(`   ✓ Updated: ${artwork.title} (status: ${status}${collectionName ? `, → ${collectionName}` : ''})`);
    } catch (error) {
      console.error(`   ✗ Error updating ${artwork.title}:`, error.message);
    }
  }

  console.log('\n✓ Migration complete!');
  console.log(`  - ${collections.length} collections created`);
  console.log(`  - ${artworks.length} artworks updated`);
  console.log(`  - ${maxSold} artworks marked as sold`);
}

main().catch(console.error);
