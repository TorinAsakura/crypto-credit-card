import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Text } from '@c3/ui/src/text'
import messages from '../../messages'

const Transactions = ({ intl, transactions = [] }) => (
  <Row>
    <Layout basis='24px' />
    <Layout shrink={1} grow={1}>
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
        <Layout justify='center'>
          <Block fixed>
            <Row>
              <Layout basis='32px' />
              <Layout shrink={1} grow={1}>
                <Column>
                  <Layout basis='30px' />
                  <Layout>
                    <Row>
                      <Layout basis='3px' />
                      <Layout shrink={1} basis='25%'>
                        <Text size='small'>
                          {intl.formatMessage(messages.date)}
                        </Text>
                      </Layout>
                      <Layout basis='18px' />
                      <Layout shrink={1} basis='25%'>
                        <Text size='small'>
                          {intl.formatMessage(messages.ethCount)}
                        </Text>
                      </Layout>
                      <Layout basis='18px' />
                      <Layout shrink={1} basis='25%'>
                        <Text size='small'>
                          {intl.formatMessage(messages.cccrCount)}
                        </Text>
                      </Layout>
                      <Layout basis='18px' />
                      <Layout shrink={1} basis='25%'>
                        <Text size='small'>
                          {intl.formatMessage(messages.status)}
                        </Text>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='18px' />
                  <Layout>
                    <Divider color='gray' />
                  </Layout>
                  {transactions.map(transaction => ([
                    <Layout key={`${transaction.id}-offset1`} basis='13px' />,
                    <Layout key={transaction.id}>
                      <Row>
                        <Layout basis='3px' />
                        <Layout shrink={1} basis='25%'>
                          <Text size='small' color='gray400'>
                            {intl.formatDate(transaction.createdAt, {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </Text>
                        </Layout>
                        <Layout basis='18px' />
                        <Layout shrink={1} basis='25%'>
                          <Text size='small' color='gray400'>
                            {transaction.amount}
                          </Text>
                        </Layout>
                        <Layout basis='18px' />
                        <Layout shrink={1} basis='25%'>
                          <Text size='small' color='gray400'>
                            {transaction.cccrAmount}
                          </Text>
                        </Layout>
                        <Layout basis='18px' />
                        <Layout shrink={1} basis='25%'>
                          <Text size='small' color='gray400'>
                            {transaction.confirmed}
                          </Text>
                        </Layout>
                      </Row>
                    </Layout>,
                    <Layout key={`${transaction.id}-offset2`} basis='12px' />,
                    <Layout key={`${transaction.id}-divider`}>
                      <Divider color='gray' />
                    </Layout>,
                  ]))}
                  <Layout basis='30px' />
                </Column>
              </Layout>
              <Layout basis='32px' />
            </Row>
          </Block>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(Transactions)
