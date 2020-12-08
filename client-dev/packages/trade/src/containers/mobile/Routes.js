import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from '@c3/common/src/pages/auth/containers/mobile/Auth'
import App from './App'
import Main from './Main'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <Route path='/'>
      <App
        modals={(
          <Switch />
        )}
      >
        <Route exact path='/' component={Main} />
      </App>
    </Route>
  </Switch>
)

export default Routes
