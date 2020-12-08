import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Footer as BaseFooter } from '@c3/ui/src/footer'
import { Divider } from '@c3/ui/src/divider'
import { Logo } from '@c3/ui/src/logo'
import { Links as Social } from '@c3/ui/src/social'
import { Text, Space } from '@c3/ui/src/text'
import { Link } from '@c3/ui/src/link'
import { AtlantisIcon } from '@c3/ui/src/icons'
import { Container } from '@c3/ui/src/landing'

const Footer = () => (
  <BaseFooter>
    <Column>
      <Layout basis='20px' />
      <Layout>
        <Social />
      </Layout>
      <Layout basis='20px' />
      <Divider color='gray' />
      <Layout basis='50px' />
      <Layout justify='center'>
        <Container>
          <Row>
            <Layout basis='50px' />
            <Layout>
              <Column>
                <Layout>
                  <Link to='/' plain>
                    <Logo
                      color='black'
                      position='center'
                      height='70'
                    />
                  </Link>
                </Layout>
                <Layout basis='30px' />
                <Layout>
                  <Text
                    color='gray400'
                    size='small'
                    uppercase
                  >
                    ALL RIGHTS RESERVED. COPYRIGHT © 2017
                  </Text>
                </Layout>
              </Column>
            </Layout>
            <Layout basis='20px' />
            <Layout grow={1}>
              <Column align='center'>
                <Layout>
                  <a href='mailto:ask@cryptocreditcard.io'>
                    <Text
                      color='green500'
                      size='small'
                    >
                      ASK@CRYPTOCREDITCARD.IO
                    </Text>
                  </a>
                </Layout>
                <Layout basis='12px' />
                <Layout>
                  <a href='tel:+74951277669'>
                    <Text size='xxlarge'>
                      +7 (495) 127 76 69
                    </Text>
                  </a>
                </Layout>
              </Column>
            </Layout>
            <Layout basis='20px' />
            <Layout>
              <Column align='center'>
                <Layout>
                  <Text
                    color='gray400'
                    size='small'
                    lineHeight='large'
                    uppercase
                  >
                    <a href='/'>CRYPTO CREDIT CARD LTD</a> (CRN 11112287)
                  </Text>
                </Layout>
                <Layout>
                  <Text
                    color='gray400'
                    size='small'
                    lineHeight='large'
                    uppercase
                  >
                    180 TOTTENHAM COURT ROAD, LONDON, UK, W1T 7PD
                  </Text>
                </Layout>
                <Layout basis='22px' />
                <Layout>
                  <Text
                    color='gray400'
                    size='small'
                    lineHeight='large'
                  >
                    Supported by:
                  </Text>
                </Layout>
                <Layout>
                  <AtlantisIcon />
                </Layout>
              </Column>
            </Layout>
            <Layout basis='50px' />
          </Row>
        </Container>
      </Layout>
    </Column>
  </BaseFooter>
)

export default Footer
