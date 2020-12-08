import { Component } from 'react'
import { connect } from 'react-redux'
import { init } from '../actions/init'

class Preload extends Component {
  componentDidMount() {
    const { token } = this.props

    if (!!token) { // eslint-disable-line no-extra-boolean-cast
      this.props.onInit()
      this.props.onMain()
    } else if (!/^\/auth/.test(window.location.pathname)) {
      this.props.onAuth()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.token && nextProps.token) {
      this.props.onMain()
      this.props.onInit()
    }

    if (this.props.token && !nextProps.token) {
      this.props.onAuth()
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

export default connect(
  state => ({
    token: state.security.token,
  }),
  (dispatch, { history }) => ({
    onInit: () => dispatch(init()),
    onAuth: () => history.replace('/auth'),
    onMain: () => history.replace('/'),
  }),
)(Preload)
