const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const NextI18Next = require('next-i18next').default

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en', 'vi'],
  localePath: 'src/static/locales',
  localeSubpaths: 'none',
})

NextI18NextInstance.i18n.languages = 'en'

module.exports = NextI18NextInstance
