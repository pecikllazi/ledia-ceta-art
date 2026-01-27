import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description (SEO)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Social Share Image',
      type: 'image',
    }),
    defineField({
      name: 'heroImage',
      title: 'Homepage Hero Image',
      type: 'image',
      description: 'Featured image for the homepage hero section. If not set, will use the first featured artwork.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'currentExhibition',
      title: 'Featured Exhibition (Homepage)',
      type: 'reference',
      to: [{ type: 'exhibition' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
});
