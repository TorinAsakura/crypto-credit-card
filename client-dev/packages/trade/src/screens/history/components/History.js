/* eslint-disable */
import React from 'react'
import { Block } from '@c3/ui/src/content'
import { StockChart } from '@c3/ui/src/chart'

const History = ({ data, height }) => (
  <Block>
    {(data && data.length > 0) && (
      <StockChart
        type='hybrid'
        data={data}
        height={height}
      />
    )}
  </Block>
)

export default History
