import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

/**
 * Store provider for the app
 */
export default class StoreProvider extends React.Component {
  static propTypes = {
    /** Client store */
    store: PropTypes.object.isRequired
  }
  render() {
    return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    )
  }
}
