import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { CopyButton } from '@c3/ui/src/clipboard'
import { JumpIcon } from '@c3/ui/src/icons'
import { Block } from '@c3/ui/src/content'
import { Input } from '@c3/ui/src/input'
import { Text } from '@c3/ui/src/text'
import { getReferalLink } from '@c3/utils'
import messages from '../../messages'

const Instruments = ({ intl, id, referrers = {} }) => (
  <Column>
    <Layout basis='14px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        color='gray200'
      >
        {intl.formatMessage(messages.instruments)}
      </Text>
    </Layout>
    <Layout basis='12px' />
    <Layout>
      <Block>
        <Row>
          <Layout basis='16px' />
          <Layout shrink={1} grow={1}>
            <Column>
              <Layout basis='32px' />
              <Layout justify='center'>
                <Text
                  uppercase
                  size='medium'
                  weight='medium'
                >
                  {intl.formatMessage(messages.referalLinks)}
                </Text>
              </Layout>
              <Layout basis='16px' />
              <Layout>
                <Text
                  weight='light'
                  align='center'
                  color='gray400'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.instructions)}
                </Text>
              </Layout>
              <Layout basis='32px' />
              <Layout>
                <Row justify='end' align='center'>
                  <Layout>
                    <JumpIcon height={10} />
                  </Layout>
                  <Layout basis='4px' />
                  <Layout>
                    <Text
                      size='large'
                      weight='light'
                    >
                      {referrers.dashboard || 0}
                    </Text>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Row justify='center' align='center'>
                  <Layout grow={1}>
                    <Input
                      disabled
                      attach='right'
                      title={intl.formatMessage(messages.ico)}
                      value={getReferalLink('dashboard', id)}
                    />
                  </Layout>
                  <Layout>
                    <CopyButton
                      attach='left'
                      text={getReferalLink('dashboard', id)}
                      message={intl.formatMessage(messages.copied)}
                    />
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Row justify='end' align='center'>
                  <Layout>
                    <JumpIcon height={10} />
                  </Layout>
                  <Layout basis='4px' />
                  <Layout>
                    <Text
                      size='large'
                      weight='light'
                    >
                      {referrers.promopage || 0}
                    </Text>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Row justify='center' align='center'>
                  <Layout grow={1}>
                    <Input
                      disabled
                      attach='right'
                      title={intl.formatMessage(messages.promopage)}
                      value={getReferalLink(null, id)}
                    />
                  </Layout>
                  <Layout>
                    <CopyButton
                      attach='left'
                      text={getReferalLink(null, id)}
                      message={intl.formatMessage(messages.copied)}
                    />
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Row justify='end' align='center'>
                  <Layout>
                    <JumpIcon height={10} />
                  </Layout>
                  <Layout basis='4px' />
                  <Layout>
                    <Text
                      size='large'
                      weight='light'
                    >
                      {referrers.trade || 0}
                    </Text>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Row justify='center' align='center'>
                  <Layout grow={1}>
                    <Input
                      disabled
                      attach='right'
                      title={intl.formatMessage(messages.exchange)}
                      value={getReferalLink('trade', id)}
                    />
                  </Layout>
                  <Layout>
                    <CopyButton
                      attach='left'
                      text={getReferalLink('trade', id)}
                      message={intl.formatMessage(messages.copied)}
                    />
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='82px' />
            </Column>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Block>
    </Layout>
  </Column>
)

export default injectIntl(Instruments)
