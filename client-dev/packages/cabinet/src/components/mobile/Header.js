import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Header as BaseHeader, HeaderButton } from '@c3/ui/src/header'
import { HamburgerIcon, UserIcon } from '@c3/ui/src/icons'
import { Divider } from '@c3/ui/src/divider'
import { Locale } from '@c3/ui/src/locale'
import { Link } from '@c3/ui/src/link'
import { Logo } from '@c3/ui/src/logo'

const Header = ({
  locale,
  onChangeLocale,
  onToggleProfile,
  onToggleToolbar,
}) => (
  <BaseHeader>
    <Row align='center'>
      <Layout>
        <HeaderButton onClick={onToggleToolbar}>
          <HamburgerIcon />
        </HeaderButton>
      </Layout>
      <Divider vertical color='gray' />
      <Layout basis='12px' />
      <Layout>
        <Link plain to='/'>
          <Logo
            height={30}
            color='black'
            position='center'
          />
        </Link>
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
      <Layout basis='15px' />
      <Divider vertical color='gray' />
      <Layout>
        <HeaderButton onClick={onToggleProfile}>
          <UserIcon />
        </HeaderButton>
      </Layout>
    </Row>
  </BaseHeader>
)

export default Header
