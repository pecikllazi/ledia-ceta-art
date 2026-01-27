import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'artist',
  title: 'Artist Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g., "Visual Artist · Painting · Mixed Media · Installation"',
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'birthPlace',
      title: 'Birth Place',
      type: 'string',
    }),
    defineField({
      name: 'currentLocation',
      title: 'Current Location',
      type: 'string',
    }),
    defineField({
      name: 'biographyShort',
      title: 'Short Biography',
      type: 'text',
      rows: 4,
      description: 'For homepage and meta descriptions',
    }),
    defineField({
      name: 'biography',
      title: 'Full Biography',
      type: 'blockContent',
    }),
    defineField({
      name: 'artistStatement',
      title: 'Artist Statement',
      type: 'blockContent',
    }),
    defineField({
      name: 'cv',
      title: 'CV Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
              description: 'e.g., "Selected Exhibitions", "Education", "Awards"',
            },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'year', type: 'string', title: 'Year' },
                    { name: 'description', type: 'text', title: 'Description' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cvPdf',
      title: 'CV PDF Download',
      type: 'file',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'wechat', type: 'string', title: 'WeChat ID' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'portrait',
    },
  },
});
