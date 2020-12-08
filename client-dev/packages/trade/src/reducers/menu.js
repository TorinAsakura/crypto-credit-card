import { createReducer } from '@c3/utils'
import * as actions from '../constants/menu'

const initialState = {
  profile: false,
  toolbar: false,
}

export default createReducer(initialState, {
  [actions.toggle]: (state, { name }) => ({ ...state, [name]: !state[name] }),
})
