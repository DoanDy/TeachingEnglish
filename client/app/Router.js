import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {createBrowserHistory} from 'history'
import { Route } from 'react-router'

import App from './components/App.js'
import Home from './components/HomePage.js'
import English from './components/EnglishPage.js'

/**
 * Router for the app
 */
export default class Router extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history} >
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/courses/english" component={English} />
        </App>
      </ConnectedRouter>
    )
  }
}
