import { RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS, REMOVE_ALBUM } from '../actions/album_actions';

export default function (state = {}, action) {
  let newState = {};

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
    return action.albums;
    case RECEIVE_ALBUM:
      newState = Object.assign({}, state, {[action.album.data._id]: action.album.data});
      return newState;
    case REMOVE_ALBUM:
      newState = Object.assign({}, state, action.album.data);
      delete newState[action.albumId];
      return newState;
    default:
      return state;
  }
}

