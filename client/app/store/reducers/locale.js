import {CHANGE_LOCALE} from '../actions/locale.js'

export default function(state = 'en', action) {
  switch(action) {
    case CHANGE_LOCALE:
      return action.locale
    default:
      return state
  }
}
