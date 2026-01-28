import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'artwork',
  title: 'Artwork',
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
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(1990).max(2030),
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'reference',
      to: [{ type: 'mediumType' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'surface',
      title: 'Surface',
      type: 'string',
      description: 'e.g., Silk, Canvas, Paper',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        { name: 'width', type: 'number', title: 'Width' },
        { name: 'height', type: 'number', title: 'Height' },
        { name: 'depth', type: 'number', title: 'Depth (for installations)' },
        {
          name: 'unit',
          type: 'string',
          title: 'Unit',
          options: { list: ['cm', 'in', 'm'] },
          initialValue: 'cm',
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'descriptionChinese',
      title: 'Description (Chinese)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'exhibitions',
      title: 'Exhibited At',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'exhibition' }],
        },
      ],
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'string',
      description: 'e.g., Cosmic Series, Sea Series',
    }),
    defineField({
      name: 'available',
      title: 'Available for Sale',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      hidden: ({ document }) => !document?.available,
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Year, New',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      medium: 'medium',
      media: 'mainImage',
    },
    prepare({ title, year, medium, media }) {
      return {
        title: title,
        subtitle: `${year} • ${medium}`,
        media: media,
      };
    },
  },
});
