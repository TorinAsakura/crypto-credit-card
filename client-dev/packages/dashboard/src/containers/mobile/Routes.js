import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from '@c3/common/src/pages/auth/containers/mobile/Auth'
import App from './App'
import { ControlPanel } from '../../pages/panel/containers/mobile'
import { Buy } from '../../pages/panel/containers/buy/mobile'
import { Refill } from '../../pages/panel/containers/refill/mobile'
import { Transactions } from '../../pages/transactions/containers/mobile'
import { Referals } from '../../pages/referals/containers/mobile'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <Route path='/'>
      <App
        modals={(
          <Switch>
            <Route path='/refill' component={Refill} />
            <Route path='/buy' component={Buy} />
          </Switch>
        )}
      >
        <Route exact path='/' component={ControlPanel} />
        <Route path='/transactions' component={Transactions} />
        <Route path='/referals' component={Referals} />
      </App>
    </Route>
  </Switch>
)

export default Routes
