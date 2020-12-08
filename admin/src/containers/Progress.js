import { connect } from 'react-redux'
import { Progress } from '@c3/admin-ui/src/progress'

export default connect(
  state => ({
    absolute: true,
    percent: state.remote.percent,
  }),
)(Progress)
