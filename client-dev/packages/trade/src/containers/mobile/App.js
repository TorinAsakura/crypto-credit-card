import React, { Component } from 'react'
import { Switch, withRouter } from 'react-router'
import { Column, Layout } from 'flex-layouts'
import { SymbolLogo } from '@c3/ui/src/logo'
import Header from './Header'
import Profile from './Profile'
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
        <Layout shrink={0}>
          <Header />
        </Layout>
        <Layout relative>
          <Progress />
        </Layout>
        <Layout relative>
          <div style={{ width: '100%', zIndex: 1 }}>
            <Profile />
          </div>
        </Layout>
        <Layout relative shrink={1} basis='100%' overflowX='hidden'>
          <Column>
            <Layout>
              <Switch location={isModal ? this.previousLocation : location}>
                {children}
              </Switch>
            </Layout>
            <Layout basis='21px' />
            <Layout justify='center'>
              <SymbolLogo height={40} />
            </Layout>
            <Layout basis='24px' />
          </Column>
        </Layout>
        {modals}
      </Column>
    )
  }
}

export default withRouter(App)
