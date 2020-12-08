import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { getReferalLink } from '@c3/utils'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Text, Space } from '@c3/ui/src/text'
import { CopyButton, Copy } from '@c3/ui/src/clipboard'
import { Input } from '@c3/ui/src/input'
import messages from '../../messages'

const Referals = ({ intl, id, ethBalance, referrer }) => (
  <Column>
    <Layout basis='14px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        color='gray200'
      >
        {intl.formatMessage(messages.referals)}
      </Text>
    </Layout>
    <Layout basis='14px' />
    <Layout>
      <Block>
        <Row>
          <Layout basis='16px' />
          <Layout shrink={1} grow={1}>
            <Column>
              <Layout basis='32px' />
              <Layout justify='center'>
                <Text
                  size='medium'
                  weight='medium'
                >
                  {intl.formatMessage(messages.yourUid)}
                </Text>
                <Space count={2} />
                <Copy
                  text={getReferalLink(null, { id })}
                  message={intl.formatMessage(messages.copied)}
                >
                  <a style={{ cursor: 'pointer' }}>
                    <Text
                      size='medium'
                      weight='medium'
                      color='green500'
                    >
                      uid{id}
                    </Text>
                  </a>
                </Copy>
              </Layout>
              <Layout basis='20px' />
              <Layout>
                {referrer && (
                  <Column>
                    <Layout justify='center'>
                      <Text
                        size='small'
                        color='gray200'
                      >
                        {intl.formatMessage(messages.invitedBy)}
                      </Text>
                      <Space />
                      <Text
                        size='small'
                        weight='medium'
                        color='green800'
                      >
                        {referrer.email} (
                      </Text>
                      <Text
                        size='small'
                        weight='medium'
                        color='green500'
                      >
                        uid{referrer.id}
                      </Text>
                      <Text
                        size='small'
                        weight='medium'
                        color='green800'
                      >
                        )
                      </Text>
                    </Layout>
                    <Layout basis='8px' />
                    <Layout>
                      <Row>
                        <Layout shrink={1} grow={1}>
                          <Input
                            disabled
                            attach='right'
                            value={referrer.address}
                          />
                        </Layout>
                        <Layout>
                          <CopyButton
                            attach='left'
                            text={referrer.address}
                            message={intl.formatMessage(messages.copied)}
                          />
                        </Layout>
                      </Row>
                    </Layout>
                  </Column>
                )}
              </Layout>
              <Layout basis='20px' />
              <Layout>
                <Divider color='gray' />
              </Layout>
              <Layout basis='6px' />
              <Layout basis='142px'>
                <Row>
                  <Layout basis='50%'>
                    <Column align='center' justify='center'>
                      <Layout>
                        <Text
                          size='small'
                          color='gray200'
                        >
                          {intl.formatMessage(messages.registrations)}
                        </Text>
                      </Layout>
                      <Layout basis='6px' />
                      <Layout>
                        <Text
                          weight='light'
                          size='xxxxlarge'
                        >
                          0
                        </Text>
                      </Layout>
                    </Column>
                  </Layout>
                  <Layout>
                    <Divider
                      vertical
                      color='gray'
                    />
                  </Layout>
                  <Layout basis='50%'>
                    <Column align='center' justify='center'>
                      <Layout>
                        <Text
                          size='small'
                          color='gray200'
                        >
                          {intl.formatMessage(messages.purchases)}
                        </Text>
                      </Layout>
                      <Layout basis='6px' />
                      <Layout>
                        <Text
                          weight='light'
                          size='xxxxlarge'
                        >
                          0
                        </Text>
                      </Layout>
                    </Column>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='8px' />
              <Layout>
                <Divider color='gray' />
              </Layout>
              <Layout basis='32px' />
              <Layout justify='center'>
                <Text
                  size='small'
                  color='gray200'
                >
                  {intl.formatMessage(messages.balance)}
                </Text>
              </Layout>
              <Layout basis='16px' />
              <Layout justify='center'>
                <Text
                  size='xxlarge'
                  color='yellow500'
                >
                  {intl.formatNumber(ethBalance, { minimumFractionDigits: 8 })} ETH
                </Text>
              </Layout>
              <Layout basis='24px' />
              <Layout>
                <Divider color='gray' />
              </Layout>
              <Layout basis='24px' />
              <Layout justify='center'>
                <Text
                  size='medium'
                  weight='light'
                  align='center'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.inviteDescription)}
                </Text>
              </Layout>
              <Layout basis='20px' />
              <Layout>
                <Row>
                  <Layout shrink={1} grow={1}>
                    <Input
                      disabled
                      attach='right'
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
              <Layout basis='24px' />
            </Column>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Block>
    </Layout>
  </Column>
)

export default injectIntl(Referals)
