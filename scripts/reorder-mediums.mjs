import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function reorderMediums() {
  // Get all medium types
  const mediums = await client.fetch('*[_type == "mediumType"]{ _id, name, order }');
  console.log('Current mediums:', mediums);

  // Update order: Acrylic on Canvas = 1, Watercolours on Silk = 2
  for (const m of mediums) {
    let newOrder = m.order;
    if (m.name.toLowerCase().includes('acrylic')) {
      newOrder = 1;
    } else if (m.name.toLowerCase().includes('silk') || m.name.toLowerCase().includes('watercolour')) {
      newOrder = 2;
    }

    if (newOrder !== m.order) {
      await client.patch(m._id).set({ order: newOrder }).commit();
      console.log('Updated:', m.name, '-> order:', newOrder);
    }
  }

  console.log('Done!');
}

reorderMediums().catch(console.error);
