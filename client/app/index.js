import React from 'react'
import ReactDOM from 'react-dom';
import LocaleProvider from './localeProvider.js'
import App from './components/app.js'

import style from './stylesheets/main.scss'

ReactDOM.render(
  <LocaleProvider>
    <App/>
  </LocaleProvider>,
  document.getElementById('app'))
