import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
logout: () => dispatch(logout()),
fetchEvents: () => dispatch(fetchEvents())
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(NavBar));
