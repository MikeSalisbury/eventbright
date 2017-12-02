import { RECEIVE_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK }
  from '../actions/bookmark_actions';
import merge from 'lodash/merge';
import { LOGOUT_USER } from '../actions/session_actions';

const bookmarkReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case LOGOUT_USER:
      return {};
    case RECEIVE_BOOKMARKS:
      return action.bookmarks;
    case RECEIVE_BOOKMARK:
      return merge(newState, action.bookmark);
    case REMOVE_BOOKMARK:
      delete newState[action.bookmark];
      return newState;
    default:
    return state;
  }
};

export default bookmarkReducer;
