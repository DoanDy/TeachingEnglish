import React from 'react'
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import vi from 'react-intl/locale-data/vi'
import enData from './locales/en.json'
import viData from './locales/vi.json'

// the app provides these languages
addLocaleData([...en, ...vi])
// locale data provided in locales
const localeData = {
  en: enData,
  vi: viData
}
// Get client side locale and get cooresponding locale data
const locale = navigator.userLanguage || navigator.language
const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]
const strings = localeData[localeWithoutRegionCode] || localeData[locale] || localeData.en

export default class LocaleProvider extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale} messages={strings}>
        {this.props.children}
      </IntlProvider>
    )
  }
}
