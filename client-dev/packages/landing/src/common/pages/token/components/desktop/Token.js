import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Divider } from '@c3/ui/src/divider'
import { Text, Space } from '@c3/ui/src/text'
import { LandingButton } from '@c3/ui/src/button'
import { SymbolLogo } from '@c3/ui/src/logo'
import { ArroyYellowTopIcon, InvestIcon } from '@c3/ui/src/icons'
import { BlockGray, Container, Title, ListContainer, TokenList, LandingChart, LandingChartPercent } from '@c3/ui/src/landing'
import { TokenBox, TokenBoxContainer } from '@c3/ui/src/tokenbox'
import messages from '../../messages'

const Token = ({ intl }) => (
  <Column>
    <Layout>
      <BlockGray>
        <Container>
          <Column>
            <Layout basis='55px' />
            <Layout justify='center'>
              <Title>
                <span className='underline black'>{intl.formatMessage(messages.mainTitleBlack)}</span>
                <Space />
                {intl.formatMessage(messages.mainTitleGray)}
              </Title>
            </Layout>
            <Layout basis='55px' />
            <Layout>
              <Row justify='center' wrap>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle1)}
                    <b>{intl.formatMessage(messages.saleTokenText1)}</b>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle2)}
                    <b>{intl.formatMessage(messages.saleTokenText2)}</b>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle3)}
                    <b>{intl.formatMessage(messages.saleTokenText3)}</b>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle4)}
                    <span>{intl.formatMessage(messages.saleTokenText4)}</span>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle5)}
                    <span>{intl.formatMessage(messages.saleTokenText5)}</span>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle6)}
                    <span>{intl.formatMessage(messages.saleTokenText6)}</span>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle7)}
                    <b>{intl.formatMessage(messages.saleTokenText7)}</b>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle8)}
                    <b>{intl.formatMessage(messages.saleTokenText8)}</b>
                  </TokenList>
                </Layout>
                <Layout>
                  <TokenList>
                    {intl.formatMessage(messages.saleTokenTitle9)}
                    <b>{intl.formatMessage(messages.saleTokenText9)}</b>
                  </TokenList>
                </Layout>
              </Row>
            </Layout>
            <Layout basis='80px' />
          </Column>
        </Container>
      </BlockGray>
    </Layout>
    <Layout basis='55px' />
    <Layout>
      <Column align='center'>
        <Layout>
          <Title>
            <span className='underline black'>{intl.formatMessage(messages.accessTitleBlack)}</span>
            <Space />
            {intl.formatMessage(messages.accessTitleGray)}
          </Title>
        </Layout>
        <Layout basis='70px' />
        <Layout>
          <Container>
            <TokenBoxContainer>
              <TokenBox
                title={intl.formatMessage(messages.accessTokenBoxTitle1)}
                icon='net'
              >
                {intl.formatMessage(messages.accessTokenBox1)}
              </TokenBox>
              <TokenBox
                title={intl.formatMessage(messages.accessTokenBoxTitle3)}
                icon='portfolio'
              >
                {intl.formatMessage(messages.accessTokenBox2)}
              </TokenBox>
              <TokenBox
                title={intl.formatMessage(messages.accessTokenBoxTitle3)}
                icon='card'
              >
                {intl.formatMessage(messages.accessTokenBox3)}
              </TokenBox>
              <TokenBox
                title={intl.formatMessage(messages.accessTokenBoxTitle4)}
                icon='card'
              >
                {intl.formatMessage(messages.accessTokenBox4)}
              </TokenBox>
            </TokenBoxContainer>
          </Container>
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
    </Layout>
    <Layout>
      <Row align='center'>
        <Divider color='dark' />
        <Layout basis='20px' />
        <Layout>
          <SymbolLogo height='20' />
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Title>
            <span className='black'>{intl.formatMessage(messages.priceTitleBlack)}</span>
            <Space />
            {intl.formatMessage(messages.priceTitleGray)}
          </Title>
        </Layout>
        <Layout basis='20px' />
        <Divider color='dark' />
      </Row>
    </Layout>
    <Layout basis='50px' />
    <Layout justify='center'>
      <Container>
        <Row>
          <Layout shrink={1}>
            <Column>
              <Layout basis='105px' />
              <Layout relative>
                <ListContainer right>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                    align='end'
                  >
                    {intl.formatMessage(messages.priceListLeft1)}
                  </Text>
                </ListContainer>
              </Layout>
              <Layout basis='20px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='large'
                  align='end'
                >
                  {intl.formatMessage(messages.priceListLeftDesc1)}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout relative>
                <ListContainer right>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                    align='end'
                  >
                    {intl.formatMessage(messages.priceListLeft2)}
                  </Text>
                </ListContainer>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='29px' />
          <Layout>
            <Divider color='gray' vertical/>
          </Layout>
          <Layout basis='29px' />
          <Layout shrink={1}>
            <Column>
              <Layout basis='40px' />
              <Layout relative>
                <ListContainer>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                  >
                    {intl.formatMessage(messages.priceListRight1)}
                  </Text>
                </ListContainer>
              </Layout>
              <Layout basis='20px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.priceListRightDesc1)}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout relative>
                <ListContainer>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                  >
                    {intl.formatMessage(messages.priceListRight2)}
                  </Text>
                </ListContainer>
              </Layout>
              <Layout basis='20px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.priceListRightDesc2)}
                </Text>
              </Layout>
              <Layout basis='50px' />
              <Layout relative>
                <ListContainer>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                  >
                    {intl.formatMessage(messages.priceListRight3)}
                  </Text>
                </ListContainer>
              </Layout>
              <Layout basis='50px' />
            </Column>
          </Layout>
        </Row>
      </Container>
    </Layout>
    <Layout>
      <BlockGray>
        <Row justify='center'>
          <Layout basis='16px' />
          <Layout basis='900px' shrink={1}>
            <Column>
              <Layout basis='55px' />
              <Layout justify='center'>
                <Title>
                  <span className='underline black'>{intl.formatMessage(messages.distTitleBlack)}</span>
                  <Space />
                  {intl.formatMessage(messages.distTitleGray)}
                </Title>
              </Layout>
              <Layout basis='55px' />
              <Layout>
                <Row>
                  <Layout basis='55%' shrink={1}>
                    <LandingChartPercent color='yellow'>
                      <Text
                        size='xxlarge'
                        weight='light'
                        lineHeight='xxlarge'
                      >
                        55%
                      </Text>
                      <Text
                        size='large'
                        lineHeight='large'
                      >
                        {intl.formatMessage(messages.distPercentTokensail)}
                      </Text>
                    </LandingChartPercent>
                  </Layout>
                  <Layout basis='25%'>
                    <LandingChartPercent color='brown'>
                      <Text
                        size='xxlarge'
                        weight='light'
                        lineHeight='xxlarge'
                      >
                        25%
                      </Text>
                      <Text
                        size='large'
                        lineHeight='large'
                      >
                        {intl.formatMessage(messages.distPercentCompany)}
                      </Text>
                    </LandingChartPercent>
                  </Layout>
                  <Layout basis='10%'>
                    <LandingChartPercent color='lime'>
                      <Text
                        size='xxlarge'
                        weight='light'
                        lineHeight='xxlarge'
                      >
                        10%
                      </Text>
                      <Text
                        size='large'
                        lineHeight='large'
                      >
                        {intl.formatMessage(messages.distPercentTeam)}
                      </Text>
                    </LandingChartPercent>
                  </Layout>
                  <Layout basis='10%'>
                    <LandingChartPercent color='green'>
                      <Text
                        size='xxlarge'
                        weight='light'
                        lineHeight='xxlarge'
                      >
                        10%
                      </Text>
                      <Text
                        size='large'
                        lineHeight='large'
                      >
                        {intl.formatMessage(messages.distPercentPr)}
                      </Text>
                    </LandingChartPercent>
                  </Layout>
                </Row>
              </Layout>
              <Layout justify='center'>
                <LandingChart />
              </Layout>
            </Column>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </BlockGray>
    </Layout>
    <Layout basis='55px' />
    <Layout justify='center'>
      <Title>
        <span className='underline black'>{intl.formatMessage(messages.distributionTitleBlack)}</span>
        <Space />
        {intl.formatMessage(messages.distributionTitleGray)}
      </Title>
    </Layout>
    <Layout basis='100px' />
    <Layout>
      <div>
        
      </div>
    </Layout>
  </Column>
)

export default injectIntl(Token)
