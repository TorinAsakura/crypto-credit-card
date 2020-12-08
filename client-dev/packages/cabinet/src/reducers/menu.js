import { createReducer } from '@c3/utils'
import { LOCATION_CHANGE } from 'react-router-redux'
import * as actions from '../constants/menu'

const initialState = {
  profile: false,
  toolbar: false,
}

export default createReducer(initialState, {
  [actions.toggle]: (state, { name }) => ({ ...initialState, [name]: !state[name] }),
  [LOCATION_CHANGE]: (state) => {
    if (state.toolbar) {
      return {
        ...state,
        toolbar: false,
      }
    }

    if (state.profile) {
      return {
        ...state,
        profile: false,
      }
    }

    return state
  },
})
