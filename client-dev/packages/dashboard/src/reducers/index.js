import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import locale from '@c3/common/src/reducers/locale'
import remote from '@c3/common/src/reducers/remote'
import security from '@c3/common/src/reducers/security'
import auth from '@c3/common/src/pages/auth/reducers'
import config from './config'
import messages from './messages'
import stages from './stages'
import menu from './menu'
import user from './user'
import cccr from './cccr'
import wallet from './wallet'
import tokens from '../pages/panel/reducers'
import transactions from '../pages/transactions/reducers'
import referals from '../pages/referals/reducers'

export default combineReducers({
  router,
  auth,
  security,
  locale,
  config,
  messages,
  stages,
  menu,
  user,
  cccr,
  wallet,
  remote,
  tokens,
  transactions,
  referals,
})
