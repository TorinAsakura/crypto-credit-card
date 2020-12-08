import { connect } from 'react-redux'

export default connect(
  state => ({
    address: state.wallet.address,
  }),
)
