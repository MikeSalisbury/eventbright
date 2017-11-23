//import SessionForm from './session_form';
import SessionFormModal from './session_form_modal';
import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  validEmail: state.ui.validEmail
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
    formType
  };
};

export default connect(mapStateToProps,
   mapDispatchToProps)(SessionFormModal);
