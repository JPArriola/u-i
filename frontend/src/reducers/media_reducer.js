import { 
  RECEIVE_MEDIA_ITEM, 
  RECEIVE_ALL_MEDIA,
  REMOVE_MEDIA 
} from '../actions/media_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_MEDIA:
      return action.media;
    case RECEIVE_MEDIA_ITEM:
      newState = Object.assign({}, state, { [action.mediaItem.data._id]: action.mediaItem.data });
      return newState;
    // case REMOVE_MEDIA:
    //   newState = Object.assign({}, state);
    //   delete newState[action.mediaItem.data._id];
    //   return newState;
    default:
      return state;
  }
}
