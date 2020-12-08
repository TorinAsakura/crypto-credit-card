import { connect } from 'react-redux'

export default connect(
  state => ({
    address: state.wallet.address,
    balance: state.wallet.balance,
    ethBalance: state.wallet.ethBalance,
    collected: state.cccr.collected,
    minTarget: state.cccr.minTarget,
    maxTarget: state.cccr.maxTarget,
    minTargetSupply: state.cccr.minTargetSupply,
    maxTargetSupply: state.cccr.maxTargetSupply,
    stages: state.stages.items,
  }),
  (dispatch, { history }) => ({
    onBuy: () => history.push({ pathname: '/buy', state: { modal: true } }),
    onRefill: () => history.push({ pathname: '/refill', state: { modal: true } }),
  }),
)
