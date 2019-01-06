import * as APIUtil from '../util/profile_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user // JSON file
});

// any API returns you a promise.
// Promise is required because they are async

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then(user => ( dispatch(receiveUser(user)) ))
);