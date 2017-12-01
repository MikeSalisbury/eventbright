import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const receiveEventErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const fetchEvents = () => dispatch => (
  APIUtil.fetchEvents()
    .then( events => dispatch(receiveEvents(events)),
    err => dispatch(receiveEventErrors(err.responseJSON)))
);

export const fetchFilteredEvents = (category) => dispatch => (
  APIUtil.fetchFilteredEvents(category)
  .then( events => dispatch(receiveEvents(events)),
  err => dispatch(receiveEventErrors(err.response.JSON)))
);

export const fetchEvent = (id) => dispatch => (
  APIUtil.fetchEvent(id)
    .then( event => dispatch(receiveEvent(event)),
    err => dispatch(receiveEventErrors(err.responseJSON)))
);

export const fetchUserEvents = (userId) => dispatch => (
  APIUtil.fetchUserEvents(userId)
    .then( events => dispatch(receiveEvents(events)),
    err => dispatch(receiveEventErrors(err.responseJSON)))
);

export const createEvent = (event) => dispatch => (
  APIUtil.createEvent(event)
    .then( newEvent => {
      dispatch(receiveEvent(newEvent));
    return newEvent.id;
  },
    err => dispatch(receiveEventErrors(err.responseJSON)))
);

export const updateEvent = (event) => dispatch => (
  APIUtil.updateEvent(event)
    .then( newEvent => dispatch(receiveEvent(newEvent)),
    err => dispatch(receiveEventErrors(err.responseJSON)))
);

export const deleteEvent = (eventId) => dispatch => (
  APIUtil.deleteEvent(eventId)
    .then( event => dispatch(receiveEvent(null)),
    err => dispatch(receiveEventErrors(err.responseJSON)))
);
