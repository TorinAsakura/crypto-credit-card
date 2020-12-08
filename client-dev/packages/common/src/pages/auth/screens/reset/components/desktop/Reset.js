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

const Reset = ({
  intl,
  password,
  confirmation,
  errors = {},
  onChangePassword,
  onChangeConfirmation,
  onReset,
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
        {intl.formatMessage(messages.reset)}
      </Text>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Toggle height={40} show={errors.password || errors.confirmation || errors.token}>
        <Alert type='danger'>
          {errors.password || errors.confirmation || errors.token}
        </Alert>
      </Toggle>
    </Layout>
    <Layout basis='12px' />
    <Layout>
      <AuthInput
        type='password'
        placeholder={intl.formatMessage(messages.password)}
        value={password}
        onEnter={onReset}
        onChange={onChangePassword}
      />
    </Layout>
    <Layout basis='16px' />
    <Layout>
      <AuthInput
        type='password'
        placeholder={intl.formatMessage(messages.confirmation)}
        value={confirmation}
        onEnter={onReset}
        onChange={onChangeConfirmation}
      />
    </Layout>
    <Layout basis='32px' />
    <Layout justify='center'>
      <Link onClick={onReset} color='yellow'>
        <Text
          uppercase
          size='normal'
          color='yellow500'
        >
          {intl.formatMessage(messages.change)}
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

export default injectIntl(Reset)
