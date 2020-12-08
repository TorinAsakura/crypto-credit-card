import { persistReducer } from 'redux-persist'
import { createReducer, getUserLocale } from '@c3/utils'
import { LocaleCookieStorage } from '../storage'
import * as actions from '../constants/locale'

const initialState = {
  locale: getUserLocale(),
}

const reducer = createReducer(initialState, {
  [actions.change]: (state, { locale }) => ({ locale }),
})

export default persistReducer({
  storage: new LocaleCookieStorage(),
  key: 'c3locale',
  serialize: false,
  stateReconciler: (inboundState, originalState, reducedState) => ({
    locale: inboundState.locale || originalState.locale || reducedState.locale,
  }),
}, reducer)
