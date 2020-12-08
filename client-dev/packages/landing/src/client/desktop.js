import React from 'react'
import { hydrate } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import 'flex-layouts/lib/flex-layouts.css'
import Root from '../common/containers/desktop/Root'
import configureStore from '../common/store'
import './index.css'

const history = createHistory()
const store = configureStore(window.initialState, history)

hydrate(
  <Root store={store} history={history} />,
  document.getElementById('app'),
)
