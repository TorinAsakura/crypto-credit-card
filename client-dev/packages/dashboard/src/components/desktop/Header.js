import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Header as BaseHeader } from '@c3/ui/src/header'
import { DropdownButton } from '@c3/ui/src/button'
import { Divider } from '@c3/ui/src/divider'
import { Locale } from '@c3/ui/src/locale'
import { Link } from '@c3/ui/src/link'
import { Logo } from '@c3/ui/src/logo'
import { Text } from '@c3/ui/src/text'
import messages from '../messages'
import Profile from './Profile'

const Header = ({
  intl,
  email,
  locale,
  invested,
  showProfile,
  onLogout,
  onChangeLocale,
  onToggleProfile,
}) => (
  <BaseHeader>
    <Row align='center'>
      <Layout basis='16px' />
      <Layout >
        <Column>
          <Layout basis='11px' />
          <Layout>
            <Link plain to='/'>
              <Logo
                color='black'
                position='center'
              />
            </Link>
          </Layout>
          <Layout basis='10px' />
        </Column>
      </Layout>
      <Layout grow={1} justify='center'>
        <Text color='green500'>
          $
        </Text>
        <Layout basis='10px' />
        <Text uppercase >
          {intl.formatMessage(messages.invested)}:
        </Text>
        <Layout basis='10px' />
        <Text color='yellow500'>
          {invested}
        </Text>
      </Layout>
      <Layout>
        <Locale
          width={13}
          color='black'
          name={locale}
          onChange={onChangeLocale}
        />
      </Layout>
      <Layout basis='24px' />
      <Divider vertical color='gray' />
      <Layout basis='26px' />
      <Layout>
        <DropdownButton onClick={onToggleProfile}>
          {email}
        </DropdownButton>
        <Profile
          show={showProfile}
          onLogout={onLogout}
          onToggle={onToggleProfile}
        />
      </Layout>
      <Layout basis='16px' />
    </Row>
  </BaseHeader>
)

export default injectIntl(Header)
