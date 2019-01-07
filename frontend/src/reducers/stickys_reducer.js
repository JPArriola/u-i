import { RECEIVE_STICKY, RECEIVE_ALL_STICKYS } from '../actions/sticky_actions';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_STICKYS:
      return action.stickys;
    case RECEIVE_STICKY:
      let newState = Object.assign({}, state, action.sticky.data);
      return newState;
    default:
      return {};
  }
}
