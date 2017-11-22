import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = { currentUser: null};

const sessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};

export default sessionReducer;
