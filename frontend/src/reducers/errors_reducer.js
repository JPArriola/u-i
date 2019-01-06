import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import ConnectionErrorsReducer from './connection_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  connection: ConnectionErrorsReducer
});