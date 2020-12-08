import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import locale from '@c3/common/src/reducers/locale'
import remote from '@c3/common/src/reducers/remote'
import messages from './messages'
import config from './config'
import menu from './menu'
import user from './user'

export default combineReducers({
  router,
  locale,
  remote,
  messages,
  config,
  menu,
  user,
})
