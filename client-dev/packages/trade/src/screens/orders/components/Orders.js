/* eslint-disable */
import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Input } from '@c3/ui/src/input'
import { Text } from '@c3/ui/src/text'

const messages = defineMessages({
  history: {
    id: 'main.orders.history',
    defaultMessage: 'История сделок',
  },
  date: {
    id: 'main.orders.date',
    defaultMessage: 'Дата',
  },
  type: {
    id: 'main.orders.type',
    defaultMessage: 'Тип',
  },
  price: {
    id: 'main.orders.price',
    defaultMessage: 'Цена',
  },
  count: {
    id: 'main.orders.count',
    defaultMessage: 'Кол-во',
  },
  empty: {
    id: 'main.orders.empty',
    defaultMessage: 'Список пуст'
  },
})

const Orders = ({ intl }) => (
  <Block>
    <Row fill>
      <Layout basis='16px' />
      <Layout shrink={1} grow={1}>
        <Column fill>
          <Layout basis='8px' />
          <Layout>
            <Text
              uppercase
              size='small'
              weight='bold'
            >
              {intl.formatMessage(messages.history)}
            </Text>
          </Layout>
          <Layout basis='12px' />
          <Layout>
            <Row>
              <Layout basis='20%'>
                <Text
                  size='small'
                  weight='bold'
                  color='gray400'
                >
                  {intl.formatMessage(messages.date)}
                </Text>
              </Layout>
              <Layout basis='30%'>
                <Text
                  size='small'
                  weight='bold'
                  color='gray400'
                >
                  {intl.formatMessage(messages.type)}
                </Text>
              </Layout>
              <Layout basis='28%'>
                <Text
                  size='small'
                  weight='bold'
                  color='gray400'
                >
                  {intl.formatMessage(messages.price)}
                </Text>
              </Layout>
              <Layout basis='20%'>
                <Text
                  size='small'
                  weight='bold'
                  color='gray400'
                >
                  {intl.formatMessage(messages.count)}
                </Text>
              </Layout>
            </Row>
          </Layout>
          <Layout basis='6px' />
          <Layout>
            <Divider color='gray' />
          </Layout>
          <Layout basis='12px' />
          <Layout justify='center'>
            <Text
              size='medium'
              color='gray400'
              weight='light'
            >
              {intl.formatMessage(messages.empty)}
            </Text>
          </Layout>
          <Layout basis='8px' />
        </Column>
      </Layout>
      <Layout basis='16px' />
    </Row>
  </Block>
)

export default injectIntl(Orders)
