import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Divider } from '@c3/ui/src/divider'
import { Text } from '@c3/ui/src/text'
import messages from '../messages'

const styles = StyleSheet.create({
  self: {
    background: '#f1f2f2',
    borderRadius: '3px',
    padding: '0 13px',
  },
})

const Stage = ({ intl, from, to, price }) => (
  <div className={styles()}>
    <Column>
      <Layout basis='20px' />
      <Layout>
        <Text
          size='small'
          weight='medium'
          color='gray400'
        >
          {from} - {to}
        </Text>
      </Layout>
      <Layout basis='14px' />
      <Layout justify='center'>
        <Text
          uppercase
          size='large'
          color='orange500'
        >
          {intl.formatMessage(messages.price)}
        </Text>
      </Layout>
      <Layout basis='10px' />
      <Layout>
        <Divider color='orange' />
      </Layout>
      <Layout basis='8px' />
      <Layout justify='center' align='center'>
        <Text
          size='xxxxlarge'
          weight='light'
        >
          {price}
        </Text>
        <Text
          size='xxlarge'
          weight='light'
        >
          $
        </Text>
      </Layout>
      <Layout basis='20px' />
    </Column>
  </div>
)

export default injectIntl(Stage)
