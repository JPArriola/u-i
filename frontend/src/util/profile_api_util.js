import axios from 'axios';

// api/users/:id will have information for a specific user id

export const fetchPartner = (id) => {
  return axios.get(`/api/users/${id}`);
};

export const updateProfile = (id) => {
  return axios.patch(`/api/users/${id}`);
}