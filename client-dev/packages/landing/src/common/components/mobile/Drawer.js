import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Toolbar, Item } from '@c3/ui/src/toolbar'
import { Divider } from '@c3/ui/src/divider'
import { FadeInOut } from '@c3/ui/src/animation'
import messages from '../messages'

const Drawer = ({ intl, show }) => (
  <FadeInOut fill show={show}>
    <Toolbar drawer>
      <Column>
        <Layout basis='16px' />
        <Layout>
          <Item exact to='/' center>
            {intl.formatMessage(messages.ico)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/token' center>
            {intl.formatMessage(messages.token)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/invest' center>
            {intl.formatMessage(messages.invest)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/bounty' center>
            {intl.formatMessage(messages.bank)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/bank' center>
            {intl.formatMessage(messages.bounty)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout basis='24px' />
      </Column>
    </Toolbar>
  </FadeInOut>
)

export default injectIntl(Drawer)
