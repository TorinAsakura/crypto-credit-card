/* eslint-disable */
import { createReducer } from '@c3/utils'
import moment from 'moment'
import * as actions from '../constants/history'

const initialState = {
  data: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { data }) => ({
    data: data.map(item => ({
      ...item,
      date: moment.unix(item.date).toDate(),
    })),
  }),
})
