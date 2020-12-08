/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'
import { Input } from '@c3/ui/src/input'
import { Button } from '@c3/ui/src/button'

const messages = defineMessages({
  balance: {
    id: 'main.market.block.balance',
    defaultMessage: 'Баланс:',
  },
  price: {
    id: 'main.market.block.price',
    defaultMessage: 'Цена',
  },
  count: {
    id: 'main.market.block.count',
    defaultMessage: 'Кол-во',
  },
  total: {
    id: 'main.market.block.total',
    defaultMessage: 'Всего',
  },
})

const Block = ({ intl, message, action, color, buttonColor, buttonMessage }) => (
  <div style={{ background: '#f1f2f2', width: '100%', borderRadius: '3px' }}>
    <Column>
      <Layout basis='10px' />
      <Layout justify='center'>
        <Row>
          <Layout basis='18px' />
          <Layout basis='150px'>
            <Text
              color={color}
              size='medium'
            >
              {message}
            </Text>
          </Layout>
          <Layout align='center'>
            <Text
              size='small'
              color='gray400'
            >
              {intl.formatMessage(messages.balance)}
            </Text>
            <Space />
            <Text
              size='small'
              color='green500'
              weight='bold'
            >
              0 USD
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='10px' />
      <Layout>
        <Divider color='dark' />
      </Layout>
      <Layout basis='34px' />
      <Layout>
        <Row align='center'>
          <Layout basis='18px' />
          <Layout basis='150px'>
            <Text
              size='small'
              color='gray600'
            >
              {intl.formatMessage(messages.price)}
            </Text>
          </Layout>
          <Layout shrink={1} grow={1}>
            <Input
              disabled
              placeholder='100'
              size='small'
            />
          </Layout>
          <Layout basis='18px' />
        </Row>
      </Layout>
      <Layout basis='8px' />
      <Layout>
        <Row align='center'>
          <Layout basis='18px' />
          <Layout basis='150px'>
            <Text
              size='small'
              color='gray600'
            >
              {intl.formatMessage(messages.count)}
            </Text>
          </Layout>
          <Layout shrink={1} grow={1}>
            <Input
              disabled
              placeholder='100'
              size='small'
            />
          </Layout>
          <Layout basis='18px' />
        </Row>
      </Layout>
      <Layout basis='8px' />
      <Layout>
        <Row align='center'>
          <Layout basis='18px' />
          <Layout basis='150px'>
            <Text
              size='small'
              color='gray600'
            >
              {intl.formatMessage(messages.total)}
            </Text>
          </Layout>
          <Layout shrink={1} grow={1}>
            <Input
              disabled
              placeholder='100'
              size='small'
            />
          </Layout>
          <Layout basis='18px' />
        </Row>
      </Layout>
      <Layout basis='24px' />
      <Layout>
        <Row>
          <Layout grow={1} />
          <Layout>
            <Button color={buttonColor} size='small'>
              {buttonMessage}
            </Button>
          </Layout>
          <Layout basis='18px' />
        </Row>
      </Layout>
      <Layout basis='24px' />
    </Column>
  </div>
)

export default injectIntl(Block)
