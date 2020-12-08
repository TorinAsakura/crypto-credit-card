/* eslint-disable */
import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from '@c3/ui/src/text'
import { Divider } from '@c3/ui/src/divider'
import { Button } from '@c3/ui/src/button'
import { Input } from '@c3/ui/src/input'
import avatar from './User_img.png'

const offset = window.innerHeight - 140

const messages = defineMessages({
  info: {
    id: 'private.information.info',
    defaultMessage: 'Информация',
  },
  save: {
    id: 'private.information.save',
    defaultMessage: 'Сохранить',
  },
  changePassword: {
    id: 'private.information.change_password',
    defaultMessage: 'Изменить пароль',
  },
  password: {
    id: 'private.information.password',
    defaultMessage: 'Пароль',
  },
  passwordConfirmation: {
    id: 'private.information.password_confirmation',
    defaultMessage: 'Повторить пароль',
  },
  empty: {
    id: 'private.information.empty',
    defaultMessage: 'Список пуст',
  },
  history: {
    id: 'private.information.history',
    defaultMessage: 'История заходов на сайт',
  },
  date: {
    id: 'private.information.date',
    defaultMessage: 'Дата',
  },
  browser: {
    id: 'private.information.browser',
    defaultMessage: 'Браузер',
  },
  ip: {
    id: 'private.information.ip',
    defaultMessage: 'IP',
  },
  country: {
    id: 'private.information.country',
    defaultMessage: 'Старана',
  },
  status: {
    id: 'private.information.status',
    defaultMessage: 'Статус',
  },
  name: {
    id: 'private.information.name',
    defaultMessage: 'Имя',
  },
  email: {
    id: 'private.information.email',
    defaultMessage: 'E-mail',
  },
})

const Information = ({ intl, email }) => (
  <Column>
    <Layout>
      <Text
        size='xxlarge'
        weight='light'
        color='green800'
      >
        {intl.formatMessage(messages.info)}
      </Text>
    </Layout>
    <Layout basis='32px' />
    <Layout>
      <Row>
        <Layout>
          <Column>
            <Layout basis='24px' />
            <Layout>
              <Row>
                <Layout>
                  <img src={avatar} />
                </Layout>
                <Layout basis='16px' />
                <Layout>
                  <Text color='gray600' lineHeight='large'>
                    {email}
                  </Text>
                </Layout>
              </Row>
            </Layout>
          </Column>
        </Layout>
        <Layout basis='56px' />
        <Layout basis='300px'>
          <Column>
            <Layout basis='24px' />
            <Layout>
              <Input
                placeholder={intl.formatMessage(messages.name)}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout>
              <Input
                placeholder={intl.formatMessage(messages.email)}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout justify='end'>
              <Button>
                {intl.formatMessage(messages.save)}
              </Button>
            </Layout>
          </Column>
        </Layout>
        <Layout basis='42px' />
        <Layout basis='300px'>
          <Column>
            <Layout basis='24px'>
              <Text
                size='small'
                weight='medium'
              >
                {intl.formatMessage(messages.changePassword)}
              </Text>
            </Layout>
            <Layout>
              <Input
                placeholder={intl.formatMessage(messages.password)}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout>
              <Input
                placeholder={intl.formatMessage(messages.passwordConfirmation)}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout justify='end'>
              <Button>
                {intl.formatMessage(messages.save)}
              </Button>
            </Layout>
          </Column>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='46px' />
    <Layout>
      <Divider color='gray' />
    </Layout>
    <Layout basis='32px' />
    <Layout>
      <Text
        size='medium'
        weight='medium'
      >
        {intl.formatMessage(messages.history)}
      </Text>
    </Layout>
    <Layout basis='32px' />
    <Layout>
      <Row>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.date)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.browser)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.ip)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.country)}
          </Text>
        </Layout>
        <Layout basis='20%'>
          <Text
            size='small'
            weight='bold'
            color='gray400'
          >
            {intl.formatMessage(messages.status)}
          </Text>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='10px' />
    <Layout>
      <Divider color='gray' />
    </Layout>
    <Layout basis='12px' />
    <Layout justify='center'>
      <Text
        size='medium'
        color='gray400'
        weight='light'
      >
        {intl.formatMessage(messages.empty)}
      </Text>
    </Layout>
    <Layout basis={`${offset}px`} />
  </Column>
)

export default injectIntl(Information)
