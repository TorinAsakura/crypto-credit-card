import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

export default connect(
  state => ({
    defaultLocale: 'ru',
    locale: 'ru',
  }),
)(IntlProvider)
