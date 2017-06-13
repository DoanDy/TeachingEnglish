import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/**
 * React container for a Localized Textillate
 */
export default class LocalizedTextillate extends React.Component {
  static contextTypes = {
    /** Localization provider */
    intl: PropTypes.object.isRequired
  }
  static propTypes = {
    /** Localization id */
    id: PropTypes.string.isRequired,
    /** Animation parameters for animation in */
    inAnimation: PropTypes.object.isRequired,
    /** Animation parameters for animation out */
    out: PropTypes.object
  }
  componentDidMount() {
    $(this.refs.tlt).textillate({
      in: this.props.inAnimation,
      out: this.props.out
    })
  }
  render() {
    const text = this.context.intl.formatMessage({ id: this.props.id })
    return (
      <span ref="tlt">
        {text}
      </span>
    )
  }
}
