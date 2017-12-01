import { connect } from 'react-redux';
import { fetchFilteredEvents, fetchEvents }
 from '../../actions/event_actions';
import { fetchBookmarks, createBookmark, removeBookmark }
 from '../../actions/bookmark_actions';
import EventIndex from './event_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser,
  bookmarks: state.entities.userBookmarks
});

const mapDispatchToProps = dispatch => ({
fetchEvents: () => dispatch(fetchEvents()),
fetchFilteredEvents: (category) => dispatch(fetchFilteredEvents(category)),
fetchBookmarks: () => dispatch(fetchBookmarks()),
createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
removeBookmark: (id) => dispatch(removeBookmark(id))
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(EventIndex));
