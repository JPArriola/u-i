import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// api/users/:id will have information for a specific user id

export const fetchUser = (id) => {
  return axios.get(`/api/users/${id}`);
};
