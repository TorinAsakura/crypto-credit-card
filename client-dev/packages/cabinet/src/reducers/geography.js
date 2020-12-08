/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createReducer } from '@c3/utils'
import * as actions from '../constants/hierarchy'

const initialState = {}

export default createReducer(initialState, {
  [actions.load]: (state, { children }) =>
    children.filter(child => child.plan && child.country).reduce((result, child) => {
      if (!result[child.country]) {
        result[child.country] = {
          clients: 0,
          partners: 0,
        }
      }

      result[child.country][child.plan === 'free' ? 'clients' : 'partners']++

      return result
    }, {}),
})
