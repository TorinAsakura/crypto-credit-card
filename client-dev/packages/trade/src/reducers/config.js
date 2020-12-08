/* eslint-disable no-nested-ternary */
import { createReducer } from '@c3/utils'

const initialState = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? (window.location.origin.includes('stage.') ? 'https://api.stage.cccr.io' : 'https://api.cccr.io')
    : (process.env.API_URL || 'http://localhost:3000'),
}

export default createReducer(initialState, {})
