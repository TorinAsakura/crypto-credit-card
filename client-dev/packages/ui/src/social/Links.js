import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import {
  FacebookIcon, TwitterIcon, MediumIcon,
  TelegramIcon, InstagramIcon, GithubIcon,
} from '../icons'
import Link from './Link'

const Links = () => (
  <Column>
    <Layout>
      <Row justify='center'>
        <Layout>
          <Link href='https://www.facebook.com/CCCRLTD/'>
            <FacebookIcon height={16} />
          </Link>
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Link href='https://twitter.com/Crypto_Card?lang=en'>
            <TwitterIcon height={16} />
          </Link>
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Link href='https://medium.com/@cccr'>
            <MediumIcon height={16} />
          </Link>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='12px' />
    <Layout>
      <Row justify='center'>
        <Layout>
          <Link href='https://t.me/cryptocreditcardc3'>
            <TelegramIcon height={16} />
          </Link>
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Link href='https://instagram.com/cryptocreditcardrus'>
            <InstagramIcon height={16} />
          </Link>
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Link href='https://github.com/c3platform'>
            <GithubIcon height={16} />
          </Link>
        </Layout>
      </Row>
    </Layout>
  </Column>
)

export default Links
