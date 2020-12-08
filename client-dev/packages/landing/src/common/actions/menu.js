import * as actions from '../constants/menu'

export const toggle = name => ({
  type: actions.toggle,
  name,
})
