import React from 'react'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import { SymbolLogo } from '@c3/ui/src/logo'
import Header from './Header'
import Toolbar from './Toolbar'

const App = ({ children }) => (
  <Column fill>
    <Layout shrink={0}>
      <Header />
    </Layout>
    <Layout shrink={1} grow={1}>
      <Row>
        <Layout>
          <Toolbar />
        </Layout>
        <Layout relative shrink={1} basis='100%' overflowX='hidden'>
          <LayoutWrapper>
            <Column>
              <Layout>
                {children}
              </Layout>
              <Layout basis='70px' />
              <Layout justify='center'>
                <SymbolLogo height={40} />
              </Layout>
              <Layout basis='24px' />
            </Column>
          </LayoutWrapper>
        </Layout>
      </Row>
    </Layout>
  </Column>
)

export default App
