import {
   RECEIVE_REGISTRATION,
    RECEIVE_REGISTRATIONS } from '../actions/registration_actions';
import merge from 'lodash/merge';

const registrationReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_REGISTRATIONS:
      return action.registrations;
    case RECEIVE_REGISTRATION:
      return merge(newState, action.registration);
    default:
      return state;
  }
};

export default registrationReducer;