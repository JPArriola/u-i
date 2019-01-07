import axios from 'axios';

export const createSticky = (sticky) => {
  return axios.post('/api/stickys/', sticky);
};

export const getAllStickys = (userId) => {
  return axios.get(`/api/stickys/user/${userId}`);
};

export const getSticky = (dateId) => {
  return axios.get(`/api/stickys/${dateId}`);
};

export const editSticky = (dateId) => {
  return axios.patch(`/api/stickys/${dateId}`);
};

export const deleteSticky = (dateId) => {
  return axios.delete(`/api/stickys/${dateId}`);
};