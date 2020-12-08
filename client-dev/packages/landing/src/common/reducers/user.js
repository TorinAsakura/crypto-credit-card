import { createReducer } from '@c3/utils'
import * as actions from '../constants/user'

const initialState = {
  id: '',
  email: '',
}

export default createReducer(initialState, {
  [actions.load]: (state, { user }) => user,
})
