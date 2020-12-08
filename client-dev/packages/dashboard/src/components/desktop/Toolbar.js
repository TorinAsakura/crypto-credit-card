import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Toolbar as BaseToolbar, Item } from '@c3/ui/src/toolbar'
import { Divider } from '@c3/ui/src/divider'
import { Links } from '@c3/ui/src/social'
import { Text } from '@c3/ui/src/text'
import messages from '../messages'

const Toolbar = ({ intl, from, to, price }) => (
  <BaseToolbar>
    <Column>
      <Layout basis='16px' />
      <Layout>
        <Item exact to='/'>
          {intl.formatMessage(messages.controlPanel)}
        </Item>
      </Layout>
      <Layout>
        <Row>
          <Layout basis='16px' />
          <Layout grow={1}>
            <Divider transparent />
          </Layout>
          <Layout basis='24px' />
        </Row>
      </Layout>
      <Layout>
        <Item to='/transactions'>
          {intl.formatMessage(messages.transactionHistory)}
        </Item>
      </Layout>
      <Layout>
        <Row>
          <Layout basis='16px' />
          <Layout grow={1}>
            <Divider transparent />
          </Layout>
          <Layout basis='24px' />
        </Row>
      </Layout>
      <Layout>
        <Item to='/referals'>
          {intl.formatMessage(messages.referals)}
        </Item>
      </Layout>
      <Layout>
        <Row>
          <Layout basis='16px' />
          <Layout grow={1}>
            <Divider transparent />
          </Layout>
          <Layout basis='24px' />
        </Row>
      </Layout>
      <Layout>
        <Item to='/account'>
          {intl.formatMessage(messages.personalData)}
        </Item>
      </Layout>
      <Layout>
        <Row>
          <Layout basis='16px' />
          <Layout grow={1}>
            <Divider transparent />
          </Layout>
          <Layout basis='24px' />
        </Row>
      </Layout>
      <Layout basis='40px' />
      <Layout justify='center'>
        <Text
          uppercase
          size='large'
          color='white'
        >
          {intl.formatMessage(messages.now)}
        </Text>
      </Layout>
      <Layout basis='6px' />
      <Layout justify='center'>
        <Text
          uppercase
          size='small'
          color='gray400'
        >
          {from} - {to}
        </Text>
      </Layout>
      <Layout basis='14px' />
      <Layout justify='center'>
        <Text
          uppercase
          size='large'
          color='orange500'
        >
          {intl.formatMessage(messages.price)}
        </Text>
      </Layout>
      <Layout basis='8px' />
      <Layout>
        <Row>
          <Layout basis='23px' />
          <Layout grow={1}>
            <Divider color='orange' />
          </Layout>
          <Layout basis='25px' />
        </Row>
      </Layout>
      <Layout basis='6px' />
      <Layout justify='center' align='center'>
        <Text
          size='xxxxlarge'
          weight='light'
          color='white'
        >
          {price}
        </Text>
        <Text
          size='xxlarge'
          weight='light'
          color='gray400'
        >
          $
        </Text>
      </Layout>
      <Layout basis='28px' />
      <Layout>
        <Links />
      </Layout>
      <Layout basis='24px' />
    </Column>
  </BaseToolbar>
)

export default injectIntl(Toolbar)
