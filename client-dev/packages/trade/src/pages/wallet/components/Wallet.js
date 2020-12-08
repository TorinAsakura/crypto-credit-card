/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'

const offset = window.innerHeight - 140

const messages = defineMessages({
  wallet: {
    id: 'private.wallet.wallet',
    defaultMessage: 'Кошелек',
  },
  amount: {
    id: 'private.wallet.amount',
    defaultMessage: 'Сумма балансов аккаунта:',
  },
  currency: {
    id: 'private.wallet.currency',
    defaultMessage: 'Валюта',
  },
  balance: {
    id: 'private.wallet.balance',
    defaultMessage: 'Баланс',
  },
  waiting: {
    id: 'private.wallet.waiting',
    defaultMessage: 'В ожидании зачисления',
  },
  orders: {
    id: 'private.wallet.orders',
    defaultMessage: 'В ордерах',
  },
  empty: {
    id: 'private.wallet.empty',
    defaultMessage: 'Список пуст'
  },
})

const Wallet = ({ intl }) => (
  <Column>
    <Layout>
      <Text
        size='xxlarge'
        weight='light'
        color='green800'
      >
        {intl.formatMessage(messages.wallet)}
      </Text>
    </Layout>
    <Layout basis='32px' />
    <Layout align='center'>
      <Text
        size='medium'
        color='gray400'
      >
        {intl.formatMessage(messages.amount)}
      </Text>
      <Space />
      <Text size='large'>
        0
      </Text>
      <Space />
      <Text
        size='medium'
        color='gray400'
      >
        USD
      </Text>
    </Layout>
    <Layout basis='40px' />
    <Layout>
      <Row>
        <Layout basis='15%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.currency)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.balance)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.waiting)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.orders)}
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

export default injectIntl(Wallet)
