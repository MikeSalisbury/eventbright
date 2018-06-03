import { connect } from 'react-redux';
import Search from './search';
import { fetchEvents }
 from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
