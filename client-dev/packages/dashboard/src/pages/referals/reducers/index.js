import { createReducer } from '@c3/utils'
import * as actions from '../constants'

const initialState = {
  referrer: null,
}

export default createReducer(initialState, {
  [actions.load]: (state, { referrer }) => ({
    referrer,
  }),
})
