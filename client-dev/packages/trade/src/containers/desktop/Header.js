import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { change as changeLocale } from '@c3/common/src/actions/locale'
import { logout } from '@c3/common/src/actions/security'
import { toggle } from '../../actions/menu'
import Header from '../../components/desktop/Header'

export default withRouter(connect(
  state => ({
    email: state.user.email || state.security.email || '',
    showProfile: state.menu.profile,
    locale: state.locale.locale,
  }),
  (dispatch, { history }) => ({
    onChangeLocale: locale => dispatch(changeLocale(locale)),
    onToggleProfile: () => dispatch(toggle('profile')),
    onLogout: () => dispatch(logout()),
    onLogin: () => history.push('/auth'),
  }),
)(Header))
