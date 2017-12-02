import {
   RECEIVE_REGISTRATION,
    RECEIVE_REGISTRATIONS, REMOVE_REGISTRATION }
     from '../actions/registration_actions';
import { LOGOUT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const registrationReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case LOGOUT_USER:
      return {};
    case RECEIVE_REGISTRATIONS:
      return action.registrations;
    case RECEIVE_REGISTRATION:
      return merge(newState, action.registration);
    default:
      return state;
  }
};

export default registrationReducer;
