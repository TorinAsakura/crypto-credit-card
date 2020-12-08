import React, { Component } from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import Content from './Content'
import Tab from './Tab'
import Deals from './Deals'
import Orders from './Orders'
import Buy from './Buy'
import Sell from './Sell'

const messages = defineMessages({
  market: {
    id: 'main.market.tabs.market',
    defaultMessage: 'Макрет',
  },
  yourOrders: {
    id: 'main.market.tabs.your_orders',
    defaultMessage: 'Ваши ордеры',
  },
  yourDeals: {
    id: 'main.market.tabs.your_deals',
    defaultMessage: 'Ваши сделки',
  },
})

class Market extends Component {
  state = {
    current: 'market',
  }

  onChangeTab(current) {
    this.setState({ current })
  }

  renderTabs() {
    const { intl } = this.props
    const { current } = this.state

    return (
      <Row>
        <Layout>
          <Tab first active={current === 'market'} onClick={() => this.onChangeTab('market')}>
            {intl.formatMessage(messages.market)}
          </Tab>
        </Layout>
        <Layout>
          <Tab active={current === 'orders'} onClick={() => this.onChangeTab('orders')}>
            {intl.formatMessage(messages.yourOrders)}
          </Tab>
        </Layout>
        <Layout>
          <Tab last active={current === 'deals'} onClick={() => this.onChangeTab('deals')}>
            {intl.formatMessage(messages.yourDeals)}
          </Tab>
        </Layout>
      </Row>
    )
  }

  renderContent() {
    const { current } = this.state

    let content = null

    if (current === 'deals') {
      content = (
        <Deals />
      )
    }

    if (current === 'orders') {
      content = (
        <Orders />
      )
    }

    if (current === 'market') {
      content = (
        <Row>
          <Layout shrink={1} basis='50%'>
            <Buy />
          </Layout>
          <Layout basis='24px' />
          <Layout shrink={1} basis='50%'>
            <Sell />
          </Layout>
        </Row>
      )
    }

    return (
      <Content>
        {content}
      </Content>
    )
  }

  render() {
    return (
      <Column fill>
        <Layout>
          {this.renderTabs()}
        </Layout>
        <Layout shrink={1} grow={1} relative>
          <LayoutWrapper>
            {this.renderContent()}
          </LayoutWrapper>
        </Layout>
      </Column>
    )
  }
}

export default injectIntl(Market)
