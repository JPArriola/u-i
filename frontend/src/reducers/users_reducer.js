import { RECEIVE_USER } from '../actions/profile_actions';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

