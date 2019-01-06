import { RECEIVE_CONNECTION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullErrors = [];

const ConnectionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONNECTION_ERRORS:
      return action.connectionErrors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default ConnectionErrorsReducer;