import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import partner from './users_reducer';
import dates from './dates_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  partner,
  dates
});

export default RootReducer;