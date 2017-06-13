import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {changeLocale} from '../store/actions/locale.js'

/**
 * Button for changing app locale
 */
class LocaleButton extends React.Component {
  static propTypes = {
    /** Locale to toggle to */
    locale: PropTypes.string.isRequired,
    /** Class to be applied to component */
    className: PropTypes.string
  }
  /**
   * Handles click event
   * @param {SyntheticEvent} e
   * @public
   */
  handleClick(e) {
    e.preventDefault()
    this.props.onClick(this.props.locale)
  }
  render() {
    return (
      <div className={this.props.className} onClick={(e) => this.handleClick(e)}>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (locale) => {
      dispatch(changeLocale(locale))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleButton)
