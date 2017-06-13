import { createStore, applyMiddleware } from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'

import app from './reducers/index.js'
import {changeLocale} from './actions/locale.js'
import StoreProvider from './StoreProvider.js'

/**
 * Static class for the Store
 */
export default class Store {
  /**
   * Initializes a store using client settings
   */
  static initStore(history) {
    // Get client side locale
    const locale = navigator.userLanguage || navigator.language
    const ROUTER_MIDDLEWARE = routerMiddleware(history)
    const store = createStore(app, applyMiddleware(ROUTER_MIDDLEWARE))
    store.dispatch(changeLocale(locale))
    return store
  }
  /**
   * React element to provide the store
   */
  static Provider = StoreProvider
}
