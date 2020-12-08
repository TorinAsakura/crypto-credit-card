import React from 'react'
import { injectIntl } from 'react-intl'
import { Text } from '@c3/admin-ui/src/text'
import messages from '../messages'

const getTitle = (intl, path) => {
  switch (path) {
    case '/':
      return intl.formatMessage(messages.statistic)
    case '/currencies':
      return intl.formatMessage(messages.currencies)
    case '/operations':
      return intl.formatMessage(messages.operations)
    case '/applications':
      return intl.formatMessage(messages.applications)
    case '/users':
      return intl.formatMessage(messages.users)
    case '/verification':
      return intl.formatMessage(messages.verification)
    case '/black-list':
      return intl.formatMessage(messages.blackList)
    case '/support-articles':
      return intl.formatMessage(messages.supportArticles)
    case '/support-applications':
      return intl.formatMessage(messages.supportApplications)
    case '/news':
      return intl.formatMessage(messages.news)
    case '/comments':
      return intl.formatMessage(messages.comments)
    case '/chat':
      return intl.formatMessage(messages.chat)
    case '/settings':
      return intl.formatMessage(messages.settings)
    default:
      return ''
  }
}

const Title = ({ intl, location }) => (
  <Text
    uppercase
    lineHeight='large'
    color='gray500'
  >
    {getTitle(intl, location.pathname)}
  </Text>
)

export default injectIntl(Title)
