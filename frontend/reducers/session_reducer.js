import { LOGOUT_USER, RECEIVE_CURRENT_USER, RECEIVE_DEMO_USER }
  from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = { currentUser: null};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let currentUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_DEMO_USER:
      currentUser = action.demoUser;
      return merge({}, { currentUser });
    case LOGOUT_USER:
      currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
