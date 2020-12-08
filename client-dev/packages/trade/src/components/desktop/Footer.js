/* eslint-disable */
import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Header as BaseHeader, HeaderItem, HeaderButton, HeaderLink } from '@c3/ui/src/header'
import { DropdownButton } from '@c3/ui/src/button'
import { AlertIcon } from '@c3/ui/src/icons'
import { Divider } from '@c3/ui/src/divider'
import { Locale } from '@c3/ui/src/locale'
import { Link } from '@c3/ui/src/link'
import { Logo } from '@c3/ui/src/logo'
import { Text, Space } from '@c3/ui/src/text'
import messages from '../messages'
import Profile from './Profile'

const Footer = ({ intl }) => (
  <div style={{ width: '100%', background: '#ffffff', padding: '15px 40px' }}>
    <Row align='center'>
      <Layout basis='16px' />
      <Layout >
        <Link plain to='/'>
          <Logo
            color='black'
            position='center'
          />
        </Link>
      </Layout>
      <Layout shrink={1} grow ={1} />
      <Layout>
        <Column>
          <Layout basis='34px'>
            <Divider vertical color='gray' />
          </Layout>
        </Column>
      </Layout>
      <Layout basis='24px' />
      <Layout>
        <Link to='/' exact>
          <Text size='small'>
            {intl.formatMessage(messages.trades)}
          </Text>
        </Link>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Link to='/news'>
          <Text size='small'>
            {intl.formatMessage(messages.news)}
          </Text>
        </Link>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Link to='/support'>
          <Text size='small'>
            {intl.formatMessage(messages.support)}
          </Text>
        </Link>
      </Layout>
      <Layout basis='24px' />
      <Layout>
        <Column>
          <Layout basis='34px'>
            <Divider vertical color='gray' />
          </Layout>
        </Column>
      </Layout>
      <Layout shrink={1} grow ={1} />
      <Layout>
        <Column>
          <Layout align='center'>
            <a href='https://cccr.io'>
              <Text size='xsmall'>
                CRYPTO CREDIT CARD LTD
              </Text>
            </a>
            <Space />
            <Text
              size='xsmall'
              color='gray400'
            >
              (CRN 11112287) 180 TOTTENHAM COURT ROAD, LONDON, UK, W1T 7PD
            </Text>
          </Layout>
          <Layout basis='4px' />
          <Layout justify='center'>
            <Text
              size='xsmall'
              color='gray400'
            >
              Copyright © 2017-2018
            </Text>
          </Layout>
        </Column>
      </Layout>
    </Row>
  </div>
)

export default injectIntl(Footer)
