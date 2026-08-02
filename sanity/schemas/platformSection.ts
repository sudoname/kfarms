import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'platformSection',
  title: 'Platform Section',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Section ID',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      description: 'Unique identifier (e.g., agriculture, palm, livestock)',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Sprout, TreeDeciduous, Beef)',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Detail Title' },
            { name: 'description', type: 'text', title: 'Detail Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short metrics displayed as badges',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'id.current',
    },
  },
})
