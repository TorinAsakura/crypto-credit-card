import React from 'react'
import { Route } from 'react-router'
import { BounceSwitch } from '@c3/ui/src/animation/router'
import App from './App'
import { Login } from '../../screens/login/containers/mobile'
import { Registration, RegistrationSuccess } from '../../screens/registration/containers/mobile'
import { Restore, RestoreSuccess } from '../../screens/restore/containers/mobile'
import { Reset, ResetSuccess } from '../../screens/reset/containers/mobile'

const Auth = () => (
  <App>
    <BounceSwitch>
      <Route path='/auth' exact component={Login} />
      <Route path='/auth/registration' exact component={Registration} />
      <Route path='/auth/registration/success' component={RegistrationSuccess} />
      <Route path='/auth/restore' exact component={Restore} />
      <Route path='/auth/restore/success' component={RestoreSuccess} />
      <Route path='/auth/reset/success' exact component={ResetSuccess} />
      <Route path='/auth/reset/:token' exact component={Reset} />
    </BounceSwitch>
  </App>
)

export default Auth
