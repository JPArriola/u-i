import * as MediaAPIUtil from '../util/media_api_util';

export const RECEIVE_MEDIA_ITEM = 'RECEIVE_MEDIA_ITEM';
export const RECEIVE_ALL_MEDIA = 'RECEIVE_ALL_MEDIA';
export const REMOVE_MEDIA = 'REMOVE_MEDIA';

export const receiveMediaItem = mediaItem => ({
  type: RECEIVE_MEDIA_ITEM,
  mediaItem
});

export const receiveAllMedia = media => ({
  type: RECEIVE_ALL_MEDIA,
  media
});

export const removeMedia = (mediaItem) => ({
  type: REMOVE_MEDIA,
  mediaItem
});

export const createMedia = (albumId, mediaItem) => dispatch => (
  MediaAPIUtil.createMedia(albumId, mediaItem)
    .then(mediaItem => (dispatch(receiveMediaItem(mediaItem))))
);

export const getAllMedia = (albumId) => dispatch => (
  MediaAPIUtil.getAllMedia(albumId)
    .then(media => (dispatch(receiveAllMedia(media.data))))
);

export const getMediaItem = (mediaId) => dispatch => (
  MediaAPIUtil.getMediaItem(mediaId)
    .then(media => (dispatch(receiveMediaItem(media))))
);

export const deleteMedia = (mediaId) => dispatch => (
  MediaAPIUtil.deleteMedia(mediaId)
    .then(mediaId => (dispatch(removeMedia(mediaId))))
);