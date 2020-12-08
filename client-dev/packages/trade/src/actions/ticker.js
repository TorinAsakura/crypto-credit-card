/* eslint-disable */
import { start, end } from '@c3/common/src/actions/remote'
import * as actions from '../constants/ticker'
import { load as loadHistory } from './history'

export const load = () => async (dispatch) => {
  dispatch(start())

  try {
    const response = await fetch('https://poloniex.com/public?command=returnTicker')
    const data = await response.json()
  
    const [current] = Object.keys(data)
  
    dispatch({
      type: actions.load,
      current,
      data,
    })
  
    dispatch(loadHistory(current))
  } catch (error) {
    console.log(error)
  }

  dispatch(end())
}

export const changeCurrency = currency => ({
  type: actions.changeCurrency,
  currency,
})

export const changePair = pair => ({
  type: actions.changePair,
  pair,
})

export const changeFilter = filter => ({
  type: actions.changeFilter,
  filter,
})
