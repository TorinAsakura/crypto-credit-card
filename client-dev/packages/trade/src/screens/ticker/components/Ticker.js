/* eslint-disable */
import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Input } from '@c3/ui/src/input'
import { Text } from '@c3/ui/src/text'
import Currency from './Currency'
import Lines from './Lines'

const messages = defineMessages({
  market: {
    id: 'main.ticker.market',
    defaultMessage: 'Маркет',
  },
  currency: {
    id: 'main.ticker.currency',
    defaultMessage: 'Валюта',
  },
  price: {
    id: 'main.ticker.price',
    defaultMessage: 'Цена',
  },
  volume: {
    id: 'main.ticker.volume',
    defaultMessage: 'Объем',
  },
  changes: {
    id: 'main.ticker.changes',
    defaultMessage: 'Изменения',
  },
})

const Ticker = ({ intl, filter, currency, pair, pairs, onChangeCurrency, onChangePair, onChangeFilter }) => (
  <Block>
    <Row fill>
      <Layout basis='16px' />
      <Layout shrink={1} grow={1}>
        <Column fill>
          <Layout basis='8px' />
          <Layout>
            <Row align='center'>
              <Layout>
                <Text
                  uppercase
                  size='small'
                  weight='bold'
                >
                  {intl.formatMessage(messages.market)}
                </Text>
              </Layout>
              <Layout basis='14px' />
              <Layout shrink={1} grow={1}>
                <Input
                  size='xsmall'
                  value={filter}
                  onChange={onChangeFilter}
                />
              </Layout>
            </Row>
          </Layout>
          <Layout basis='8px' />
          <Layout>
            <Row>
              {Object.keys(pairs).map(key => (
                <Layout key={key}>
                  <Currency current={key === currency} onClick={() => onChangeCurrency(key)}>
                    {key}
                  </Currency>
                </Layout>
              ))}
            </Row>
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
                  {intl.formatMessage(messages.currency)}
                </Text>
              </Layout>
              <Layout basis='30%'>
                <Text
                  size='small'
                  weight='bold'
                  color='gray400'
                >
                  {intl.formatMessage(messages.price)}
                </Text>
              </Layout>
              <Layout basis='28%'>
                <Text
                  size='small'
                  weight='bold'
                  color='gray400'
                >
                  {intl.formatMessage(messages.volume)}
                </Text>
              </Layout>
              <Layout basis='20%'>
                <Text
                  size='small'
                  weight='bold'
                  color='gray400'
                >
                  {intl.formatMessage(messages.changes)}
                </Text>
              </Layout>
            </Row>
          </Layout>
          <Layout basis='6px' />
          <Layout>
            <Divider color='gray' />
          </Layout>
          <Layout basis='8px' />
          <Layout shrink={1} grow={1} overflowX='hidden'>
            <Lines />
          </Layout>
          <Layout basis='8px' />
        </Column>
      </Layout>
      <Layout basis='16px' />
    </Row>
  </Block>
)

export default injectIntl(Ticker)
