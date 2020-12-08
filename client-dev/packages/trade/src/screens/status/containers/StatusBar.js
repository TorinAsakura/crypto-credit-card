/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import StatusBar from '../components/StatusBar'

const random = length => Math.floor(Math.random() * length)

class Container extends Component {
  state = {}

  componentDidMount() {
    if (this.props.pair) {
      this.refreshData()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.pair && !prevProps.pair) {
      this.refreshData()
    }
  }

  refreshData() {
    try {
      const currencies = Object.keys(this.props.pairs)
      const currency = currencies[random(currencies.length)]
  
      const { items } = this.props.pairs[currency]
  
      const item = items[random(items.length)]
  
      const [source, target] = item.pair.split('_')
  
      this.setState({
        ...item,
        source,
        target,
      })
    } catch (error) {
      console.log(error)
    }

    setTimeout(() => this.refreshData(), 5000)
  }

  render() {
    if (!this.props.pair) {
      return null
    }

    return (
      <StatusBar
        {...this.props}
        {...this.state}
      />
    )
  }
}

export default connect(
  state => state.ticker,
)(Container)
