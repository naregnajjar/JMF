import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const donorList = defineType({
  name: 'donorList',
  title: 'Donor List',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'donors',
      type: 'array',
      of: [defineArrayMember({type: 'donorItem'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Donor List'}),
  },
})
