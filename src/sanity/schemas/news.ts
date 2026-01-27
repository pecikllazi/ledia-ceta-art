import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'news',
  title: 'News & Press',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Exhibition Announcement', value: 'exhibition' },
          { title: 'Press Feature', value: 'press' },
          { title: 'Interview', value: 'interview' },
          { title: 'Conference', value: 'conference' },
          { title: 'Award', value: 'award' },
          { title: 'General Update', value: 'update' },
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary for listing pages',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Link to external article or source',
    }),
    defineField({
      name: 'relatedExhibition',
      title: 'Related Exhibition',
      type: 'reference',
      to: [{ type: 'exhibition' }],
    }),
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      type: 'type',
      media: 'featuredImage',
    },
    prepare({ title, date, type, media }) {
      return {
        title: title,
        subtitle: `${type} • ${date}`,
        media: media,
      };
    },
  },
});
