/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import Tab from './Tab'

const messages = defineMessages({
  info: {
    id: 'private.tabs.info',
    defaultMessage: 'Информация',
  },
  wallet: {
    id: 'private.tabs.wallet',
    defaultMessage: 'Кошелек',
  },
  orders: {
    id: 'private.tabs.orders',
    defaultMessage: 'Заказы',
  },
  security: {
    id: 'private.tabs.security',
    defaultMessage: 'Безопасность',
  },
  apiKeys: {
    id: 'private.tabs.api_keys',
    defaultMessage: 'Api ключи',
  },
})

const Private = ({ intl, children }) => (
  <div style={{ width: '100%', background: '#ffffff', display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: 1100 }}>
      <Column>
        <Layout basis='32px' />
        <Layout>
          <Row>
            <Layout>
              <Tab to='/private/info'>
                {intl.formatMessage(messages.info)}
              </Tab>
            </Layout>
            <Layout>
              <Tab to='/private/wallet'>
                {intl.formatMessage(messages.wallet)}
              </Tab>
            </Layout>
            <Layout>
              <Tab to='/private/orders'>
                {intl.formatMessage(messages.orders)}
              </Tab>
            </Layout>
            <Layout>
              <Tab to='/private/security'>
                {intl.formatMessage(messages.security)}
              </Tab>
            </Layout>
            <Layout>
              <Tab to='/private/api'>
                {intl.formatMessage(messages.apiKeys)}
              </Tab>
            </Layout>
          </Row>
        </Layout>
        <Layout basis='38px' />
        <Layout>
          {children}
        </Layout>
      </Column>
    </div>
  </div>
)

export default injectIntl(Private)
