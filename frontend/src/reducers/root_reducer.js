import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import partner from './users_reducer';
import ui from './ui_reducer';


const RootReducer = combineReducers({
  session,
  errors,
  partner,
  ui,
});

export default RootReducer;