/* eslint-disable */
import React from 'react'
import QRCode from 'qrcode.react'
import { injectIntl, defineMessages } from 'react-intl'
import { CopyButton } from '@c3/ui/src/clipboard'
import { JumpIcon } from '@c3/ui/src/icons'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'
import { Input } from '@c3/ui/src/input'
import { Button } from '@c3/ui/src/button'

const offset = window.innerHeight - 140
const key = Math.random().toString(36).slice(2)

const messages = defineMessages({
  apiKeys: {
    id: 'private.api_keys.api_keys',
    defaultMessage: 'API ключи',
  },
  copied: {
    id: 'private.api_keys.copied',
    defaultMessage: 'Скопировано',
  },
  update: {
    id: 'private.api_keys.update',
    defaultMessage: 'Обновить ключи',
  },
})

const Api = ({ intl }) => (
  <Column>
    <Layout>
      <Text
        size='xxlarge'
        weight='light'
        color='green800'
      >
        {intl.formatMessage(messages.apiKeys)}
      </Text>
    </Layout>
    <Layout basis='32px' />
    <Layout>
      <Row>
        <Layout>
          <QRCode value={key} />
        </Layout>
        <Layout basis='40px' />
        <Layout basis='440px'>
          <Column>
            <Layout>
              <Row justify='center' align='center'>
                <Layout shrink={1} grow={1}>
                  <Input
                    disabled
                    attach='right'
                    title='API key'
                    value={key}
                  />
                </Layout>
                <Layout>
                  <CopyButton
                    attach='left'
                    text={key}
                    message={intl.formatMessage(messages.copied)}
                  />
                </Layout>
              </Row>
            </Layout>
            <Layout basis='28px' />
            <Layout>
              <Row justify='center' align='center'>
                <Layout shrink={1} grow={1}>
                  <Input
                    disabled
                    attach='right'
                    title='API secret'
                    value={key}
                  />
                </Layout>
                <Layout>
                  <CopyButton
                    attach='left'
                    text={key}
                    message={intl.formatMessage(messages.copied)}
                  />
                </Layout>
              </Row>
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <Button>
                {intl.formatMessage(messages.update)}
              </Button>
            </Layout>
          </Column>
        </Layout>
      </Row>
    </Layout>
    <Layout basis={`${offset}px`} />
  </Column>
)

export default injectIntl(Api)
