import { connect } from 'react-redux';
import { fetchFilteredEvents, fetchEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
fetchEvents: () => dispatch(fetchEvents()),
fetchFilteredEvents: (category) => dispatch(fetchFilteredEvents(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
