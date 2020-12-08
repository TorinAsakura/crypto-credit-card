import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { change as changeLocale } from '@c3/common/src/actions/locale'
import { toggle } from '../../actions/menu'
import Header from '../../components/mobile/Header'

export default withRouter(connect(
  state => ({
    locale: state.locale.locale,
  }),
  dispatch => ({
    onChangeLocale: locale => dispatch(changeLocale(locale)),
    onToggleProfile: () => dispatch(toggle('profile')),
    onToggleToolbar: () => dispatch(toggle('toolbar')),
  }),
)(Header))
