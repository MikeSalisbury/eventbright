import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent, deleteEvent} from '../../actions/event_actions';
import { fetchBookmarks, createBookmark, removeBookmark }
 from '../../actions/bookmark_actions';
import EventShow from './event_show';
import { createRegistration, fetchRegistrations } from '../../actions/registration_actions';

const mapStateToProps = (state, ownProps) => {
  let ticket = {} ;
  let eventId = ownProps.match.params.eventId;
  let event = state.entities.events[eventId];
  let bookmarks = state.entities.userBookmarks;
  let registrations = state.entities.userRegistrations;

    if (event) {
      ticket = state.entities.events[eventId].ticket;
    }
    return ({
      event,
      ticket,
      eventId,
      bookmarks,
      registrations,
      errors: state.errors.event,
      currentUser: state.session.currentUser
    });
  };

const mapDispatchToProps = dispatch => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  deleteEvent: eventId => dispatch(deleteEvent(eventId)),
  createRegistration: registration =>
   dispatch(createRegistration(registration)),
  fetchBookmarks: () => dispatch(fetchBookmarks()),
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  removeBookmark: (id) => dispatch(removeBookmark(id)),
  fetchRegistrations: () => dispatch(fetchRegistrations())
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(EventShow));
