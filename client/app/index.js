import React from 'react'
import ReactDOM from 'react-dom';
import {createHashHistory} from 'history'

import LocaleProvider from './localeApp/LocaleProvider.js'
import Store from './store/Store.js'
import Router from './Router.js'

import style from './stylesheets/main.scss'

const HISTORY = createHashHistory()
const store = Store.initStore(HISTORY)

ReactDOM.render(
  <Store.Provider store={store}>
    <LocaleProvider>
      <Router history={HISTORY}/>
    </LocaleProvider>
  </Store.Provider>,
  document.getElementById('app'))

// fades and removes loading after window has been loaded
$(window).on('load',function() {
  $('#main-loading-overlay').fadeOut(1000, function() {
    $('#main-loading-overlay').remove()
  })
})
