import * as APIUtil from '../util/sticky_api_util';

export const RECEIVE_STICKY = 'RECEIVE_STICKY';
export const RECEIVE_ALL_STICKYS = 'RECEIVE_ALL_STICKYS';

export const receiveSticky = sticky => ({
  type: RECEIVE_STICKY,
  sticky
});

export const receiveAllStickys = stickys => ({
  type: RECEIVE_ALL_STICKYS,
  stickys
});

export const createSticky = (sticky) => dispatch => (
  APIUtil.createSticky(sticky)
  .then(sticky => (dispatch(receiveSticky(sticky))))
);

export const getAllStickys = (userId) => dispatch => (
  APIUtil.getAllStickys(userId)
  .then(stickys => (dispatch(receiveAllStickys(stickys))))
);

export const getSticky = (stickyId) => dispatch => (
  APIUtil.getSticky(stickyId)
  .then(sticky => (dispatch(receiveSticky(sticky))))
);

export const editSticky = (stickyId) => dispatch => (
  APIUtil.editSticky(stickyId)
  .then(sticky => (dispatch(receiveSticky(sticky))))
);

export const deleteSticky = (stickyId) => dispatch => (
  APIUtil.deleteSticky(stickyId)
  .then(sticky => (dispatch(receiveSticky(sticky))))
);