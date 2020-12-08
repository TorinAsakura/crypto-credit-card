import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import IntlProvider from './IntlProvider'
import Routes from './Routes'

const Root = ({ store, history, persistor }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <IntlProvider>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </IntlProvider>
    </PersistGate>
  </Provider>
)

export default hot(module)(Root)
