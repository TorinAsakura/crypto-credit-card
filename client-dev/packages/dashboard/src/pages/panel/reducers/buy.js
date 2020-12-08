import { createReducer } from '@c3/utils'
import * as actions from '../constants/buy'

const initialState = {
  amount: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { amount }) => ({ amount }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
})
