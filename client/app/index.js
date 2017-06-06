import React from 'react'
import ReactDOM from 'react-dom';
import LocaleProvider from './localeApp/localeProvider.js'
import StoreProvider from './store/storeProvider.js'
import App from './components/app.js'

import style from './stylesheets/main.scss'

ReactDOM.render(
  <StoreProvider>
    <LocaleProvider>
      <App/>
    </LocaleProvider>
  </StoreProvider>,
  document.getElementById('app'))
