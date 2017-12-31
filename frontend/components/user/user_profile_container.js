import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { fetchEvents } from '../../actions/event_actions';
import { fetchBookmarks, createBookmark, removeBookmark }
 from '../../actions/bookmark_actions';
import { fetchRegistrations } from '../../actions/registration_actions';

const mapStateToProps = state => {
  return({
  events: state.entities.events,
  currentUser: state.session.currentUser,
  bookmarks: state.entities.userBookmarks,
  registrations: state.entities.userRegistrations
});};

const mapDispatchToProps = dispatch => ({
fetchEvents: () => dispatch(fetchEvents()),
fetchBookmarks: () => dispatch(fetchBookmarks()),
createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
removeBookmark: (id) => dispatch(removeBookmark(id)),
fetchRegistrations: () => dispatch(fetchRegistrations())
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(UserProfile));
