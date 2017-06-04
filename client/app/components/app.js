import React from 'react'
import {FormattedMessage} from 'react-intl'
import MainNav from './mainnav.js'

/**
 * Primary component for Hamu-Education. Contains all components
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
      </div>
    )
  }
}
