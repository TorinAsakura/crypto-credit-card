/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { Column, Row, Layout, LayoutWrapper } from 'flex-layouts'
import { Divider } from '@c3/ui/src/divider'
import { Block } from '@c3/ui/src/content'
import { Input } from '@c3/ui/src/input'
import { Text } from '@c3/ui/src/text'
import { changePair } from '../../../actions/ticker'
import Line from './Line'

const Lines = ({ items = [], pair, onChangePair }) => (
  <Column>
    {items.map(item => (
      <Layout key={item.pair}>
        <Line
          {...item}
          current={item.pair === pair}
          onClick={() => onChangePair(item.pair)}
        />
      </Layout>
    ))}
  </Column>
)



export default connect(
  state => {
    const { pairs, currency, pair, filter } = state.ticker
    const items = pairs[currency] ? pairs[currency].items : []

    return {
      items: items.filter(item => item.currency.toLowerCase().includes(filter)),
      pair,
    }
  },
  dispatch => ({
    onChangePair: pair => dispatch(changePair(pair)),
  }),
)(Lines)
