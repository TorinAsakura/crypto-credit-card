import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from '@c3/ui/src/condition'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'
import { Button } from '@c3/ui/src/button'
import { Block } from '@c3/ui/src/content'
import { OkIcon } from '@c3/ui/src/icons'
import messages from '../messages'

const Plan = ({ intl, name = 'free', color = 'green500', used = false }) => (
  <Block>
    <Row>
      <Layout basis='32px' />
      <Layout shrink={1} grow={1}>
        <Column>
          <Layout basis='28px' />
          <Layout>
            <Text
              uppercase
              weight='bold'
              size='medium'
            >
              {intl.formatMessage(messages.plan)}
            </Text>
            <Space />
            <Text
              uppercase
              weight='bold'
              size='medium'
              color={color}
            >
              «{name}»
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Divider color='gray' />
          </Layout>
          <Layout basis='24px' />
          <Layout>
            <Text
              size='small'
              weight='light'
              color='black600'
              lineHeight='large'
            >
              {intl.formatMessage(messages.planDescription)}
            </Text>
          </Layout>
          <Layout basis='24px' />
          <Condition match={used}>
            <Layout>
              <Button
                disabled
              >
                <OkIcon height={22} />
                <Space />
                <Space />
                <Space />
                {intl.formatMessage(messages.used)}
              </Button>
            </Layout>
          </Condition>
          <Condition match={!used}>
            <Layout>
              <Row>
                <Layout basis='160px'>
                  <Button
                    fill
                    color='orange'
                  >
                    {intl.formatMessage(messages.buy)}
                  </Button>
                </Layout>
              </Row>
            </Layout>
          </Condition>
          <Layout basis='28px' />
        </Column>
      </Layout>
      <Layout basis='32px' />
    </Row>
  </Block>
)

export default injectIntl(Plan)
