/* eslint-disable */
import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Text, Space } from '@c3/ui/src/text'

const styles = StyleSheet.create({
  self: {
    background: '#000000',
    borderRadius: '3px',
    padding: '4px 16px',
  },
})

const Pairs = ({ source, target }) => (
  <div className={styles()}>
    <Row>
      <Layout>
        <Text
          color='white'
          weight='medium'
        >
          {source}
        </Text>
      </Layout>
      <Space />
      <Layout align='end'>
        <Text
          size='small'
          color='gray200'
        >
          / {target}
        </Text>
      </Layout>
    </Row>
  </div>
)

export default Pairs
