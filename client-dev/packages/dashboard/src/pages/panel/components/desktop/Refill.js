import React from 'react'
import QRCode from 'qrcode.react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { CopyButton } from '@c3/ui/src/clipboard'
import { EthereumIcon } from '@c3/ui/src/icons'
import { Circle } from '@c3/ui/src/content'
import { Button } from '@c3/ui/src/button'
import { Input } from '@c3/ui/src/input'
import { Modal } from '@c3/ui/src/modal'
import { Text } from '@c3/ui/src/text'
import messages from '../../messages'

const Refill = ({ intl, address, history }) => (
  <Modal width={650} onClose={history.goBack}>
    <Row>
      <Layout shrink={1} grow={1} />
      <Layout basis='440px'>
        <Column>
          <Layout basis='53px' />
          <Layout basis='50px'>
            <Row justify='center'>
              <Layout basis='50px'>
                <Circle color='purple'>
                  <EthereumIcon
                    white
                    height={32}
                  />
                </Circle>
              </Layout>
              <Layout basis='16px' />
              <Layout align='center'>
                <Text
                  size='xlarge'
                  weight='medium'
                >
                  {intl.formatMessage(messages.invoice)}
                </Text>
              </Layout>
            </Row>
          </Layout>
          <Layout basis='24px' />
          <Layout justify='center'>
            <a href={`ethereum:${address}`}>
              <QRCode value={`ethereum:${address}`} />
            </a>
          </Layout>
          <Layout basis='32px' />
          <Layout>
            <Text
              size='small'
              weight='light'
              color='black600'
            >
              {intl.formatMessage(messages.buyEthStep)}
            </Text>
          </Layout>
          <Layout basis='12px' />
          <Layout>
            <Text
              size='small'
              weight='light'
              color='black600'
              lineHeight='large'
            >
              {intl.formatMessage(messages.copyAddressStep)}
            </Text>
          </Layout>
          <Layout basis='24px' />
          <Layout>
            <Row>
              <Layout shrink={1} grow={1}>
                <Input
                  disabled
                  attach='right'
                  value={address}
                />
              </Layout>
              <Layout>
                <CopyButton
                  attach='left'
                  text={address}
                  message={intl.formatMessage(messages.copied)}
                />
              </Layout>
            </Row>
          </Layout>
          <Layout basis='24px' />
          <Layout>
            <Button
              fill
              color='orange'
              onClick={history.goBack}
            >
              {intl.formatMessage(messages.complete)}
            </Button>
          </Layout>
          <Layout basis='58px' />
        </Column>
      </Layout>
      <Layout shrink={1} grow={1} />
    </Row>
  </Modal>
)

export default injectIntl(Refill)
