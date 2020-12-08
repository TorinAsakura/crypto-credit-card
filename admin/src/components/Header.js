import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from '@c3/admin-ui/src/content'
import { DropdownButton } from '@c3/admin-ui/src/button'
import Title from './Title'

const Header = ({ location }) => (
  <Block color='gray200'>
    <Row align='center'>
      <Layout basis='24px' />
      <Layout shrink={1} basis='33%' />
      <Layout shrink={0} basis='33%' align='center' justify='center'>
        <Title location={location} />
      </Layout>
      <Layout shrink={1} basis='33%' justify='end'>
        <DropdownButton>
          Dev@Cccr.io
        </DropdownButton>
      </Layout>
      <Layout basis='24px' />
    </Row>
  </Block>
)

export default Header
