import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { CopyButton } from '@c3/ui/src/clipboard'
import { EthereumIcon } from '@c3/ui/src/icons'
import { Progress } from '@c3/ui/src/progress'
import { Text, Space } from '@c3/ui/src/text'
import { SymbolLogo } from '@c3/ui/src/logo'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Button } from '@c3/ui/src/button'
import { Input } from '@c3/ui/src/input'
import messages from '../../messages'
import Stage from '../Stage'

const ControlPanel = ({
  intl, address, balance, ethBalance, stages,
  collected, minTarget, maxTarget, minTargetSupply, maxTargetSupply,
  onBuy, onRefill,
}) => (
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
            {intl.formatMessage(messages.controlPanel)}
          </Text>
        </Layout>
        <Layout basis='14px' />
        <Layout justify='center'>
          <Block fixed>
            <Column>
              <Layout basis='64px' />
              <Layout>
                <Row>
                  <Layout shrink={1} grow={1} />
                  <Layout basis='390px'>
                    <Column>
                      <Layout>
                        <Row align='center'>
                          <Layout>
                            <SymbolLogo
                              yellow
                              height={20}
                            />
                          </Layout>
                          <Layout basis='8px' />
                          <Layout>
                            <Text
                              uppercase
                              size='large'
                              weight='medium'
                            >
                              {intl.formatMessage(messages.wallet)}
                            </Text>
                            <Space />
                            <Text
                              size='large'
                              weight='medium'
                              color='yellow500'
                            >
                              CCCR
                            </Text>
                          </Layout>
                        </Row>
                      </Layout>
                      <Layout basis='40px' />
                      <Layout>
                        <Row>
                          <Layout basis='345px'>
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
                      <Layout basis='28px' />
                      <Layout align='end'>
                        <Text
                          size='xlarge'
                        >
                          {intl.formatNumber(balance, { minimumFractionDigits: 8 })}
                        </Text>
                        <Space />
                        <Text
                          size='medium'
                          color='gray200'
                          weight='medium'
                          lineHeight='large'
                        >
                          CCCR
                        </Text>
                      </Layout>
                      <Layout basis='16px' />
                      <Layout>
                        <Button
                          color='orange'
                          onClick={ethBalance > 0 ? onBuy : onRefill}
                        >
                          {intl.formatMessage(messages.buy)}
                        </Button>
                      </Layout>
                    </Column>
                  </Layout>
                  <Layout basis='40px' />
                  <Layout>
                    <Divider
                      vertical
                      color='gray'
                    />
                  </Layout>
                  <Layout basis='40px' />
                  <Layout basis='390px'>
                    <Column>
                      <Layout>
                        <Row align='center'>
                          <Layout>
                            <EthereumIcon
                              height={20}
                            />
                          </Layout>
                          <Layout basis='8px' />
                          <Layout>
                            <Text
                              uppercase
                              size='large'
                              weight='medium'
                              color='green500'
                            >
                              ETH {intl.formatMessage(messages.wallet)}
                            </Text>
                          </Layout>
                        </Row>
                      </Layout>
                      <Layout basis='40px' />
                      <Layout>
                        <Row>
                          <Layout basis='345px'>
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
                      <Layout basis='28px' />
                      <Layout align='end'>
                        <Text
                          size='xlarge'
                        >
                          {intl.formatNumber(ethBalance, { minimumFractionDigits: 8 })}
                        </Text>
                        <Space />
                        <Text
                          size='medium'
                          color='gray200'
                          weight='medium'
                          lineHeight='large'
                        >
                          ETH
                        </Text>
                      </Layout>
                      <Layout basis='16px' />
                      <Layout>
                        <Button
                          color='green'
                          onClick={onRefill}
                        >
                          {intl.formatMessage(messages.refill)}
                        </Button>
                      </Layout>
                    </Column>
                  </Layout>
                  <Layout shrink={1} grow={1} />
                </Row>
              </Layout>
              <Layout basis='48px' />
            </Column>
          </Block>
        </Layout>
        <Layout basis='14px' />
        <Layout justify='center'>
          <Block fixed>
            <Row>
              <Layout basis='32px' />
              <Layout shrink={1} grow={1}>
                <Column>
                  <Layout basis='32px' />
                  <Layout justify='center'>
                    <Text
                      uppercase
                      size='medium'
                      weight='medium'
                    >
                      {intl.formatMessage(messages.collected)}
                    </Text>
                  </Layout>
                  <Layout basis='48px' />
                  <Layout>
                    <Row>
                      <Layout align='end'>
                        <Text
                          size='medium'
                        >
                          {collected}
                        </Text>
                        <Space />
                        <Text
                          size='medium'
                          color='gray400'
                        >
                          CCCR
                        </Text>
                      </Layout>
                      <Layout shrink={1} grow={1} />
                      <Layout align='end'>
                        <Text
                          size='small'
                          color='gray400'
                        >
                          {intl.formatMessage(messages.minTarget)}
                        </Text>
                        <Space />
                        <Text>
                          {minTarget}CCCR
                        </Text>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='12px' />
                  <Layout>
                    <Progress
                      extended
                      animate={false}
                      percent={minTargetSupply}
                    />
                  </Layout>
                  <Layout basis='32px' />
                  <Layout>
                    <Row>
                      <Layout align='end'>
                        <Text
                          size='medium'
                        >
                          {collected}
                        </Text>
                        <Space />
                        <Text
                          size='medium'
                          color='gray400'
                        >
                          CCCR
                        </Text>
                      </Layout>
                      <Layout shrink={1} grow={1} />
                      <Layout align='end'>
                        <Text
                          size='small'
                          color='gray400'
                        >
                          {intl.formatMessage(messages.maxTarget)}
                        </Text>
                        <Space />
                        <Text>
                          {maxTarget}CCCR
                        </Text>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='12px' />
                  <Layout>
                    <Progress
                      extended
                      animate={false}
                      percent={maxTargetSupply}
                    />
                  </Layout>
                  <Layout basis='32px' />
                  <Layout>
                    <Divider color='gray' />
                  </Layout>
                  <Layout basis='32px' />
                  <Layout justify='center'>
                    <Text
                      uppercase
                      size='medium'
                      weight='medium'
                    >
                      {intl.formatMessage(messages.stages)}
                    </Text>
                  </Layout>
                  <Layout basis='22px' />
                  <Layout>
                    <Row justify='spaceAround'>
                      {stages.map(stage => (
                        <Layout key={stage.from}>
                          <Stage {...stage} />
                        </Layout>
                      ))}
                    </Row>
                  </Layout>
                  <Layout basis='39px' />
                </Column>
              </Layout>
              <Layout basis='32px' />
            </Row>
          </Block>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(ControlPanel)
