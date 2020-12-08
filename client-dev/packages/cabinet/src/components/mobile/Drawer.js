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
            {intl.formatMessage(messages.controlPanel)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/structure' center>
            {intl.formatMessage(messages.sponsorshipBonus)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/instruments' center>
            {intl.formatMessage(messages.instruments)}
          </Item>
        </Layout>
        <Layout>
          <Divider transparent />
        </Layout>
        <Layout>
          <Item to='/settings' center>
            {intl.formatMessage(messages.settings)}
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
