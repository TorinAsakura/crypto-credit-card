import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Drawer from '../../components/mobile/Drawer'

export default withRouter(connect(
  state => ({
    show: state.menu.toolbar,
    ...state.stages.current,
  }),
)(Drawer))
