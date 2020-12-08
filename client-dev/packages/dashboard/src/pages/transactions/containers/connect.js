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
    transactions: state.transactions,
  }),
  dispatch => ({
    onLoad: () => dispatch(load()),
  }),
)(enhance(Target))
