import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { showDevTools } from './utils/dev-tools';
import './js/jquery.min.js'
import './css/bootstrap.min.css'

const store = configureStore();

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    {showDevTools(store)}
  </div>,
  document.getElementById('root')
)

