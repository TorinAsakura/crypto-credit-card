/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load } from '../../../actions/history'
import History from '../components/History'

class Container extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.pair && this.props.pair) {
      if (nextProps.pair !== this.props.pair) {
        this.props.onLoad(nextProps.pair)
      }
    }
  }

  render() {
    return (
      <History {...this.props} />
    )
  }
}

export default connect(
  state => ({
    pair: state.ticker.pair,
    data: state.history.data,
  }),
  dispatch => ({
    onLoad: pair => dispatch(load(pair)),
  }),
)(Container)
