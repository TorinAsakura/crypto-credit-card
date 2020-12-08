import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Divider } from '@c3/ui/src/divider'
import { Link } from '@c3/ui/src/link'
import { Text } from '@c3/ui/src/text'
import { Meta } from '@c3/ui/src/meta'
import messages from '../../messages'

const ResetSuccess = ({ intl }) => (
  <Column>
    <Meta
      title={intl.formatMessage(messages.successTitle)}
      description={intl.formatMessage(messages.successDescription)}
    />
    <Layout basis='85px' />
    <Layout justify='center'>
      <Text
        size='xxlarge'
        color='white'
        weight='light'
        align='center'
        opacity
      >
        {intl.formatMessage(messages.success)}
      </Text>
    </Layout>
    <Layout basis='42px' />
    <Layout>
      <Divider transparent />
    </Layout>
    <Layout basis='21px' />
    <Layout justify='center'>
      <Link to='/auth' color='white'>
        <Text
          uppercase
          size='normal'
          color='yellow500'
        >
          {intl.formatMessage(messages.returnToLogin)}
        </Text>
      </Link>
    </Layout>
  </Column>
)

export default injectIntl(ResetSuccess)
