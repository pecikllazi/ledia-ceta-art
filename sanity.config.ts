import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: 'ledia-ceta-studio',
  title: 'Ledia Çeta - Art Portfolio',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S: any) =>
        S.list()
          .title('Content')
          .items([
            // Singletons
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.listItem()
              .title('Artist Profile')
              .child(
                S.document()
                  .schemaType('artist')
                  .documentId('artist')
              ),
            S.divider(),
            // Document lists
            S.documentTypeListItem('artwork').title('Artworks'),
            S.documentTypeListItem('exhibition').title('Exhibitions'),
            S.documentTypeListItem('news').title('News & Press'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
