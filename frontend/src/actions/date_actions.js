import * as APIUtil from '../util/dates_api_util';

export const RECEIVE_DATE = 'RECEIVE_DATE';
export const RECEIVE_ALL_DATES = 'RECEIVE_ALL_DATES';

export const receiveDate = date => ({
  type: RECEIVE_DATE,
  date
});

export const receiveAllDates = dates => ({
  type: RECEIVE_ALL_DATES,
  dates
});

export const createDate = (date) => dispatch => (
  APIUtil.createDate(date)
  .then(date => (dispatch(receiveDate(date))))
);

export const getAllDates = (userId) => dispatch => (
  APIUtil.getAllDates(userId)
  .then(dates => (dispatch(receiveAllDates(dates))))
);

export const getDate = (dateId) => dispatch => (
  APIUtil.getDate(dateId)
  .then(date => (dispatch(receiveDate(date))))
);

export const editDate = (dateId) => dispatch => (
  APIUtil.editDate(dateId)
  .then(date => (dispatch(receiveDate(date))))
);

export const deleteDate = (dateId) => dispatch => (
  APIUtil.deleteDate(dateId)
  .then(date => (dispatch(receiveDate(date))))
);