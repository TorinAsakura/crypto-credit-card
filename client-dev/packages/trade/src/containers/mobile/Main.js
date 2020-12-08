/* eslint-disable */
import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Ticker from '../../screens/ticker/containers/Ticker'
import History from '../../screens/history/containers/History'

const Main = () => (
  <Column>
    <Layout basis='24px' />
    <Layout basis='400px'>
      <Ticker />
    </Layout>
    <Layout basis='10px' />
    <Layout>
      <History height={400} />
    </Layout>
  </Column>
)

export default Main
