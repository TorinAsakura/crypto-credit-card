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
  <Row>
    <Layout basis='24px' />
    <Layout shrink={1} grow={1}>
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
            <Column>
              <Layout basis='40px' />
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
                <Row justify='center'>
                  <Layout basis='660px'>
                    <Text
                      weight='light'
                      align='center'
                      color='gray400'
                      lineHeight='large'
                    >
                      {intl.formatMessage(messages.instructions)}
                    </Text>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='60px' />
              <Layout>
                <Row justify='center' align='center'>
                  <Layout basis='340px'>
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
                  <Layout basis='48px' />
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
              <Layout basis='60px' />
              <Layout>
                <Row justify='center' align='center'>
                  <Layout basis='340px'>
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
                  <Layout basis='48px' />
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
              <Layout basis='60px' />
              <Layout>
                <Row justify='center' align='center'>
                  <Layout basis='340px'>
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
                  <Layout basis='48px' />
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
              <Layout basis='104px' />
            </Column>
          </Block>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(Instruments)
