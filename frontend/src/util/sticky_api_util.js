import axios from 'axios';

export const createSticky = (sticky) => {
  return axios.post('/api/stickys/', sticky);
};

export const getAllStickys = (userId) => {
  return axios.get(`/api/stickys/user/${userId}`);
};

export const getSticky = (stickyId) => {
  return axios.get(`/api/stickys/${stickyId}`);
};

export const editSticky = (stickyId, sticky) => {
  return axios.patch(`/api/stickys/${stickyId}`, sticky);
};

export const deleteSticky = (stickyId) => {
  return axios.delete(`/api/stickys/${stickyId}`);
};