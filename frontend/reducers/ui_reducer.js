import { RECEIVE_VALID_EMAIL } from '../actions/session_actions';
import merge from 'lodash/merge';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VALID_EMAIL:
      const validEmail = action.validEmail;
      return merge({}, {validEmail});
    default:
      return state;
  }
};

export default uiReducer;
