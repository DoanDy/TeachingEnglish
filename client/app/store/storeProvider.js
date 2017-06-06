import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers/index.js'

const store = createStore(app)

export default class StoreProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}
