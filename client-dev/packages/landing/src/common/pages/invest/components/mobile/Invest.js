import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Divider } from '@c3/ui/src/divider'
import { Text, Space } from '@c3/ui/src/text'
import { LandingButton } from '@c3/ui/src/button'
import { SymbolLogo } from '@c3/ui/src/logo'
import { ArroyYellowTopIcon, InvestIcon } from '@c3/ui/src/icons'
import { BlockGray, Title } from '@c3/ui/src/landing'
import { TokenBox, TokenBoxContainer } from '@c3/ui/src/tokenbox'
import messages from '../../messages'

const Invest = ({ intl }) => (
  <Column>
    <Layout>
      <BlockGray>
        <Row>
          <Layout basis='30px' />
          <Layout shrink={1} grow={1}>
            <Column>
              <Layout basis='50px' />
              <Layout>
                <Text size='xlarge' uppercase>
                  {intl.formatMessage(messages.mainTitleBig)}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <Text
                  size='large'
                  weight='light'
                  color='gray400'
                  uppercase
                >
                  {intl.formatMessage(messages.mainTitleSmall)}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Divider color='dark' />
              <Layout basis='33px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='xxlarge'
                  uppercase
                >
                  {intl.formatMessage(messages.mainText)}
                </Text>
              </Layout>
              <Layout basis='50px' />
              <Layout>
                <img src='https://cryptocreditcard.io/icons/BirgaImg.png' style={{ width: '100%'   }} />
              </Layout>
              <Layout>
                <Row align='center'>
                  <Divider color='dark' />
                  <Layout basis='20px' />
                  <Layout>
                    <SymbolLogo height='20' />
                  </Layout>
                  <Layout basis='20px' />
                  <Divider color='dark' />
                </Row>
              </Layout>
              <Layout basis='40px' />
              <Layout>
                <Text
                  color='green500'
                  size='xxlarge'
                  align='center'
                  uppercase
                >
                  {intl.formatMessage(messages.mainTextGreen)}
                </Text>
              </Layout>
              <Layout basis='90px' />
            </Column>
          </Layout>
          <Layout basis='30px' />
        </Row>
      </BlockGray>
    </Layout>
    <Layout basis='55px' />
    <Layout justify='center'>
      <Title>
        <span className='underline black'>{intl.formatMessage(messages.kryptoTitleBlack)}</span>
        <Space />
        {intl.formatMessage(messages.kryptoTitleGray)}
      </Title>
    </Layout>
    <Layout basis='55px' />
    <Layout justify='center'>
      <Column align='center'>
        <Layout>
          <Text
            weight='light'
            lineHeight='xxlarge'
            size='medium'
            align='center'
          >
            {intl.formatMessage(messages.kryptoText)}
          </Text>
        </Layout>
        <Layout basis='73px' />
        <Layout>
          <TokenBoxContainer>
            <TokenBox title={intl.formatMessage(messages.kryptoTokenBoxTitle1)} icon='net'>
              {intl.formatMessage(messages.kryptoTokenBox1)}
            </TokenBox>
            <TokenBox title={intl.formatMessage(messages.kryptoTokenBoxTitle2)} icon='portfolio'>
              {intl.formatMessage(messages.kryptoTokenBox2)}
            </TokenBox>
            <TokenBox title={intl.formatMessage(messages.kryptoTokenBoxTitle3)} icon='card'>
              {intl.formatMessage(messages.kryptoTokenBox3)}
            </TokenBox>
          </TokenBoxContainer>
        </Layout>
        <Layout basis='100px' />
        <Layout>
          <LandingButton mobile>
            {intl.formatMessage(messages.buttonIco)}
          </LandingButton>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <ArroyYellowTopIcon width='18' />
        </Layout>
      </Column>
    </Layout>
    <Layout basis='60px' />
    <Layout>
      <Title>
        <span className='black'>{intl.formatMessage(messages.investTitleBlack)}</span>
        <Space />
        {intl.formatMessage(messages.investTitleGray)}
      </Title>
    </Layout>
    <Layout justify='center'>
      <Column align='center'>
        <Layout basis='30px' />
        <Layout>
          <InvestIcon />
        </Layout>
        <Layout basis='75px' />
        <Layout>
          <Text
            weight='light'
            lineHeight='xxlarge'
            size='medium'
            align='center'
          >
            {intl.formatMessage(messages.investText)}
          </Text>
        </Layout>
        <Layout basis='73px' />
        <Layout>
          <TokenBoxContainer>
            <TokenBox title={intl.formatMessage(messages.investTokenBoxTitle1)} icon='net'>
              {intl.formatMessage(messages.investTokenBox1)}
            </TokenBox>
            <TokenBox title={intl.formatMessage(messages.investTokenBoxTitle2)} icon='portfolio'>
              {intl.formatMessage(messages.investTokenBox2)}
            </TokenBox>
            <TokenBox title={intl.formatMessage(messages.investTokenBoxTitle3)} icon='card'>
              {intl.formatMessage(messages.investTokenBox3)}
            </TokenBox>
          </TokenBoxContainer>
        </Layout>
        <Layout basis='100px' />
        <Layout>
          <LandingButton mobile>
            {intl.formatMessage(messages.buttonIco)}
          </LandingButton>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <ArroyYellowTopIcon width='18' />
        </Layout>
      </Column>
    </Layout>
    <Layout basis='60px' />
    <Layout>
      <Title>
        <span className='black'>{intl.formatMessage(messages.tradeTitleBlack)}</span>
        <Space />
        {intl.formatMessage(messages.tradeTitleGray)}
      </Title>
    </Layout>
    <Layout justify='center'>
      <Column align='center'>
        <Layout basis='30px' />
        <Layout>
          <InvestIcon />
        </Layout>
        <Layout basis='75px' />
        <Layout>
          <Text
            weight='light'
            lineHeight='xxlarge'
            size='medium'
            align='center'
          >
            {intl.formatMessage(messages.tradeText)}
          </Text>
        </Layout>
        <Layout basis='73px' />
        <Layout>
          <TokenBoxContainer>
            <TokenBox title={intl.formatMessage(messages.tradeTokenBoxTitle1)} icon='net'>
              {intl.formatMessage(messages.tradeTokenBox1)}
            </TokenBox>
            <TokenBox title={intl.formatMessage(messages.tradeTokenBoxTitle2)} icon='portfolio'>
              {intl.formatMessage(messages.tradeTokenBox2)}
            </TokenBox>
            <TokenBox title={intl.formatMessage(messages.tradeTokenBoxTitle3)} icon='card'>
              {intl.formatMessage(messages.tradeTokenBox3)}
            </TokenBox>
          </TokenBoxContainer>
        </Layout>
      </Column>
    </Layout>
  </Column>
)

export default injectIntl(Invest)
