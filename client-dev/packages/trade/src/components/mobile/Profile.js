import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { LogoutIcon } from '@c3/ui/src/icons'
import { Menu, MenuItem } from '@c3/ui/src/menu'
import { SlideIn } from '@c3/ui/src/animation'
import { Divider } from '@c3/ui/src/divider'
import messages from '../messages'

const Profile = ({ intl, show }) => (
  <SlideIn
    from={-365}
    to={0}
    show={show}
  >
    <Menu plain>
      <MenuItem>
        {intl.formatMessage(messages.info)}
      </MenuItem>
      <Row>
        <Layout basis='23px' />
        <Layout grow={1}>
          <Divider color='gray' />
        </Layout>
        <Layout basis='24px' />
      </Row>
      <MenuItem>
        {intl.formatMessage(messages.wallet)}
      </MenuItem>
      <Row>
        <Layout basis='23px' />
        <Layout grow={1}>
          <Divider color='gray' />
        </Layout>
        <Layout basis='24px' />
      </Row>
      <MenuItem>
        {intl.formatMessage(messages.orders)}
      </MenuItem>
      <Row>
        <Layout basis='23px' />
        <Layout grow={1}>
          <Divider color='gray' />
        </Layout>
        <Layout basis='24px' />
      </Row>
      <MenuItem>
        {intl.formatMessage(messages.security)}
      </MenuItem>
      <Row>
        <Layout basis='23px' />
        <Layout grow={1}>
          <Divider color='gray' />
        </Layout>
        <Layout basis='24px' />
      </Row>
      <MenuItem>
        {intl.formatMessage(messages.verification)}
      </MenuItem>
      <Row>
        <Layout basis='23px' />
        <Layout grow={1}>
          <Divider color='gray' />
        </Layout>
        <Layout basis='24px' />
      </Row>
      <MenuItem>
        {intl.formatMessage(messages.api)}
      </MenuItem>
      <Row>
        <Layout basis='23px' />
        <Layout grow={1}>
          <Divider color='gray' />
        </Layout>
        <Layout basis='24px' />
      </Row>
      <MenuItem>
        <Row align='center'>
          <Layout grow={1}>
            <div>
              {intl.formatMessage(messages.logout)}
            </div>
          </Layout>
          <Layout>
            <LogoutIcon />
          </Layout>
        </Row>
      </MenuItem>
    </Menu>
  </SlideIn>
)

export default injectIntl(Profile)
