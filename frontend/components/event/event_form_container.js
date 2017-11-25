import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, updateEvent, deleteEvent } from '../../actions/event_actions';
import { clearErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let event;
  if (ownProps.match.path === '/events/:eventId/edit') {
    event = state.entities.events[ownProps.match.params.eventId];
  }
  const errors = state.errors.event;

  return {
    event,
    errors
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  let formType;
  if (ownProps.match.path === '/events/:eventId/edit') {
    action = (event) => dispatch(updateEvent(event));
    formType = 'Update';
  } else {
    action = (event) => dispatch(createEvent(event));
    formType = 'Create';
  }

  return {
    action,
    formType,
    clearErrors: () => dispatch(clearErrors()),
    deleteEvent: (id) => dispatch(deleteEvent(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
