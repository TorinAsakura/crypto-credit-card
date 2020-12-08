import React from 'react'
import { renderToString } from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import desktopRoutes from '../common/containers/desktop/Routes'
import mobileRoutes from '../common/containers/mobile/Routes'
import IntlProvider from '../common/containers/IntlProvider'
import reducers from '../common/reducers'
import en from '../../locales/en.json'
import ru from '../../locales/ru.json'
import Page from './page'

export default () =>
  (req, res) => {
    const target = req.device.type === 'phone' ? 'mobile' : 'desktop'

    const assets = require('../../dist/webpack-assets') // eslint-disable-line

    const routes = target === 'desktop' ? desktopRoutes : mobileRoutes

    const store = createStore(reducers, {
      config: {
        apiUrl: process.env.API_URL || 'http://localhost:3000',
      },
      locale: {
        locale: req.locale,
      },
      messages: { en, ru },
    })

    const context = {}

    const markup = renderToString(
      <Provider store={store}>
        <IntlProvider>
          <StaticRouter location={req.url} context={context}>
            {routes()}
          </StaticRouter>
        </IntlProvider>
      </Provider>,
    )

    const initialState = JSON.stringify(store.getState())
    const { locale } = store.getState().locale

    const page = renderToString(
      <Page
        locale={locale}
        markup={markup}
        assets={assets[target]}
        initialState={initialState}
      />,
    )

    res.send(`<!doctype html>${page}`)
  }
