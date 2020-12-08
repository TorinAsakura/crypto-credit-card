import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReducer } from '@c3/utils'
import * as actions from '../constants/cccr'

const initialState = {
  collected: 0,
  minTarget: 3000000,
  maxTarget: 200000000,
  minTargetSupply: 0,
  maxTargetSupply: 0,
}

const roundSupply = value => +(Math.round(value + 'e+2') + 'e-2') // eslint-disable-line prefer-template

const reducer = createReducer(initialState, {
  [actions.load]: (state, { collected }) => ({
    ...state,
    collected,
    minTargetSupply: roundSupply((collected / initialState.minTarget) * 100),
    maxTargetSupply: roundSupply((collected / initialState.maxTarget) * 100),
  }),
})

export default persistReducer({
  storage,
  key: 'cccr',
  keyPrefix: 'c3',
  version: 1,
}, reducer)
