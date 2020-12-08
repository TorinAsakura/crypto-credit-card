import { connect } from 'react-redux'

export default connect(
  state => ({
    hierarchy: state.hierarchy,
  }),
)
