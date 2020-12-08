import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Header as BaseHeader, HeaderNavigationItem, HeaderLink } from '@c3/ui/src/header'
import { DropdownButton } from '@c3/ui/src/button'
import { Divider } from '@c3/ui/src/divider'
import { Locale } from '@c3/ui/src/locale'
import { Link } from '@c3/ui/src/link'
import { Logo } from '@c3/ui/src/logo'
import { Space } from '@c3/ui/src/text'
import { ArroyYellowRightIcon } from '@c3/ui/src/icons'
import messages from '../messages'

const Header = ({
  intl,
  locale,
  onChangeLocale,
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
        <HeaderNavigationItem exact to='/'>
          {intl.formatMessage(messages.ico)}
        </HeaderNavigationItem>
        <HeaderNavigationItem to='/token'>
          {intl.formatMessage(messages.token)}
        </HeaderNavigationItem>
        <HeaderNavigationItem to='/invest'>
          {intl.formatMessage(messages.invest)}
        </HeaderNavigationItem>
        <HeaderNavigationItem to='/bank'>
          {intl.formatMessage(messages.bank)}
        </HeaderNavigationItem>
        <HeaderNavigationItem to='/bounty'>
          {intl.formatMessage(messages.bounty)}
        </HeaderNavigationItem>
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
        <HeaderLink to='/'>
          <ArroyYellowRightIcon />
          <Space />
          <Space />
          {intl.formatMessage(messages.enter)}
        </HeaderLink>
      </Layout>
      <Layout basis='16px' />
    </Row>
  </BaseHeader>
)

export default injectIntl(Header)
