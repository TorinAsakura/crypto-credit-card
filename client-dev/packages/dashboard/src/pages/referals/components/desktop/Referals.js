import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { getReferalLink } from '@c3/utils'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Text, Space } from '@c3/ui/src/text'
import { CopyButton, Copy } from '@c3/ui/src/clipboard'
import { Button } from '@c3/ui/src/button'
import { Input } from '@c3/ui/src/input'
import messages from '../../messages'

const Referals = ({ intl, id, ethBalance, referrer = {} }) => (
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
            {intl.formatMessage(messages.referals)}
          </Text>
        </Layout>
        <Layout basis='14px' />
        <Layout justify='center'>
          <Block fixed>
            <Row>
              <Layout basis='32px' />
              <Layout shrink={1} grow={1}>
                <Column>
                  <Layout basis='32px' />
                  <Layout>
                    <Row>
                      <Layout>
                        <Column>
                          <Layout basis='6px' />
                          <Layout>
                            <Text
                              size='medium'
                              weight='medium'
                            >
                              {intl.formatMessage(messages.yourUid)}
                            </Text>
                          </Layout>
                          <Layout basis='8px' />
                          <Layout>
                            <Copy
                              text={getReferalLink(null, id)}
                              message={intl.formatMessage(messages.copied)}
                            >
                              <a style={{ cursor: 'pointer' }}>
                                <Text
                                  size='xxxxlarge'
                                  color='green500'
                                >
                                  uid{id}
                                </Text>
                              </a>
                            </Copy>
                          </Layout>
                          <Layout shrink={1} grow={1} />
                          <Layout>
                            {referrer && (
                              <Column>
                                <Layout>
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
                                <Layout basis='16px' />
                                <Layout>
                                  <div style={{ width: 414 }}>
                                    <Row>
                                      <Layout basis='360px'>
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
                                  </div>
                                </Layout>
                              </Column>
                            )}
                          </Layout>
                        </Column>
                      </Layout>
                      <Layout basis='38px' />
                      <Layout>
                        <Divider
                          vertical
                          color='gray'
                        />
                      </Layout>
                      <Layout basis='40px' />
                      <Layout>
                        <Column>
                          <Layout basis='10px' />
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
                          <Layout basis='32px' />
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
                          <Layout basis='6px' />
                        </Column>
                      </Layout>
                      <Layout basis='66px' />
                      <Layout>
                        <Divider
                          vertical
                          color='gray'
                        />
                      </Layout>
                      <Layout basis='48px' />
                      <Layout>
                        <Column>
                          <Layout basis='10px' />
                          <Layout>
                            <Text
                              size='small'
                              color='gray200'
                            >
                              {intl.formatMessage(messages.balance)}
                            </Text>
                          </Layout>
                          <Layout basis='8px' />
                          <Layout>
                            <Text
                              size='xxlarge'
                              color='yellow500'
                            >
                              {intl.formatNumber(ethBalance, { minimumFractionDigits: 8 })} ETH
                            </Text>
                          </Layout>
                          <Layout basis='16px' />
                          <Layout>
                            <Button disabled>
                              {intl.formatMessage(messages.withdraw)}
                            </Button>
                          </Layout>
                        </Column>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='40px' />
                  <Layout>
                    <Divider color='gray' />
                  </Layout>
                  <Layout basis='40px' />
                  <Layout>
                    <Row>
                      <Layout basis='500px'>
                        <Text
                          size='medium'
                          weight='light'
                          lineHeight='large'
                        >
                          {intl.formatMessage(messages.inviteDescription)}
                        </Text>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='32px' />
                  <Layout>
                    <Row>
                      <Layout basis='360px'>
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
                  <Layout basis='36px' />
                </Column>
              </Layout>
            </Row>
          </Block>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(Referals)
