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
const key = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)

const messages = defineMessages({
  security: {
    id: 'private.security.title',
    defaultMessage: 'Безопасность',
  },
  twoStepAuth: {
    id: 'private.security.two_step_auth',
    defaultMessage: 'Двухфакторная аутентификация',
  },
  key: {
    id: 'private.security.secret_key',
    defaultMessage: 'Секретный ключ',
  },
  copied: {
    id: 'private.security.copied',
    defaultMessage: 'Скопировано',
  },
  turnOn: {
    id: 'private.security.turn_on',
    defaultMessage: 'Включить',
  },
  blocking: {
    id: 'private.security.blocking',
    defaultMessage: 'Добровольная блокировка',
  },
  blockingType: {
    id: 'private.security.blocking_type',
    defaultMessage: 'Тип блокировки',
  },
  conclusion: {
    id: 'private.security.conclusion',
    defaultMessage: 'Вывод',
  },
  term: {
    id: 'private.security.term',
    defaultMessage: 'Срок блокировки',
  },
  description: {
    id: 'private.security.description',
    defaultMessage: 'Максимальный срок блокировки - 30 дней. После подтверждения блокировки по почте отмена данной блокировки будет невозможна.',
  },
  block: {
    id: 'private.security.block',
    defaultMessage: 'Заблокировать',
  },
})

const Security = ({ intl }) => (
  <Column>
    <Layout>
      <Text
        size='xxlarge'
        weight='light'
        color='green800'
      >
        {intl.formatMessage(messages.security)}
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
              <Text
                size='medium'
                weight='bold'
              >
                {intl.formatMessage(messages.twoStepAuth)}
              </Text>
            </Layout>
            <Layout basis='32px' />
            <Layout>
              <Row justify='center' align='center'>
                <Layout shrink={1} grow={1}>
                  <Input
                    disabled
                    attach='right'
                    title={intl.formatMessage(messages.key)}
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
                {intl.formatMessage(messages.turnOn)}
              </Button>
            </Layout>
          </Column>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='90px' />
    <Layout>
      <Text
        size='medium'
        weight='bold'
      >
        {intl.formatMessage(messages.blocking)}
      </Text>
    </Layout>
    <Layout basis='40px' />
    <Layout>
      <Row>
        <Layout basis='320px'>
          <Input
            disabled
            title={intl.formatMessage(messages.blockingType)}
            value={intl.formatMessage(messages.conclusion)}
          />
        </Layout>
        <Layout basis='40px' />
        <Layout basis='320px'>
          <Input
            disabled
            title={intl.formatMessage(messages.term)}
            value='0'
          />
        </Layout>
      </Row>
    </Layout>
    <Layout basis='16px' />
    <Layout>
      <Row>
        <Layout basis='340px'>
          <Text
            color='gray400'
            size='xsmall'
          >
            <span style={{ lineHeight: '16px' }}>
              {intl.formatMessage(messages.description)}
            </span>
          </Text>
        </Layout>
        <Layout basis='340px' justify='end'>
          <Button>
            {intl.formatMessage(messages.block)}
          </Button>
        </Layout>
      </Row>
    </Layout>
    <Layout basis={`${offset}px`} />
  </Column>
)

export default injectIntl(Security)
