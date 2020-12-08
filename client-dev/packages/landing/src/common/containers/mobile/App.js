import React from 'react'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import Header from './Header'
import Footer from './Footer'
import Drawer from './Drawer'
import Profile from './Profile'

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
        <Layout>
          <Footer />
        </Layout>
      </Column>
    </Layout>
  </Column>
)

export default App
