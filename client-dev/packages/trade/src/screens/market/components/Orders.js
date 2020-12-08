/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'

const offset = window.innerHeight - 140

const messages = defineMessages({
  date: {
    id: 'main.market.order.date',
    defaultMessage: 'Дата',
  },
  pair: {
    id: 'main.market.order.pair',
    defaultMessage: 'Пара',
  },
  type: {
    id: 'main.market.order.type',
    defaultMessage: 'Тип',
  },
  price: {
    id: 'main.market.order.price',
    defaultMessage: 'Цена',
  },
  count: {
    id: 'main.market.order.count',
    defaultMessage: 'Кол-во',
  },
  complete: {
    id: 'main.market.order.complete',
    defaultMessage: 'Выполненно',
  },
  total: {
    id: 'main.market.order.total',
    defaultMessage: 'Всего',
  },
  currentPrice: {
    id: 'main.market.order.current_price',
    defaultMessage: 'Актуальная цена',
  },
  empty: {
    id: 'main.market.empty',
    defaultMessage: 'Список пуст'
  },
})

const Orders = ({ intl }) => (
  <Column>
    <Layout>
      <Row>
        <Layout basis='10%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.date)}
          </Text>
        </Layout>
        <Layout basis='10%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.pair)}
          </Text>
        </Layout>
        <Layout basis='10%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.type)}
          </Text>
        </Layout>
        <Layout basis='10%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.price)}
          </Text>
        </Layout>
        <Layout basis='15%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.count)}
          </Text>
        </Layout>
        <Layout basis='15%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.complete)}
          </Text>
        </Layout>
        <Layout basis='15%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.total)}
          </Text>
        </Layout>
        <Layout basis='15%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.currentPrice)}
          </Text>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='10px' />
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
  </Column>
)

export default injectIntl(Orders)
