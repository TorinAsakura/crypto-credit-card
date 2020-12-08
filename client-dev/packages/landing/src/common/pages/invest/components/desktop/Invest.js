import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Divider } from '@c3/ui/src/divider'
import { Text, Space } from '@c3/ui/src/text'
import { LandingButton } from '@c3/ui/src/button'
import { SymbolLogo } from '@c3/ui/src/logo'
import { ArroyYellowTopIcon, InvestIcon } from '@c3/ui/src/icons'
import { BlockGray, Container, Title } from '@c3/ui/src/landing'
import { TokenBox, TokenBoxContainer } from '@c3/ui/src/tokenbox'
import messages from '../../messages'

const Invest = ({ intl }) => (
  <Column>
    <Layout>
      <BlockGray>
        <Column>
          <Layout basis='50px' />
          <Layout justify='center'>
            <Container>
              <Row justify='center'>
                <Layout shrink={1}>
                  <Column>
                    <Layout basis='50px' />
                    <Layout>
                      <Text size='xxxlarge' uppercase>
                        {intl.formatMessage(messages.mainTitleBig)}
                      </Text>
                    </Layout>
                    <Layout basis='30px' />
                    <Layout>
                      <Text
                        size='large'
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
                  </Column>
                </Layout>
                <Layout basis='50px' />
                <Layout shrink={1} grow={1}>
                  <Column>
                    <Layout>
                      <img src='https://cryptocreditcard.io/icons/BirgaImg.png' />
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
                  </Column>
                </Layout>
              </Row>
            </Container>
          </Layout>
          <Layout basis='90px' />
        </Column>
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
      <Container>
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
              <TokenBox title={intl.formatMessage(messages.kryptoTokenBoxTitle3)} icon='portfolio'>
                {intl.formatMessage(messages.kryptoTokenBox2)}
              </TokenBox>
              <TokenBox title={intl.formatMessage(messages.kryptoTokenBoxTitle3)} icon='card'>
                {intl.formatMessage(messages.kryptoTokenBox3)}
              </TokenBox>
            </TokenBoxContainer>
          </Layout>
          <Layout basis='100px' />
          <Layout>
            <LandingButton>
              {intl.formatMessage(messages.buttonIco)}
            </LandingButton>
          </Layout>
          <Layout basis='30px' />
          <Layout>
            <ArroyYellowTopIcon width='18' />
          </Layout>
          <Layout basis='60px' />
        </Column>
      </Container>
    </Layout>
    <Layout>
      <Row align='center'>
        <Divider color='dark' />
        <Layout basis='20px' />
        <Layout>
          <Title>
            <span className='black'>{intl.formatMessage(messages.investTitleBlack)}</span>
            <Space />
            {intl.formatMessage(messages.investTitleGray)}
          </Title>
        </Layout>
        <Layout basis='20px' />
        <Divider color='dark' />
      </Row>
    </Layout>
    <Layout justify='center'>
      <Container>
        <Column align='center'>
          <Layout>
            <Row align='center' fill>
              <Layout shrink={0}>
                <InvestIcon />
              </Layout>
              <Layout basis='75px' />
              <Layout shrink={1}>
                <Text
                  weight='light'
                  lineHeight='xxlarge'
                  size='medium'
                >
                  {intl.formatMessage(messages.investText)}
                </Text>
              </Layout>
            </Row>
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
            <LandingButton>
              {intl.formatMessage(messages.buttonIco)}
            </LandingButton>
          </Layout>
          <Layout basis='30px' />
          <Layout>
            <ArroyYellowTopIcon width='18' />
          </Layout>
          <Layout basis='60px' />
        </Column>
      </Container>
    </Layout>
    <Layout>
      <Row align='center'>
        <Divider color='dark' />
        <Layout basis='20px' />
        <Layout>
          <Title>
            <span className='black'>{intl.formatMessage(messages.tradeTitleBlack)}</span>
            <Space />
            {intl.formatMessage(messages.tradeTitleGray)}
          </Title>
        </Layout>
        <Layout basis='20px' />
        <Divider color='dark' />
      </Row>
    </Layout>
    <Layout justify='center'>
      <Container>
        <Column>
          <Layout>
            <Row align='center' fill>
              <Layout shrink={0}>
                <InvestIcon />
              </Layout>
              <Layout basis='75px' />
              <Layout shrink={1}>
                <Text
                  weight='light'
                  lineHeight='xxlarge'
                  size='medium'
                >
                  {intl.formatMessage(messages.tradeText)}
                </Text>
              </Layout>
            </Row>
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
      </Container>
    </Layout>
  </Column>
)

export default injectIntl(Invest)
