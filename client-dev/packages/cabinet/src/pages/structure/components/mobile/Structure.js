import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Hierarchy } from '@c3/ui/src/hierarchy'
import { Block } from '@c3/ui/src/content'
import { Text } from '@c3/ui/src/text'
import messages from '../../messages'

const Structure = ({ intl, hierarchy }) => (
  <Column>
    <Layout basis='14px' />
    <Layout justify='center'>
      <Text
        uppercase
        weight='bold'
        color='gray200'
      >
        {intl.formatMessage(messages.structure)}
      </Text>
    </Layout>
    <Layout basis='12px' />
    <Layout basis='400px'>
      <Block>
        <Hierarchy
          title='Вы'
          data={hierarchy}
        />
      </Block>
    </Layout>
  </Column>
)

export default injectIntl(Structure)
