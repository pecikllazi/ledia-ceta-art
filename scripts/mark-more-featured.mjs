import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const unfeatured = await client.fetch(
  `*[_type == "artwork" && (featured != true)] | order(order asc) [0...2] { _id, title }`
);

console.log('Marking as featured:', unfeatured.map(a => a.title));

for (const artwork of unfeatured) {
  await client.patch(artwork._id).set({ featured: true }).commit();
  console.log('✓', artwork.title);
}

console.log('Done!');
