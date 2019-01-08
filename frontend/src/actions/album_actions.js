import * as albumAPIUtil from '../util/albums_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const removeAlbum = (albumId) => ({
  type: REMOVE_ALBUM,
  albumId
});

export const getAlbum = (albumId) => dispatch => (
  albumAPIUtil.getAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
);

export const createAlbum = (album) => dispatch => (
  albumAPIUtil.createAlbum(album)
    .then(album => dispatch(receiveAlbum(album)))
);

export const getAllAlbums = (userId) => dispatch => (
  albumAPIUtil.getAllAlbums(userId)
    .then(albums => dispatch(receiveAllAlbums(albums)))
);

export const editAlbum = (albumId) => dispatch => (
  albumAPIUtil.editAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
);

export const deleteAlbum = (albumId) => dispatch => (
  albumAPIUtil.deleteAlbum(albumId)
    .then(album => dispatch(removeAlbum(albumId)))
)