import * as AlbumAPIUtil from '../util/albums_api_util';

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
  AlbumAPIUtil.getAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
);

export const createAlbum = (album) => dispatch => (
  AlbumAPIUtil.createAlbum(album)
    .then(album => dispatch(receiveAlbum(album)))
);

export const getAllAlbums = (userId) => dispatch => (
  AlbumAPIUtil.getAllAlbums(userId)
    .then(albums => dispatch(receiveAllAlbums(albums.data)))
);

export const editAlbum = (albumId) => dispatch => (
  AlbumAPIUtil.editAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
);

export const deleteAlbum = (albumId) => dispatch => (
  AlbumAPIUtil.deleteAlbum(albumId)
    .then(album => dispatch(removeAlbum(albumId)))
)