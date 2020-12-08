import { load as loadUser } from './user'
import { load as loadTicker } from './ticker'

export const init = () => (dispatch) => {
  dispatch(loadUser())
  dispatch(loadTicker())
}
