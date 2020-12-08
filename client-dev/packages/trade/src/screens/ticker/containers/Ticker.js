/* eslint-disable */
import { connect } from 'react-redux'
import { changeCurrency, changePair, changeFilter } from '../../../actions/ticker'
import Ticker from '../components/Ticker'

export default connect(
  state => state.ticker,
  dispatch => ({
    onChangeCurrency: currency => dispatch(changeCurrency(currency)),
    onChangePair: pair => dispatch(changePair(pair)),
    onChangeFilter: filter => dispatch(changeFilter(filter)),
  }),
)(Ticker)
