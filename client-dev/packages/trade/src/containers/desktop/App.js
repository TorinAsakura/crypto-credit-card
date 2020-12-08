/* eslint-disable */
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { FadeInOutSwitch } from '@c3/ui/src/animation/router'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import { SymbolLogo } from '@c3/ui/src/logo'
import Footer from '../../components/desktop/Footer'
import Header from './Header'
import Progress from './Progress'
import StatusBar from '../../screens/status/containers/StatusBar'

class App extends Component {
  previousLocation = this.props.location // eslint-disable-line react/sort-comp

  componentWillUpdate(nextProps) {
    const { location } = this.props

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { children, location, modals } = this.props

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )

    return (
      <Column fill>
        <Layout shrink={0}>
          <Header />
        </Layout>
        <Layout relative>
          <Progress />
        </Layout>
        <Layout>
          <StatusBar />
        </Layout>
        <Layout shrink={1} grow={1}>
          <Row>
            <Layout relative shrink={1} basis='100%' overflowX='hidden'>
              <LayoutWrapper>
                <Column>
                  <Layout>
                    {children}
                  </Layout>
                  <Layout justify='center'>
                    <Footer />
                  </Layout>
                </Column>
              </LayoutWrapper>
            </Layout>
          </Row>
        </Layout>
        {modals}
      </Column>
    )
  }
}

export default withRouter(App)
