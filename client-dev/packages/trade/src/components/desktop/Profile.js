import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { LogoutIcon } from '@c3/ui/src/icons'
import { Divider } from '@c3/ui/src/divider'
import { Menu, MenuItem } from '@c3/ui/src/menu'
import { Layer } from '@c3/ui/src/layer'
import { Condition } from '@c3/ui/src/condition'
import { Link } from '@c3/ui/src/link'
import messages from '../messages'

const Profile = ({ intl, show, onToggle, onLogout }) => (
  <Condition match={show}>
    <Layer
      align='tr-br'
      offset='-10px 0px'
      onOutsideClick={onToggle}
    >
      <Menu>
        <Link to='/private/info'>
          <MenuItem>
            {intl.formatMessage(messages.info)}
          </MenuItem>
        </Link>
        <Row>
          <Layout basis='23px' />
          <Layout grow={1}>
            <Divider color='gray' />
          </Layout>
          <Layout basis='24px' />
        </Row>
        <Link to='/private/wallet'>
          <MenuItem>
            {intl.formatMessage(messages.wallet)}
          </MenuItem>
        </Link>
        <Row>
          <Layout basis='23px' />
          <Layout grow={1}>
            <Divider color='gray' />
          </Layout>
          <Layout basis='24px' />
        </Row>
        <Link to='/private/orders'>
          <MenuItem>
            {intl.formatMessage(messages.orders)}
          </MenuItem>
        </Link>
        <Row>
          <Layout basis='23px' />
          <Layout grow={1}>
            <Divider color='gray' />
          </Layout>
          <Layout basis='24px' />
        </Row>
        <Link to='/private/security'>
          <MenuItem>
            {intl.formatMessage(messages.security)}
          </MenuItem>
        </Link>
        <Row>
          <Layout basis='23px' />
          <Layout grow={1}>
            <Divider color='gray' />
          </Layout>
          <Layout basis='24px' />
        </Row>
        <Link to='/private/api'>
          <MenuItem>
            {intl.formatMessage(messages.api)}
          </MenuItem>
        </Link>
        <Row>
          <Layout basis='23px' />
          <Layout grow={1}>
            <Divider color='gray' />
          </Layout>
          <Layout basis='24px' />
        </Row>
        <MenuItem onClick={onLogout}>
          <div style={{ width: 140 }}>
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
          </div>
        </MenuItem>
      </Menu>
    </Layer>
  </Condition>
)

export default injectIntl(Profile)
