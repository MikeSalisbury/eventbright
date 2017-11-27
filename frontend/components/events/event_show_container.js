import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent, deleteEvent} from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  return ({event: state.entities.events[ownProps.match.params.eventId],
  eventId: ownProps.match.params.eventId,
  errors: state.errors.event,
  currentUser: state.session.currentUser});

};

const mapDispatchToProps = dispatch => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  deleteEvent: eventId => dispatch(deleteEvent(eventId))

});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(EventShow));
