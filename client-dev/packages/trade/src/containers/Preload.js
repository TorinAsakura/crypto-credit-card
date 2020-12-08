import { Component } from 'react'
import { connect } from 'react-redux'
import { init } from '../actions/init'

class Preload extends Component {
  componentDidMount() {
    const { token } = this.props

    if (!token && /^\/private/.test(window.location.pathname)) { // eslint-disable-line no-extra-boolean-cast
      this.props.onMain()
    }

    this.props.onInit()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.token && nextProps.token) {
      this.props.onMain()
      this.props.onInit()
    }

    if (this.props.token && !nextProps.token) {
      window.location.reload()
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
