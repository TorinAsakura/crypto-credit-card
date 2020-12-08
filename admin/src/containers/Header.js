import { connect } from 'react-redux'
import Header from '../components/Header'

export default connect(
  state => ({
    location: state.router.location,
  }),
)(Header)
