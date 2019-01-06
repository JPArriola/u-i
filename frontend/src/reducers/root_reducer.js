import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import partner from './users_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  partner,
});

export default RootReducer;