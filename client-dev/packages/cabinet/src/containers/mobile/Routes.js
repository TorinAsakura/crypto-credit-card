import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from '@c3/common/src/pages/auth/containers/mobile/Auth'
import App from './App'
import { Instruments } from '../../pages/instruments/containers/mobile'
import { Structure } from '../../pages/structure/containers/mobile'
import { ControlPanel } from '../../pages/panel/containers/mobile'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <Route path='/'>
      <App>
        <Route exact path='/' component={ControlPanel} />
        <Route path='/structure' component={Structure} />
        <Route path='/instruments' component={Instruments} />
      </App>
    </Route>
  </Switch>
)

export default Routes
