import { EDIT_STICKY } from '../actions/sticky_actions';

export default function editStickyReducer(state = null, action) {
  switch (action.type) {
    case EDIT_STICKY:
      return action.stickyId;
    default:
      return state;
  }
}
