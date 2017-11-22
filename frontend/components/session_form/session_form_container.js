import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  let formType;
  if (ownProps.match.path === '/signin/login') {
    action = user => dispatch(login(user));
    formType = 'login';
  } else  {
    action = user => dispatch(signup(user));
    formType = 'signup';
  }

  return {
    action,
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
