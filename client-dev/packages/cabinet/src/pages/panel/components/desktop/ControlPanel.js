import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Geography } from '@c3/ui/src/franchise'
import { Text, Space } from '@c3/ui/src/text'
import LevelStat from './LevelStat'
import Plan from '../Plan'
import messages from '../../messages'

const ControlPanel = ({ intl, geography = {}, levels = {} }) => (
  <Row>
    <Layout basis='24px' />
    <Layout shrink={1} grow={1}>
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
          <Row>
            <Layout shrink={1} basis='50%'>
              <Plan
                used
              />
            </Layout>
            <Layout basis='24px' />
            <Layout shrink={1} basis='50%'>
              <Plan
                used={false}
                name='business'
                color='yellow500'
              />
            </Layout>
          </Row>
        </Layout>
        <Layout basis='32px' />
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
            data={geography}
          />
        </Layout>
        <Layout basis='32px' />
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
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(ControlPanel)
