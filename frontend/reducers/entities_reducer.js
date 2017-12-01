import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import BookmarksReducer from './bookmarks_reducer';
// import TicketsReducer from './tickets_reducer';

export default combineReducers({
  events: EventsReducer,
  userBookmarks: BookmarksReducer
  // ticket: TicketsReducer
});
