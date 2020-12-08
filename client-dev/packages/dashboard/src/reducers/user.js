import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReducer } from '@c3/utils'
import * as actions from '../constants/user'

const initialState = {
  id: '',
  email: '',
}

const reducer = createReducer(initialState, {
  [actions.load]: (state, { user }) => ({
    id: user.id,
    email: user.email,
  }),
})

export default persistReducer({
  storage,
  key: 'user',
  keyPrefix: 'c3',
  version: 1,
}, reducer)
