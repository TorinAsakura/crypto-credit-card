import { connect } from 'react-redux'

export default connect(
  state => ({
    id: state.user.id || state.security.id,
    referrers: state.referrers,
  }),
)
