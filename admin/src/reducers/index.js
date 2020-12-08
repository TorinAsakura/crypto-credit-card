import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from '@c3/common/src/reducers/security'
import remote from '@c3/common/src/reducers/remote'
import config from './config'
import sidebar from './sidebar'

export default combineReducers({
  router,
  security,
  remote,
  config,
  sidebar,
})
