import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Toolbar, Item } from '@c3/ui/src/toolbar'
import { Divider } from '@c3/ui/src/divider'
import { Links } from '@c3/ui/src/social'
import { Text } from '@c3/ui/src/text'
import { FadeInOut } from '@c3/ui/src/animation'
import messages from '../messages'

const Drawer = ({ intl, show, from, to, price }) => (
  <FadeInOut fill show={show}>
    <Toolbar>
      <Column>
        <Layout basis='16px' />
        <Layout>
          <Item exact to='/' center>
            {intl.formatMessage(messages.controlPanel)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/transactions' center>
            {intl.formatMessage(messages.transactionHistory)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/referals' center>
            {intl.formatMessage(messages.referals)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/account' center>
            {intl.formatMessage(messages.personalData)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
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
            <Layout grow={1} />
            <Layout basis='160px'>
              <Divider color='orange' />
            </Layout>
            <Layout grow={1} />
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
    </Toolbar>
  </FadeInOut>
)

export default injectIntl(Drawer)
