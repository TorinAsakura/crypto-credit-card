import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Geography } from '@c3/ui/src/franchise'
import { Text, Space } from '@c3/ui/src/text'
import Plan from '../Plan'
import LevelStat from './LevelStat'
import messages from '../../messages'

const ControlPanel = ({ intl, geography, levels = {} }) => (
  <Column>
    <Layout basis='14px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        color='gray200'
      >
        {intl.formatMessage(messages.controlPanel)}
      </Text>
    </Layout>
    <Layout basis='26px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        size='medium'
      >
        {intl.formatMessage(messages.yourPlan)}
      </Text>
      <Space />
      <Text
        uppercase
        weight='bold'
        size='medium'
        color='green500'
      >
        «free»
      </Text>
    </Layout>
    <Layout basis='32px' />
    <Layout>
      <Plan
        used
      />
    </Layout>
    <Layout basis='8px' />
    <Layout>
      <Plan
        used={false}
        name='business'
        color='yellow500'
      />
    </Layout>
    <Layout basis='24px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        color='gray200'
      >
        {intl.formatMessage(messages.geography)}
      </Text>
    </Layout>
    <Layout basis='26px' />
    <Layout>
      <Geography
        zoom={1}
        data={geography}
      />
    </Layout>
    <Layout basis='24px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        color='gray200'
      >
        {intl.formatMessage(messages.stat)}
      </Text>
    </Layout>
    <Layout basis='26px' />
    {Object.keys(levels).map(level => (
      <Layout key={level}>
        <LevelStat
          level={level}
          disabled={level > 1}
          {...levels[level]}
        />
      </Layout>
    ))}
  </Column>
)

export default injectIntl(ControlPanel)
