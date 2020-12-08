import { connect } from 'react-redux'

export default connect(
  state => ({
    geography: state.geography,
    levels: state.levels,
  }),
)
