import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { toggle } from '../actions/sidebar'

export default connect(
  state => state.sidebar,
  dispatch => ({
    onToggleCurrencies: () => dispatch(toggle('currencies')),
    onToggleUsers: () => dispatch(toggle('users')),
    onToggleContent: () => dispatch(toggle('content')),
  }),
)(Sidebar)
