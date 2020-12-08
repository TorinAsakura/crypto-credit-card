import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Text } from '@c3/ui/src/text'
import messages from '../../messages'

const Line = ({ field, value }) => (
  <Row>
    <Layout basis='16px' />
    <Layout basis='125px'>
      <Text size='small'>
        {field}
      </Text>
    </Layout>
    <Layout basis='20px' />
    <Layout shrink={1} grow={1}>
      <Text size='small' color='gray400'>
        {value}
      </Text>
    </Layout>
    <Layout basis='16px' />
  </Row>
)

const Transactions = ({ intl, transactions = [] }) => (
  <Column>
    <Layout basis='14px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        color='gray200'
      >
        {intl.formatMessage(messages.history)}
      </Text>
    </Layout>
    <Layout basis='14px' />
    <Layout>
      <Block>
        <Column>
          {transactions.map(({ id, createdAt, amount, cccrAmount, confirmed }) => ([
            <Layout key={`${id}-offset1`} basis='24px' />,
            <Layout key={`${id}-line1`}>
              <Line
                field={intl.formatMessage(messages.date)}
                value={intl.formatDate(createdAt, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              />
            </Layout>,
            <Layout key={`${id}-offset2`} basis='10px' />,
            <Layout key={`${id}-line2`}>
              <Line
                field={intl.formatMessage(messages.ethCount)}
                value={amount}
              />
            </Layout>,
            <Layout key={`${id}-offset3`} basis='10px' />,
            <Layout key={`${id}-line3`}>
              <Line
                field={intl.formatMessage(messages.cccrCount)}
                value={cccrAmount}
              />
            </Layout>,
            <Layout key={`${id}-offset4`} basis='10px' />,
            <Layout key={`${id}-line4`}>
              <Line
                field={intl.formatMessage(messages.status)}
                value={confirmed}
              />
            </Layout>,
            <Layout key={`${id}-offset5`} basis='24px' />,
            <Layout key={`${id}-divider`}>
              <Divider color='gray' />
            </Layout>,
          ]))}
        </Column>
      </Block>
    </Layout>
  </Column>
)

export default injectIntl(Transactions)
