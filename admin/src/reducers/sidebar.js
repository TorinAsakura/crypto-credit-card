import { createReducer } from '@c3/utils'
import * as actions from '../constants/sidebar'

const initialState = {
  currencies: true,
  users: true,
  content: true,
}

export default createReducer(initialState, {
  [actions.toggle]: (state, { group, value }) => ({ ...state, [group]: !state[group] }),
})
