import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UiReducer from './ui_reducer';


export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UiReducer
});
