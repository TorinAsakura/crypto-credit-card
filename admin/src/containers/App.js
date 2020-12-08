import React, { Component } from 'react'
import { withRouter, Switch } from 'react-router'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import Header from './Header'
import Sidebar from './Sidebar'
import Progress from './Progress'

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
        <Layout relative>
          <Progress />
        </Layout>
        <Layout grow={1}>
          <Row>
            <Layout basis='208px'>
              <Sidebar />
            </Layout>
            <Layout shrink={1} grow={1}>
              <Column fill>
                <Layout basis='48px'>
                  <Header />
                </Layout>
                <Layout relative shrink={1} basis='100%' overflowX='hidden'>
                  <LayoutWrapper>
                    <Switch location={isModal ? this.previousLocation : location}>
                      {children}
                    </Switch>
                  </LayoutWrapper>
                </Layout>
              </Column>
            </Layout>
          </Row>
        </Layout>
        {modals}
      </Column>
    )
  }
}

export default withRouter(App)
