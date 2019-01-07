import axios from 'axios';

// api/users/:id will have information for a specific user id

export const fetchPartner = (id) => {
  return axios.get(`/api/users/${id}`);
};

export const updateProfile = (id, userInfo) => {
  let {email, nickname, zipCode} = userInfo;
  return axios.patch(`/api/users/${id}`, {email, nickname, zipCode});
}