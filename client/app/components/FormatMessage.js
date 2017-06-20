import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

/**
 * Custom localized messages
 */
class FormatMessage extends React.Component {
  static propTypes = {
    /** App locale */
    locale: PropTypes.string.isRequired,
    /** Messages */
    messages: PropTypes.object.isRequired
  }
  render() {
    const {locale, messages} = this.props
    const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]
    return(
      <span>{ messages[localeWithoutRegionCode] }</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormatMessage)
