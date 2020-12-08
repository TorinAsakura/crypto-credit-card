import { createReducer } from '@c3/utils'
import * as actions from '../constants/hierarchy'

const initialState = {}

export default createReducer(initialState, {
  [actions.load]: (state, { children }) => children.filter(child => !!child.referrer).reduce((result, child) => ({
    ...result,
    [child.referrer]: result[child.referrer] ? (result[child.referrer] + 1) : 1,
  }), {}),
})
