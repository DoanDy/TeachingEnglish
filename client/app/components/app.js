import React from 'react'
import {FormattedMessage} from 'react-intl'
import MainNav from './Mainnav.js'
import Footer from './Footer.js'

/**
 * Container component for Hamu-Education.
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
