/* eslint-disable */
import { start, end } from '@c3/common/src/actions/remote'
import * as actions from '../constants/history'
import qs from 'qs'

export const load = pair => async (dispatch) => {
  dispatch(start())

  try {
    const params = {
      command: 'returnChartData',
      currencyPair: pair,
      start: 1405699200,
      end: 9999999999,
      period: 14400,
    }
  
    const response = await fetch(`https://poloniex.com/public?${qs.stringify(params)}`)
    const data = await response.json()
  
    dispatch({
      type: actions.load,
      data,
    })
  } catch (error) {
    console.log(error)
  }

  dispatch(end())
}
