import { connect } from 'react-redux'
import { change as changeLocale } from '../../../../actions/locale'
import App from '../../components/mobile/App'

export default connect(
  state => ({
    locale: state.locale.locale,
    progress: state.remote.percent,
  }),
  dispatch => ({
    onChange: locale => dispatch(changeLocale(locale)),
  }),
)(App)
