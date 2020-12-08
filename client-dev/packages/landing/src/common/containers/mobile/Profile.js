import { connect } from 'react-redux'
import { logout } from '@c3/common/src/actions/security'
import Profile from '../../components/mobile/Profile'

export default connect(
  state => ({
    show: state.menu.profile,
    user: state.user,
  }),
  dispatch => ({
    onLogout: () => dispatch(logout()),
  }),
)(Profile)
