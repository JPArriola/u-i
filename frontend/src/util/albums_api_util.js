import axios from 'axios';

export const createAlbum = (album) => {
  return axios.post('/api/albums/', album);
};

export const getAlbum = (albumId) => {
  return axios.get(`/api/albums/${albumId}`);
};

export const getAllAlbums = (userId) => {
  return axios.get(`/api/albums/user/${userId}`);
};

export const editAlbum = (albumId) => {
  return axios.patch(`/api/albums/${albumId}`);
};

export const deleteAlbum = (albumId) => {
  return axios.delete(`/api/albums/${albumId}`);
};