import * as APIUtil from '../util/profile_api_util';
import {receiveCurrentUser} from './session_actions';

export const RECEIVE_PARTNER = "RECEIVE_PARTNER";

export const receivePartner = partner => ({
  type: RECEIVE_PARTNER,
  partner
});


// any API returns you a promise.
// Promise is required because they are async

export const fetchPartner = id => dispatch => (
  APIUtil.fetchPartner(id)
    .then(partner => ( dispatch(receivePartner(partner)) ))
);

export const updateProfile = id => dispatch => (
  APIUtil.updateProfile(id)
    .then(user => (dispatch(receiveCurrentUser(user))))
);