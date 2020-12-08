import { connect } from 'react-redux'
import { change, register } from '../actions'

export default connect(
  state => ({
    email: state.auth.registration.email,
    errors: state.auth.registration.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change(value)),
    onRegister: () => dispatch(register()),
  }),
)
