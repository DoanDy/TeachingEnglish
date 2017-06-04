import React from 'react'
import ReactDOM from 'react-dom';
import {FormattedMessage} from 'react-intl'
import LocaleProvider from './localeProvider.js'

class App extends React.Component {
  render() {
    return (
      <h2><FormattedMessage id={ 'test' }/></h2>
    )
  }
}
// test test test
ReactDOM.render(
  <LocaleProvider>
    <App/>
  </LocaleProvider>,
  document.getElementById('app'))
