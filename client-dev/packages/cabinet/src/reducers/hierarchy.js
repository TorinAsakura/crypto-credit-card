import { createReducer } from '@c3/utils'
import * as actions from '../constants/hierarchy'

const initialState = {
  children: [],
}

const buildTree = (children, rootId) => {
  const referals = children.map(child => ({
    ...child,
    name: child.firstName && child.lastName ? `${child.firstName} ${child.lastName}` : (child.email || ''),
    parentNetworkPath: child.path.slice(0, -1),
  }))

  const grouped = referals.reduce((result, referal) => {
    const path = JSON.stringify(referal.parentNetworkPath)

    if (!result[path]) {
      result[path] = [] // eslint-disable-line no-param-reassign
    }

    result[path].push(referal)

    return result
  }, {})

  const getChildren = (groups, node) => {
    const path = JSON.stringify(node.path)

    return {
      ...node,
      children: (groups[path] || []).map(child => getChildren(groups, child)),
    }
  }

  return referals.reduce((result, referal) => {
    if (referal.parentNetworkPath[referal.parentNetworkPath.length - 1] === rootId) {
      result.push(getChildren(grouped, referal))
    }

    return result
  }, [])
}

export default createReducer(initialState, {
  [actions.load]: (state, { current, children }) => {
    const id = parseInt(current.id, 10)

    return {
      ...state,
      id,
      children: buildTree(children, id),
    }
  },
})
