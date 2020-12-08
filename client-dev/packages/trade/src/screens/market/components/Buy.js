/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'
import Block from './Block'

const offset = window.innerHeight - 140

const messages = defineMessages({
  price: {
    id: 'main.market.buy.price',
    defaultMessage: 'Цена',
  },
  count: {
    id: 'main.market.buy.count',
    defaultMessage: 'Кол-во',
  },
  empty: {
    id: 'main.market.buy.empty',
    defaultMessage: 'Список пуст'
  },
  title: {
    id: 'main.market.buy.title',
    defaultMessage: 'Ордеры на продажу',
  },
  name: {
    id: 'main.market.buy.name',
    defaultMessage: 'Купить',
  },
  action: {
    id: 'main.market.buy.action',
    defaultMessage: 'Продать',
  },
})

const Deals = ({ intl }) => (
  <Column>
    <Layout>
      <Block
        message={intl.formatMessage(messages.name)}
        color='green500'
        buttonMessage={intl.formatMessage(messages.action)}
        buttonColor='green'
      />
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Text
        color='yellow500'
        weight='bold'
      >
        {intl.formatMessage(messages.title)}
      </Text>
    </Layout>
    <Layout basis='21px' />
    <Layout>
      <Row>
        <Layout basis='40%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.price)}
          </Text>
        </Layout>
        <Layout basis='30%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.count)}
          </Text>
        </Layout>
        <Layout basis='30%'>
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
