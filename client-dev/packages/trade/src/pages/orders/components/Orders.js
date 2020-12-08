/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'

const offset = window.innerHeight - 140

const messages = defineMessages({
  orders: {
    id: 'private.orders.orders',
    defaultMessage: 'Заказы',
  },
  deals: {
    id: 'private.orders.deals',
    defaultMessage: 'Ваши сделки',
  },
  pair: {
    id: 'private.orders.pair',
    defaultMessage: 'Пара',
  },
  type: {
    id: 'private.orders.type',
    defaultMessage: 'Тип',
  },
  count: {
    id: 'private.orders.count',
    defaultMessage: 'Кол-во',
  },
  price: {
    id: 'private.orders.price',
    defaultMessage: 'Цена',
  },
  total: {
    id: 'private.orders.total',
    defaultMessage: 'Всего',
  },
  date: {
    id: 'private.orders.date',
    defaultMessage: 'Дата',
  },
  empty: {
    id: 'private.orders.empty',
    defaultMessage: 'Список пуст',
  },
  yourOrders: {
    id: 'private.orders.your_orders',
    defaultMessage: 'Ваши ордера',
  },
  complete: {
    id: 'private.orders.complete',
    defaultMessage: 'Выполнено',
  },
  currentPrice: {
    id: 'private.orders.current_price',
    defaultMessage: 'Актуальная цена',
  },
})

const Orders = ({ intl }) => (
  <Column>
    <Layout>
      <Text
        size='xxlarge'
        weight='light'
        color='green800'
      >
        {intl.formatMessage(messages.orders)}
      </Text>
    </Layout>
    <Layout basis='29px' />
    <Layout>
      <Text
        size='medium'
        color='gray400'
        weight='light'
      >
        {intl.formatMessage(messages.deals)}
      </Text>
    </Layout>
    <Layout basis='32px' />
    <Layout>
      <Row>
        <Layout basis='15%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.pair)}
          </Text>
        </Layout>
        <Layout basis='15%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.type)}
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
        <Layout basis='20%'>
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
            {intl.formatMessage(messages.total)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.date)}
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
    <Layout basis='15px' />
    <Layout>
      <Divider color='gray' />
    </Layout>
    <Layout basis='29px' />
    <Layout>
      <Text
        size='medium'
        color='gray400'
        weight='light'
      >
        {intl.formatMessage(messages.yourOrders)}
      </Text>
    </Layout>
    <Layout basis='32px' />
    <Layout>
      <Row>
        <Layout basis='15%'>
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
        <Layout basis='10%'>
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
    <Layout basis={`${offset}px`} />
  </Column>
)

export default injectIntl(Orders)
