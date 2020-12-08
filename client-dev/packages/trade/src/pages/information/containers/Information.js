/* eslint-disable */
import { connect } from 'react-redux'
import Information from '../components/Information'

export default connect(
  state => ({
    email: state.user.email,
  }),
)(Information)
