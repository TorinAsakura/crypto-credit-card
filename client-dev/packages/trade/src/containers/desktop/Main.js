/* eslint-disable */
import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Ticker from '../../screens/ticker/containers/Ticker'
import History from '../../screens/history/containers/History'
import Orders from '../../screens/orders/components/Orders'
import Market from '../../screens/market/components/Market'

const lineHeight = (window.innerHeight - 140) / 2
const secondLineHeihgt = window.innerHeight - 300

const Main = () => (
  <Column>
    <Layout basis='24px' />
    <Layout basis={`${lineHeight}px`}>
      <Row>
        <Layout basis='40px' />
        <Layout basis='400px'>
          <Ticker />
        </Layout>
        <Layout basis='16px' />
        <Layout shrink={1} grow={1}>
          <History height={lineHeight} />
        </Layout>
        <Layout basis='40px' />
      </Row>
    </Layout>
    <Layout basis='16px' />
    <Layout basis={`${secondLineHeihgt}px`}>
      <Row>
        <Layout basis='40px' />
        <Layout basis='400px'>
          <Orders />
        </Layout>
        <Layout basis='16px' />
        <Layout shrink={1} grow={1}>
          <Market />
        </Layout>
        <Layout basis='40px' />
      </Row>
    </Layout>
    <Layout basis='20px' />
  </Column>
)

export default Main
