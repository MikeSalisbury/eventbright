import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
