import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Divider } from '../divider'
import { Text } from '../text'

const styles = StyleSheet.create({
  self: {
    width: '140px',
    padding: '10px 0',
  },
})

const Info = ({ partners = 0, clients = 0 }) => (
  <div className={styles()}>
    <Row>
      <Layout shrink={1} grow={1} align='center'>
        <Column>
          <Layout justify='center'>
            <Text
              color='gray400'
              weight='light'
              size='xsmall'
            >
              Партнеры
            </Text>
          </Layout>
          <Layout basis='4px' />
          <Layout justify='center'>
            <Text
              color='green500'
              weight='light'
              size='xxlarge'
            >
              {partners}
            </Text>
          </Layout>
        </Column>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <Divider vertical color='gray' />
      </Layout>
      <Layout basis='12px' />
      <Layout shrink={1} grow={1} justify='center'>
        <Column>
          <Layout justify='center'>
            <Text
              color='gray400'
              weight='light'
              size='xsmall'
            >
              Клиенты
            </Text>
          </Layout>
          <Layout basis='4px' />
          <Layout justify='center'>
            <Text
              color='yellow500'
              weight='light'
              size='xxlarge'
            >
              {clients}
            </Text>
          </Layout>
        </Column>
      </Layout>
    </Row>
  </div>
)

export default Info
