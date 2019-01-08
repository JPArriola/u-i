import axios from 'axios';

export const createMedia = (albumId, media) => {
  return axios.post(`/api/media/${albumId}/upload`, media);
};

export const getMediaItem = (mediaId) => {
  return axios.get(`/api/media/${mediaId}`);
};

export const getAllMedia = (albumId) => {
  return axios.get(`/api/media/album/${albumId}`);
};

// export const deleteMedia = (mediaId) => {
//   return axios.delete(`/api/albums/${mediaId}`);
// };