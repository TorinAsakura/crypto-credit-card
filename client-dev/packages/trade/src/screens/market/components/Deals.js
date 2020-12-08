/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'

const offset = window.innerHeight - 140

const messages = defineMessages({
  date: {
    id: 'main.market.deals.date',
    defaultMessage: 'Дата',
  },
  type: {
    id: 'main.market.deals.type',
    defaultMessage: 'Тип',
  },
  price: {
    id: 'main.market.deals.price',
    defaultMessage: 'Цена',
  },
  count: {
    id: 'main.market.deals.count',
    defaultMessage: 'Количество',
  },
  empty: {
    id: 'private.wallet.empty',
    defaultMessage: 'Список пуст'
  },
})

const Deals = ({ intl }) => (
  <Column>
    <Layout>
      <Row>
        <Layout basis='25%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.date)}
          </Text>
        </Layout>
        <Layout basis='25%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.type)}
          </Text>
        </Layout>
        <Layout basis='25%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.price)}
          </Text>
        </Layout>
        <Layout basis='25%'>
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

export default injectIntl(Deals)
