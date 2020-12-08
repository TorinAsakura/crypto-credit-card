import React from 'react'
import { injectIntl } from 'react-intl'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { Column, Row, Layout } from 'flex-layouts'
import { Alert } from '@c3/ui/src/notifications'
import { Toggle } from '@c3/ui/src/animation'
import { SymbolLogo } from '@c3/ui/src/logo'
import { Button } from '@c3/ui/src/button'
import { Modal } from '@c3/ui/src/modal'
import { Input } from '@c3/ui/src/input'
import { Text } from '@c3/ui/src/text'
import messages from '../../messages'

const Buy = ({ intl, history, amount, errors = {}, onChange, onBuy }) => (
  <Modal mobile onClose={history.goBack}>
    <Row>
      <Layout basis='12px' />
      <Layout shrink={1} grow={1}>
        <Column>
          <Layout basis='24px' />
          <Layout justify='center'>
            <Text
              size='large'
              weight='medium'
            >
              {intl.formatMessage(messages.buy)} CCCR
            </Text>
          </Layout>
          <Layout basis='12px' />
          <Layout>
            <Toggle height={40} show={errors.amount}>
              <Alert type='danger'>
                {errors.amount}
              </Alert>
            </Toggle>
          </Layout>
          <Layout basis='12px' />
          <Layout>
            <Input
              value={amount}
              placeholder={intl.formatMessage(messages.enterCount)}
              rightIcon={<SymbolLogo height={16} />}
              mask={createNumberMask({
                prefix: '',
                suffix: '',
                decimalLimit: 18,
                allowDecimal: true,
                includeThousandsSeparator: false,
              })}
              onChange={onChange}
            />
          </Layout>
          <Layout basis='24px' />
          <Layout>
            <Button
              fill
              color='orange'
              onClick={onBuy}
            >
              {intl.formatMessage(messages.buy)}
            </Button>
          </Layout>
          <Layout basis='20px' />
        </Column>
      </Layout>
      <Layout basis='12px' />
    </Row>
  </Modal>
)

export default injectIntl(Buy)
