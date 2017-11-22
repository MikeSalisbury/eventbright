import SigninForm from './signin_form';
import { connect } from 'react-redux';
import { emailCheck } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = (dispatch) => ({
  emailCheck: (email) => dispatch(emailCheck(email))
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(SigninForm));
