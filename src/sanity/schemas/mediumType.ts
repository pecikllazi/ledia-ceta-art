import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mediumType',
  title: 'Medium Types',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Medium Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Watercolours on Silk", "Acrylic on Canvas"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in the filter list',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      order: 'order',
    },
    prepare({ title, order }) {
      return {
        title,
        subtitle: `Order: ${order || 0}`,
      };
    },
  },
});
