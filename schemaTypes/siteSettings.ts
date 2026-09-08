import {CogIcon} from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Nastavenia webu',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'identity', title: 'Identita', default: true},
    {name: 'contact', title: 'Kontakt'},
    {name: 'navigation', title: 'Navigácia'},
    {name: 'social', title: 'Sociálne siete'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Názov webu',
      type: 'string',
      group: 'identity',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Krátky názov',
      type: 'string',
      description: 'Používa sa v navigácii a titulkoch stránok.',
      group: 'identity',
      validation: (rule) => rule.required().max(30),
    }),
    defineField({
      name: 'description',
      title: 'Popis webu',
      type: 'text',
      rows: 3,
      group: 'identity',
      validation: (rule) => rule.required().max(160).warning('Pre SEO ho udržte do 160 znakov.'),
    }),
    defineField({
      name: 'url',
      title: 'Verejná URL adresa',
      type: 'url',
      group: 'identity',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'string',
      group: 'identity',
      initialValue: 'sk_SK',
      validation: (rule) => rule.required().regex(/^[a-z]{2}_[A-Z]{2}$/),
    }),
    defineField({
      name: 'contact',
      title: 'Kontakt',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({
          name: 'email',
          title: 'E-mail',
          type: 'string',
          validation: (rule) => rule.required().email(),
        }),
        defineField({
          name: 'phone',
          title: 'Telefón',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Hlavná navigácia',
      type: 'array',
      group: 'navigation',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Názov', type: 'string', validation: (rule) => rule.required()}),
            defineField({
              name: 'href',
              title: 'Cesta',
              type: 'string',
              description: 'Interná cesta začínajúca lomkou, napr. /kontakt.',
              validation: (rule) => rule.required().regex(/^\//),
            }),
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'social',
      title: 'Sociálne siete',
      type: 'object',
      group: 'social',
      fields: [
        defineField({name: 'facebook', title: 'Facebook', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram', type: 'url'}),
        defineField({name: 'linkedin', title: 'LinkedIn', type: 'url'}),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Nastavenia webu'}),
  },
})
