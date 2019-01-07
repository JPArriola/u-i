import * as APIUtil from '../util/profile_api_util';
import {receiveCurrentUser} from './session_actions';
import jwt_decode from 'jwt-decode';
import {setAuthToken} from '../util/session_api_util';

export const RECEIVE_PARTNER = "RECEIVE_PARTNER";
export const RECEIVE_UPDATED_CURRENT_USER = "RECEIVE_UPDATED_CURRENT_USER";

export const receivePartner = partner => ({
  type: RECEIVE_PARTNER,
  partner
});

export const receiveUpdatedCurrentUser = user => ({
  type: RECEIVE_UPDATED_CURRENT_USER,
  user
});

// any API returns you a promise.
// Promise is required because they are async

export const fetchPartner = id => dispatch => (
  APIUtil.fetchPartner(id)
    .then(partner => ( dispatch(receivePartner(partner)) ))
);

export const fetchUpdatedCurrentUser = (id) => dispatch => (
  APIUtil.fetchPartner(id)
    .then(user => dispatch(receiveCurrentUser(user.data)))
)

export const updateProfile = (id, userInfo) => dispatch => (
  APIUtil.updateProfile(id, userInfo)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
  })
);