import { connect } from 'react-redux'
import Profile from '../../components/mobile/Profile'

export default connect(
  state => ({
    show: state.menu.profile,
  }),
)(Profile)
