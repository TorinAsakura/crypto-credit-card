import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Header as BaseHeader, HeaderItem, HeaderButton, HeaderLink } from '@c3/ui/src/header'
import { DropdownButton } from '@c3/ui/src/button'
import { Condition } from '@c3/ui/src/condition'
import { AlertIcon } from '@c3/ui/src/icons'
import { Divider } from '@c3/ui/src/divider'
import { Locale } from '@c3/ui/src/locale'
import { Link } from '@c3/ui/src/link'
import { Logo } from '@c3/ui/src/logo'
import messages from '../messages'
import Profile from './Profile'

const Header = ({
  intl,
  email,
  locale,
  showProfile,
  onLogin,
  onLogout,
  onChangeLocale,
  onToggleProfile,
}) => (
  <BaseHeader>
    <Row align='center'>
      <Layout basis='16px' />
      <Layout >
        <Column>
          <Layout basis='4px' />
          <Layout>
            <Link plain to='/'>
              <Logo
                color='black'
                position='center'
              />
            </Link>
          </Layout>
          <Layout basis='3px' />
        </Column>
      </Layout>
      <Layout basis='90px' />
      <Layout>
        <HeaderItem to='/' exact>
          {intl.formatMessage(messages.trades)}
        </HeaderItem>
      </Layout>
      <Layout basis='5px' />
      <Layout>
        <HeaderItem to='/news'>
          {intl.formatMessage(messages.news)}
        </HeaderItem>
      </Layout>
      <Layout basis='5px' />
      <Layout>
        <HeaderItem to='/support'>
          {intl.formatMessage(messages.support)}
        </HeaderItem>
      </Layout>
      <Layout grow={1} justify='center' />
      <Layout>
        <Locale
          width={13}
          color='black'
          name={locale}
          onChange={onChangeLocale}
        />
      </Layout>
      <Layout basis='24px' />
      <Layout>
        <Column>
          <Layout basis='32px'>
            <Divider vertical color='gray' />
          </Layout>
        </Column>
      </Layout>
      <Condition match={email}>
        <Layout>
          <HeaderButton>
            <AlertIcon />
          </HeaderButton>
        </Layout>
        <Layout>
          <Column>
            <Layout basis='32px'>
              <Divider vertical color='gray' />
            </Layout>
          </Column>
        </Layout>
        <Layout basis='19px' />
        <Layout>
          <HeaderLink to='/private/wallet'>
            {intl.formatMessage(messages.wallet)}
          </HeaderLink>
        </Layout>
        <Layout basis='22px' />
        <Layout>
          <Column>
            <Layout basis='32px'>
              <Divider vertical color='gray' />
            </Layout>
          </Column>
        </Layout>
        <Layout basis='15px' />
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
      </Condition>
      <Condition match={!email}>
        <Layout basis='15px' />
        <Layout>
          <DropdownButton onClick={onLogin}>
            {intl.formatMessage(messages.login)}
          </DropdownButton>
        </Layout>
      </Condition>
      <Layout basis='16px' />
    </Row>
  </BaseHeader>
)

export default injectIntl(Header)
