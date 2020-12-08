import { createReducer } from '@c3/utils'
import * as actions from '../constants'

const initialState = []

export default createReducer(initialState, {
  [actions.load]: (state, { transactions }) => transactions,
})
