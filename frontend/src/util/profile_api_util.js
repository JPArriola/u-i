import axios from 'axios';

// api/users/:id will have information for a specific user id

export const fetchPartner = (id) => {
  return axios.get(`/api/users/${id}`);
};

export const updateProfile = (id, userInfo) => {
  let {birthday, nickname, zipCode} = userInfo;
  return axios.patch(`/api/users/${id}`, {birthday, nickname, zipCode});
}

// export const getWeather = (zipcode) => {
//   return axios.get('api.openweathermap.org/data/2.5/weather?zip=92630')
//     .then(response => {
//       console.log(response.data.url);
//       console.log(response.data.explanation);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };