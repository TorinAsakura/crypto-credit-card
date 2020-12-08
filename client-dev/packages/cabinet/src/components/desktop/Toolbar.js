import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Toolbar as BaseToolbar, Item } from '@c3/ui/src/toolbar'
import { Divider } from '@c3/ui/src/divider'
import messages from '../messages'

const Toolbar = ({ intl }) => (
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
        <Item to='/structure'>
          {intl.formatMessage(messages.sponsorshipBonus)}
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
        <Item to='/instruments'>
          {intl.formatMessage(messages.instruments)}
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
        <Item to='/settings'>
          {intl.formatMessage(messages.settings)}
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
      <Layout basis='24px' />
    </Column>
  </BaseToolbar>
)

export default injectIntl(Toolbar)
