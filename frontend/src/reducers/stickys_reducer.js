import { RECEIVE_STICKY, RECEIVE_ALL_STICKYS, REMOVE_STICKY_ITEM } from '../actions/sticky_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_STICKYS:
      return action.stickys;
    case RECEIVE_STICKY:
      newState = Object.assign({}, state, {[action.sticky.data._id]: action.sticky.data});
      return newState;
    case REMOVE_STICKY_ITEM:
      newState = Object.assign({}, state);
      delete newState[action.stickyItem.data._id];
      return newState;
    default:
      return state;
  }
}
