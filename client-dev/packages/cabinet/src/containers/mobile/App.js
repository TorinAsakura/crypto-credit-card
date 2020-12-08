import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { SymbolLogo } from '@c3/ui/src/logo'
import Header from './Header'
import Profile from './Profile'
import Drawer from './Drawer'

const App = ({ children }) => (
  <Column fill>
    <Layout shrink={0}>
      <Header />
    </Layout>
    <Layout relative>
      <div style={{ width: '100%', zIndex: 1 }}>
        <Profile />
      </div>
    </Layout>
    <Layout>
      <div style={{ width: '100%', zIndex: 1 }}>
        <Drawer />
      </div>
    </Layout>
    <Layout relative shrink={1} basis='100%' overflowX='hidden'>
      <Column>
        <Layout>
          {children}
        </Layout>
        <Layout basis='21px' />
        <Layout justify='center'>
          <SymbolLogo height={40} />
        </Layout>
        <Layout basis='24px' />
      </Column>
    </Layout>
  </Column>
)

export default App
