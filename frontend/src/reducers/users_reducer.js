import { RECEIVE_PARTNER } from '../actions/profile_actions';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PARTNER:
      return Object.assign({}, state, action.partner.data);
    default:
      return state;
  }
};

