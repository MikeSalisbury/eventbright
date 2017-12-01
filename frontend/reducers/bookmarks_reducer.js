import { RECEIVE_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK }
  from '../actions/bookmark_actions';
import merge from 'lodash/merge';

const bookmarkReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKMARKS:
      return action.bookmarks;
    case RECEIVE_BOOKMARK:
      newState = merge({}, state);
      return merge(newState, action.bookmark);
    case REMOVE_BOOKMARK:
      delete newState[action.bookmark.id];
      return newState;
    default:
    return state;
  }
};

export default bookmarkReducer;
