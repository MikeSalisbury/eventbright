import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';

export default combineReducers({
  events: EventsReducer,
});
