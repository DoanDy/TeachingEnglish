import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import locale from './locale.js'

export default combineReducers({
  locale,
  router: routerReducer
})
