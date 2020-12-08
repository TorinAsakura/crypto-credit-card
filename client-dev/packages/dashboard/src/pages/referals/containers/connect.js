import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { load } from '../actions'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default Target => connect(
  state => ({
    id: state.security.id || state.user.id,
    address: state.wallet.address,
    ethBalance: state.wallet.ethBalance,
    referrer: state.referals.referrer,
  }),
  dispatch => ({
    onLoad: () => dispatch(load()),
  }),
)(enhance(Target))
