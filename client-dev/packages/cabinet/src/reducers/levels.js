import { createReducer } from '@c3/utils'
import * as actions from '../constants/hierarchy'

const initialState = {
  1: {
    count: 0,
  },
  2: {
    count: 0,
  },
  3: {
    count: 0,
  },
  4: {
    count: 0,
  },
  5: {
    count: 0,
  },
  6: {
    count: 0,
  },
  7: {
    count: 0,
  },
  8: {
    count: 0,
  },
  9: {
    count: 0,
  },
}

export default createReducer(initialState, {
  [actions.load]: (state, { current, children }) => {
    const id = parseInt(current.id, 10)

    const levels = { ...initialState }

    children.filter(child => child.path.indexOf(id) !== -1).forEach((child) => {
      const level = child.path.slice(child.path.indexOf(id) + 1).length

      levels[level].count++ // eslint-disable-line no-plusplus
    })

    return levels
  },
})
