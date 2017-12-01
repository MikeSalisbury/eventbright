import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import BookmarksReducer from './bookmarks_reducer';
import RegistrationReducer from './registration_reducer';
// import TicketsReducer from './tickets_reducer';

export default combineReducers({
  events: EventsReducer,
  userBookmarks: BookmarksReducer,
  userRegistrations: RegistrationReducer
  // ticket: TicketsReducer
});
