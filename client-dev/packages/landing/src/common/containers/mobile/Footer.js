import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Footer as BaseFooter } from '@c3/ui/src/footer'
import { Divider } from '@c3/ui/src/divider'
import { Logo } from '@c3/ui/src/logo'
import { Links as Social } from '@c3/ui/src/social'
import { Text, Space } from '@c3/ui/src/text'
import { Link } from '@c3/ui/src/link'
import { AtlantisIcon } from '@c3/ui/src/icons'

const Footer = () => (
  <BaseFooter mobile>
    <Column>
      <Layout basis='20px' />
      <Layout>
        <Row justify='center'>
          <Layout basis='16px' />
          <Layout>
            <Social />
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='20px' />
      <Divider color='gray' />
      <Layout basis='50px' />
      <Layout>
        <Row>
          <Layout basis='16px' />
          <Layout shrink={1} grow={1}>
            <Column>
              <Layout>
                <Column align='center'>
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
                      align='center'
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
                      align='center'
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
            </Column>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
    </Column>
  </BaseFooter>
)

export default Footer
