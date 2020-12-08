import React from 'react'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import Header from './Header'
import Footer from './Footer'

const App = ({ children }) => (
  <Column fill>
    <Layout>
      <Header />
    </Layout>
    <Layout>
      {children}
    </Layout>
    <Layout>
      <Footer />
    </Layout>
  </Column>
)

export default App
