import {defineArrayMember, defineField, defineType} from 'sanity'

const languages = [
  {title: 'English', value: 'en'},
  {title: 'Հայերեն', value: 'hy'},
]

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized string',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'object',
      name: 'localizedStringEntry',
      fields: [
        defineField({
          name: 'language',
          type: 'string',
          options: {list: languages, layout: 'radio'},
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'value',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      preview: {
        select: {title: 'value', subtitle: 'language'},
      },
    }),
  ],
  validation: (rule) =>
    rule.custom((entries) => {
      if (!Array.isArray(entries)) return 'Add an English and an Armenian translation.'

      const selectedLanguages = entries.flatMap((entry) => {
        if (
          typeof entry === 'object' &&
          entry !== null &&
          'language' in entry &&
          typeof entry.language === 'string'
        ) {
          return [entry.language]
        }

        return []
      })

      return (
        (selectedLanguages.length === 2 &&
          languages.every(({value}) => selectedLanguages.includes(value))) ||
        'Add exactly one translation for each language.'
      )
    }),
})
