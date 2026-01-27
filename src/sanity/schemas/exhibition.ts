import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleChinese',
      title: 'Title (Chinese)',
      type: 'string',
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
      name: 'theme',
      title: 'Theme/Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Exhibition Type',
      type: 'string',
      options: {
        list: [
          { title: 'Biennale', value: 'biennale' },
          { title: 'Solo Exhibition', value: 'solo' },
          { title: 'Group Exhibition', value: 'group' },
          { title: 'Invitational', value: 'invitational' },
          { title: 'Art Fair', value: 'fair' },
          { title: 'Forum/Conference', value: 'forum' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'installationImages',
      title: 'Installation Views',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'artworks',
      title: 'Participating Artworks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artwork' }],
        },
      ],
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    }),
    defineField({
      name: 'catalogLink',
      title: 'Catalog/PDF Link',
      type: 'url',
    }),
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      city: 'city',
      media: 'posterImage',
    },
    prepare({ title, startDate, city, media }) {
      const year = startDate ? new Date(startDate).getFullYear() : '';
      return {
        title: title,
        subtitle: `${year} • ${city}`,
        media: media,
      };
    },
  },
});
