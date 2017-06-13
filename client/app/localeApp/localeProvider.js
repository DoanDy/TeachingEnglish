import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
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

/**
 * Locale provider for the app
 */
class LocaleProvider extends React.Component {
  static propTypes = {
    /** Client locale */
    locale: PropTypes.string.isRequired
  }
  render() {
    const localeWithoutRegionCode = this.props.locale.toLowerCase().split(/[_-]+/)[0]
    const strings = localeData[localeWithoutRegionCode] || localeData[this.props.locale] || localeData.en
    return (
      <IntlProvider locale={this.props.locale} messages={strings}>
        {this.props.children}
      </IntlProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleProvider)
