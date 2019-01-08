import { RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS, REMOVE_ALBUM } from '../actions/album_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
    return action.albums;
    case RECEIVE_ALBUM:
      let newState = Object.assign({}, state, action.album.data);
      return newState;
    case REMOVE_ALBUM:
      let newState_2 = Object.assign({}, state, action.album.data);
      delete newState_2[action.albumId];
      return newState_2;
    default:
      return state;
  }
}

