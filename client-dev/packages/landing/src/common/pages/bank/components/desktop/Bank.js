import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Divider } from '@c3/ui/src/divider'
import { Text, Space } from '@c3/ui/src/text'
import { LandingButton } from '@c3/ui/src/button'
import { SymbolLogo } from '@c3/ui/src/logo'
import { ArroyYellowTopIcon, InvestIcon } from '@c3/ui/src/icons'
import { BlockGray, Container, Title, ListContainer } from '@c3/ui/src/landing'
import { TokenBox, TokenBoxContainer } from '@c3/ui/src/tokenbox'
import messages from '../../messages'

const Bank = ({ intl }) => (
  <Column>
    <Layout basis='80px' />
    <Layout justify='center'>
      <img src='https://cryptocreditcard.io/icons/Mac_3.png' />
    </Layout>
    <Layout basis='50px' />
    <Layout>
      <BlockGray>
        <Container>
          <Column align='center'>
            <Layout basis='55px' />
            <Layout justify='center'>
              <Title>
                <span className='underline black'>{intl.formatMessage(messages.mobileTitleBlack)}</span>
                <Space />
                {intl.formatMessage(messages.mobileTitleGray)}
              </Title>
            </Layout>
            <Layout basis='55px' />
            <Layout>
              <Text
                weight='light'
                lineHeight='xxlarge'
                size='medium'
                align='center'
              >
                {intl.formatMessage(messages.mobileText)}
              </Text>
            </Layout>
            <Layout basis='70px' />
            <Layout>
              <TokenBoxContainer>
                <TokenBox
                  title={intl.formatMessage(messages.mobileTokenBoxTitle1)}
                  icon='net'
                  white
                >
                  {intl.formatMessage(messages.mobileTokenBox1)}
                </TokenBox>
                <TokenBox
                  title={intl.formatMessage(messages.mobileTokenBoxTitle3)}
                  icon='portfolio'
                  white
                >
                  {intl.formatMessage(messages.mobileTokenBox2)}
                </TokenBox>
                <TokenBox
                  title={intl.formatMessage(messages.mobileTokenBoxTitle3)}
                  icon='card'
                  white
                >
                  {intl.formatMessage(messages.mobileTokenBox3)}
                </TokenBox>
                <TokenBox
                  title={intl.formatMessage(messages.mobileTokenBoxTitle4)}
                  icon='card'
                  white
                >
                  {intl.formatMessage(messages.mobileTokenBox4)}
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
      </BlockGray>
    </Layout>
    <Layout basis='50px'  />
    <Layout justify='center'>
      <Container>
        <Row>
          <Layout shrink={1}>
            <Column>
              <Layout>
                <Row align='center'>
                  <Divider color='dark' />
                  <Layout basis='20px' />
                  <Layout>
                    <Title>
                      <span className='black'>{intl.formatMessage(messages.additionsTitleBig)}</span>
                    </Title>
                  </Layout>
                  <Layout basis='20px' />
                  <Divider color='dark' />
                </Row>
              </Layout>
              <Layout basis='18px' />
              <Layout justify='center'>
                <Text
                  size='large'
                  weight='light'
                >
                  {intl.formatMessage(messages.additionsTitleSmall)}
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='xxlarge'
                  size='medium'
                  align='center'
                >
                  {intl.formatMessage(messages.additionsText)}
                </Text>
              </Layout>
              <Layout basis='40px' />
              <Layout>
                <img src='https://cryptocreditcard.io/icons/Mac_1.png' style={{ width: '100%' }}/>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='100px' shrink={1} />
          <Layout basis='50px' />
          <Layout shrink={1}>
            <Column>
              <Layout relative>
                <ListContainer>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                  >
                    {intl.formatMessage(messages.additionsDeskTitle1)}
                  </Text>
                </ListContainer>
              </Layout>
              <Layout basis='24px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.additionsDeskText1)}
                </Text>
              </Layout>
              <Layout basis='70px' />
              <Layout relative>
                <ListContainer>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                  >
                    {intl.formatMessage(messages.additionsDeskTitle2)}
                  </Text>
                </ListContainer>
              </Layout>
              <Layout basis='24px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.additionsDeskText2)}
                </Text>
              </Layout>
              <Layout basis='70px' />
              <Layout relative>
                <ListContainer>
                  <Text
                    size='xlarge'
                    weight='light'
                    lineHeight='xxlarge'
                  >
                    {intl.formatMessage(messages.additionsDeskTitle3)}
                  </Text>
                </ListContainer>
              </Layout>
              <Layout basis='24px' />
              <Layout>
                <Text
                  weight='light'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.additionsDeskText3)}
                </Text>
              </Layout>
              <Layout basis='70px' />
            </Column>
          </Layout>
        </Row>
      </Container>
    </Layout>
  </Column>
)

export default injectIntl(Bank)
