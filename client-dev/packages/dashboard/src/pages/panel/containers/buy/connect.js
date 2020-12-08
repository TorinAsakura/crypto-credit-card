import { connect } from 'react-redux'
import { buy, change } from '../../actions/buy'

export default connect(
  state => ({
    amount: state.tokens.buy.amount,
    errors: state.tokens.buy.errors,
  }),
  dispatch => ({
    onChange: value => dispatch(change(value)),
    onBuy: () => dispatch(buy()),
  }),
)
