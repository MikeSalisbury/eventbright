import { connect } from 'react-redux';
import EventForm from './event_form';
import { fetchEvent, createEvent, updateEvent, deleteEvent } from '../../actions/event_actions';
import { clearErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let event;
  let ticket = {};
  const errors = state.errors.event;
  const eventId = ownProps.match.params.eventId;

  if (ownProps.match.path === '/events/:eventId/edit') {
    event = state.entities.events[eventId];
    if (event.ticket) {
      ticket = state.entities.events[eventId].ticket;
    }
  }

  return {
    event,
    ticket,
    eventId,
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
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    fetchEvent: (id) => dispatch(fetchEvent(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
