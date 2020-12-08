import { createReducer } from '@c3/utils'

const initialState = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? window.location.origin.replace('www.', '').replace('cabinet.', 'api.')
    : (process.env.API_URL || 'http://localhost:3000'),
}

export default createReducer(initialState, {})
