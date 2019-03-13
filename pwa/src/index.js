import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import './firebase/init'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as Sentry from '@sentry/browser'
import { Grommet, grommet } from 'grommet'
import { version } from '../package.json'

grommet.global.colors.brand = '#fca311'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: `jobee@${version}`
})

ReactDOM.render(
  <Provider store={store}>
    <Grommet full theme={grommet}>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
