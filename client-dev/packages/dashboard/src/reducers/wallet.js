import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReducer } from '@c3/utils'
import * as actions from '../constants/user'

const initialState = {
  address: '',
  balance: 0,
  ethBalance: 0,
}

const reducer = createReducer(initialState, {
  [actions.load]: (state, { user }) => ({
    address: user.wallet.address,
    balance: user.wallet.balance,
    ethBalance: user.wallet.ethBalance,
  }),
})

export default persistReducer({
  storage,
  key: 'wallet',
  keyPrefix: 'c3',
  version: 1,
}, reducer)
