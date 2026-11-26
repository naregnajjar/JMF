import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

export const donorItem = defineType({
  name: 'donorItem',
  title: 'Donor',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'amount',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'location',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', amount: 'amount'},
    prepare: ({title, amount}) => ({
      title,
      subtitle: typeof amount === 'number' ? `$${amount}` : undefined,
    }),
  },
})
