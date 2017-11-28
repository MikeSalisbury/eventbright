import SessionFormModal from './session_form_modal';
import { connect } from 'react-redux';
import { login, signup, logout, demoLogin } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  validEmail: state.ui.validEmail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  let formType;
  if (ownProps.match.path === '/signin/login') {
    action = user => dispatch(login(user));
    formType = 'Login';
  } else if (ownProps.match.path === '/signin/signup') {
    action = user => dispatch(signup(user));
    formType = 'Sign Up';
  } else {
    formType = 'Sign In';
    action = null;
  }

  return {
    action,
    demoLogin: user => dispatch(demoLogin(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(mapStateToProps,
   mapDispatchToProps)(SessionFormModal);
