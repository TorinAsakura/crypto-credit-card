/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Page extends Component {
  renderHead() {
    const { assets } = this.props
    const head = Helmet.rewind()

    return (
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}

        {assets.css && (
          <link rel='stylesheet' href={assets.css} />
        )}
      </head>
    )
  }

  render() {
    const { locale, markup, initialState, assets } = this.props

    return (
      <html lang={locale}>
        {this.renderHead()}
        <body>
          <div
            id='app'
            dangerouslySetInnerHTML={{ __html: markup }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.initialState=${initialState};` }}
          />
          <script src={assets.js} />
        </body>
      </html>
    )
  }
}

export default Page
