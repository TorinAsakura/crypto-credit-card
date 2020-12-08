import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from '@c3/common/src/pages/auth/containers/desktop/Auth'
import App from './App'
import Main from './Main'
import Private from '../../pages/private/components/Private'
import Wallet from '../../pages/wallet/components/Wallet'
import Information from '../../pages/information/containers/Information'
import Orders from '../../pages/orders/components/Orders'
import Api from '../../pages/api/components/Api'
import Security from '../../pages/security/components/Security'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <Route path='/'>
      <App
        modals={(
          <Switch />
        )}
      >
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/private'>
            <Private>
              <Switch>
                <Route path='/private/wallet' component={Wallet} />
                <Route path='/private/info' component={Information} />
                <Route path='/private/orders' component={Orders} />
                <Route path='/private/api' component={Api} />
                <Route path='/private/security' component={Security} />
              </Switch>
            </Private>
          </Route>
        </Switch>
      </App>
    </Route>
  </Switch>
)

export default Routes
