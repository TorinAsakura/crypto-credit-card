import React from 'react'
import { Switch, Route } from 'react-router'
import { Invest } from '../../pages/invest/containers/mobile'
import { Token } from '../../pages/token/containers/mobile'
import { Ico } from '../../pages/ico/containers/mobile'
import { Bounty } from '../../pages/bounty/containers/mobile'
import { Bank } from '../../pages/bank/containers/mobile'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/'>
      <App>
        <Route exact path='/' component={Ico} />
        <Route path='/token' component={Token} />
        <Route path='/invest' component={Invest} />
        <Route path='/bounty' component={Bounty} />
        <Route path='/bank' component={Bank} />
      </App>
    </Route>
  </Switch>
)

export default Routes
