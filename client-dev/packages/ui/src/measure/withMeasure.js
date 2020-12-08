/* eslint-disable quotes */
import React, { Component, createElement } from 'react'

export default WrappedComponent =>
  class WithMeazure extends Component {
    static displayName = `WithMeazure(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

    state = {
      width: 0,
      height: 0,
    }

    onSetRef = (element) => {
      if (element) {
        this.setState({
          width: element.parentNode.clientWidth,
          height: element.parentNode.clientHeight,
        })
      }
    }

    renderContent() {
      const { width, height } = this.state

      if (width > 0 && height > 0) {
        return createElement(WrappedComponent, {
          width,
          height,
          ...this.props,
        })
      }

      return null
    }

    render() {
      return (
        <>
          <noscript ref={this.onSetRef} />
          {this.renderContent()}
        </>
      )
    }
  }
