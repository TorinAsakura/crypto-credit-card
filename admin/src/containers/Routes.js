import React from 'react'
import { Switch, Route } from 'react-router'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/'>
      <App />
    </Route>
  </Switch>
)

export default Routes
