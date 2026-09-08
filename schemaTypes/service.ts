import {DocumentIcon} from '@sanity/icons/Document'
import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Služba',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Názov',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Krátky popis',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(300).warning('Pre výpis služieb ho udržte stručný.'),
    }),
    defineField({
      name: 'image',
      title: 'Obrázok',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'status',
      title: 'Stav',
      type: 'string',
      initialValue: 'active',
      options: {
        list: [
          {title: 'Aktívna', value: 'active'},
          {title: 'Skrytá', value: 'hidden'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image', status: 'status'},
    prepare({title, media, status}) {
      return {
        title,
        media,
        subtitle: status === 'active' ? 'Aktívna' : 'Skrytá',
      }
    },
  },
})
