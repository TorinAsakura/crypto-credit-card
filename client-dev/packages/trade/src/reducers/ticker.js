/* eslint-disable */
import { createReducer } from '@c3/utils'
import * as actions from '../constants/ticker'

const initialState = {
  filter: '',
  currency: '',
  pair: '',
  pairs: {},
}

const getCurrency = (pair) => {
  const [currency] = pair.split('_')

  return currency
}

export default createReducer(initialState, {
  [actions.load]: (state, { current, data }) => ({
    ...state,
    pair: current,
    currency: getCurrency(current),
    pairs: Object.keys(data).reduce((result, pair) => {
      const [source, target] = pair.split('_')
  
      const value = data[pair]
  
      if (!result[source]) {
        return {
          ...result,
          [source]: {
            items: [{
              pair,
              currency: target,
              ...value,
            }],
          },
        }
      }
  
      return {
        ...result,
        [source]: {
          ...result[source],
          items: [
            ...result[source].items,
            {
              pair,
              currency: target,
              ...value,
            },
          ],
        },
      }
    }, {}),
  }),
  [actions.changeCurrency]: (state, { currency }) => ({
    ...state,
    currency,
  }),
  [actions.changePair]: (state, { pair }) => ({
    ...state,
    pair,
  }),
  [actions.changeFilter]: (state, { filter }) => ({
    ...state,
    filter,
  }),
})
