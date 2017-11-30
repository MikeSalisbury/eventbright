import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT
} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      const newEvent = { [action.event.id]: action.event };
      // return merge({}, state, newEvent);
      return newEvent;
    default:
      return state;
  }
};

export default eventReducer;
