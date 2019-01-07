import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import partner from './users_reducer';
import dates from './dates_reducer';
import ui from './ui_reducer';
import stickys from './stickys_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  partner,
  dates,
  ui,
  stickys
});

export default RootReducer;