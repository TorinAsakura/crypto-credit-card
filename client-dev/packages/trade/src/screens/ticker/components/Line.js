/* eslint-disable */
import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Text, Space } from '@c3/ui/src/text'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '24px',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.01)',
    },
  },
  current: {
    background: '#f1f2f2',
  },
})

const Line = ({ intl, current, currency, last, baseVolume, percentChange, onClick }) => (
  <a
    className={styles({ current })}
    onClick={onClick}
  >
    <Layout basis='20%' align='center'>
      <Space count={1} />
      <Text
        size='xsmall'
        color='gray600'
      >
        {currency}
      </Text>
    </Layout>
    <Layout basis='30%' align='center'>
      <Text
        size='xsmall'
        color='gray600'
      >
        {last}
      </Text>
    </Layout>
    <Layout basis='30%' align='center'>
      <Text
        size='xsmall'
        color='gray600'
      >
        {baseVolume}
      </Text>
    </Layout>
    <Layout basis='30%' align='center'>
      <Text
        size='xsmall'
        color={percentChange > 0 ? 'green500' : 'orange500'}
      >
        {intl.formatNumber(percentChange, { style: 'percent', maximumFractionDigits: 1 })}
      </Text>
    </Layout>
  </a>
)

export default injectIntl(Line)
