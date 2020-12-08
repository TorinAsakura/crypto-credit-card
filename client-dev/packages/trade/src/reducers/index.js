import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import locale from '@c3/common/src/reducers/locale'
import remote from '@c3/common/src/reducers/remote'
import security from '@c3/common/src/reducers/security'
import auth from '@c3/common/src/pages/auth/reducers'
import config from './config'
import messages from './messages'
import menu from './menu'
import user from './user'
import ticker from './ticker'
import history from './history'

export default combineReducers({
  router,
  security,
  remote,
  auth,
  locale,
  config,
  messages,
  menu,
  user,
  ticker,
  history,
})
