import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Produkt',
  type: 'document',

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
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Popis',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'price',
      title: 'Cena',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),

    defineField({
      name: 'image',
      title: 'Obrázok',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'featured',
      title: 'Odporúčaný produkt',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'active',
      title: 'Aktívny',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
    },

    prepare({title, media, price}) {
      return {
        title,
        media,
        subtitle: typeof price === 'number' ? `${price.toFixed(2)} €` : 'Cena neuvedená',
      }
    },
  },
})
