/* eslint-disable */
import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Text, Space } from '@c3/ui/src/text'
import Pairs from './Pairs'

const styles = StyleSheet.create({
  self: {
    background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
    boxShadow: '0 2px 22px 0 rgba(29,56,70,0.54)',
    width: '100%',
    padding: '8px 0px',
  },
})

const StatusBar = ({ intl, source, target, last, percentChange, high24hr, low24hr }) => (
  <div className={styles()}>
    <Row align='center'>
      <Layout basis='40px' />
      <Layout basis='140px'>
        <Pairs
          source={source}
          target={target}
        />
      </Layout>
      <Layout align='center'>
        <Text
          color='white'
          size='small'
        >
          Last:
        </Text>
        <Space count={2} />
        <Text
          color='orange500'
          weight='medium'
        >
          {last}
        </Text>
      </Layout>
      <Layout basis='24px' />
      <Layout align='center'>
        <Text
          color='white'
          size='small'
        >
          24hr Change:
        </Text>
        <Space count={2} />
        <Text
          color='gray200'
          weight='medium'
        >
          {intl.formatNumber(percentChange, { style: 'percent', maximumFractionDigits: 2 })}
        </Text>
      </Layout>
      <Layout basis='24px' />
      <Layout align='center'>
        <Text
          color='white'
          size='small'
        >
          24hr Change:
        </Text>
        <Space count={2} />
        <Text
          color='green500'
          weight='medium'
        >
          {high24hr}
        </Text>
      </Layout>
      <Layout basis='24px' />
      <Layout align='center'>
        <Text
          color='white'
          size='small'
        >
          24hr Change:
        </Text>
        <Space count={2} />
        <Text
          color='gray200'
          weight='medium'
        >
          {low24hr}
        </Text>
      </Layout>
    </Row>
  </div>
)

export default injectIntl(StatusBar)
