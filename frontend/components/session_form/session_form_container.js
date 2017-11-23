import SessionForm from './session_form';
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
  } else  {
    action = user => dispatch(signup(user));
    formType = 'Sign Up';
  }

  return {
    action,
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
