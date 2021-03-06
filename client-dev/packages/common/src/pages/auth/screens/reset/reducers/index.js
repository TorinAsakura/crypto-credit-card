import { createReducer } from '@c3/utils'
import * as actions from '../constants'

const initialState = {
  password: '',
  confirmation: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
