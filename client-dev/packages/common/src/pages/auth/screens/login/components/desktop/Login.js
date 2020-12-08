import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from '@c3/ui/src/divider'
import { Alert } from '@c3/ui/src/notifications'
import { Toggle } from '@c3/ui/src/animation'
import { AuthInput } from '@c3/ui/src/input'
import { Link } from '@c3/ui/src/link'
import { Text } from '@c3/ui/src/text'
import { Meta } from '@c3/ui/src/meta'
import messages from '../../messages'

const Login = ({
  intl,
  email,
  password,
  errors = {},
  onChangeEmail,
  onChangePassword,
  onLogin,
}) => (
  <Column>
    <Meta
      title={intl.formatMessage(messages.title)}
      description={intl.formatMessage(messages.description)}
    />
    <Layout basis='63px' />
    <Layout justify='center'>
      <Text
        size='xxlarge'
        color='white'
        weight='light'
        opacity
      >
        {intl.formatMessage(messages.auth)}
      </Text>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Toggle height={40} show={errors.email}>
        <Alert type='danger'>
          {errors.email}
        </Alert>
      </Toggle>
    </Layout>
    <Layout basis='12px' />
    <Layout>
      <AuthInput
        type='email'
        placeholder={intl.formatMessage(messages.username)}
        value={email}
        onEnter={onLogin}
        onChange={onChangeEmail}
      />
    </Layout>
    <Layout basis='16px' />
    <Layout>
      <AuthInput
        type='password'
        placeholder={intl.formatMessage(messages.password)}
        value={password}
        onEnter={onLogin}
        onChange={onChangePassword}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Row>
        <Layout>
          <Link to='/auth/restore'>
            <Text
              color='gray200'
              size='xsmall'
            >
              {intl.formatMessage(messages.forgot)}
            </Text>
          </Link>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='22px' />
    <Layout justify='center'>
      <Link onClick={onLogin}>
        <Text
          uppercase
          size='normal'
          color='yellow500'
        >
          {intl.formatMessage(messages.login)}
        </Text>
      </Link>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Divider transparent />
    </Layout>
    <Layout basis='16px' />
    <Layout justify='center'>
      <Link to='/auth/registration' color='white'>
        <Text
          uppercase
          size='xsmall'
          color='white300'
        >
          {intl.formatMessage(messages.register)}
        </Text>
      </Link>
    </Layout>
  </Column>
)

export default injectIntl(Login)
