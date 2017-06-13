import {CHANGE_LOCALE} from '../actions/locale.js'

export default function(state = 'en', action) {
  switch(action.type) {
    case CHANGE_LOCALE:
      console.log(action)
      return action.locale
    default:
      return state
  }
}
