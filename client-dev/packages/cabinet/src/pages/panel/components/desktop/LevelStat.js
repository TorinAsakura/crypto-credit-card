import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { InviteUserIcon } from '@c3/ui/src/icons'
import { Text, Space } from '@c3/ui/src/text'
import { Block } from '@c3/ui/src/content'
import messages from '../../messages'

const LevelStat = ({ intl, level, count, disabled = false }) => (
  <Column>
    <Layout>
      <Block transparent={disabled}>
        <Column>
          <Layout basis='80px'>
            <Row align='center'>
              <Layout basis='43px' />
              <Layout>
                <Text
                  size='xxlarge'
                  weight='light'
                  color='yellow500'
                >
                  {level}
                </Text>
                <Space />
                <Space />
                <Text
                  weight='light'
                  size='xxlarge'
                >
                  {intl.formatMessage(messages.level)}
                </Text>
              </Layout>
              <Layout shrink={1} grow={1} />
              <Layout>
                <InviteUserIcon height={24} />
              </Layout>
              <Layout basis='16px' />
              <Layout>
                <Text
                  size='medium'
                  weight='light'
                  color='gray400'
                >
                  {intl.formatMessage(messages.totalRegistrations)}
                </Text>
              </Layout>
              <Layout basis='24px' />
              <Layout>
                <Text
                  size='xxxlarge'
                  weight='light'
                  color='green500'
                >
                  {count}
                </Text>
              </Layout>
              <Layout shrink={1} grow={2} />
              <Layout basis='43px' />
            </Row>
          </Layout>
        </Column>
      </Block>
    </Layout>
    <Layout basis='16px' />
  </Column>
)

export default injectIntl(LevelStat)
