import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Alert } from '@c3/ui/src/notifications'
import { Toggle } from '@c3/ui/src/animation'
import { Divider } from '@c3/ui/src/divider'
import { AuthInput } from '@c3/ui/src/input'
import { Link } from '@c3/ui/src/link'
import { Text } from '@c3/ui/src/text'
import { Meta } from '@c3/ui/src/meta'
import messages from '../../messages'

const Registration = ({
  intl,
  email,
  errors = {},
  onChangeEmail,
  onRegister,
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
        {intl.formatMessage(messages.signup)}
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
        placeholder={intl.formatMessage(messages.email)}
        value={email}
        onEnter={onRegister}
        onChange={onChangeEmail}
      />
    </Layout>
    <Layout basis='32px' />
    <Layout justify='center'>
      <Link onClick={onRegister} color='yellow'>
        <Text
          uppercase
          size='normal'
          color='yellow500'
        >
          {intl.formatMessage(messages.register)}
        </Text>
      </Link>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Divider transparent />
    </Layout>
    <Layout basis='16px' />
    <Layout justify='center'>
      <Link to='/auth' color='white'>
        <Text
          uppercase
          size='xsmall'
          color='white300'
        >
          {intl.formatMessage(messages.login)}
        </Text>
      </Link>
    </Layout>
  </Column>
)

export default injectIntl(Registration)
