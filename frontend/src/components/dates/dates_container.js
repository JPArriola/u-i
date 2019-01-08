import { connect } from 'react-redux';
import {
  createDate,
  getAllDates,
  getDate,
  editDate,
  deleteDate
} from '../../actions/date_actions';
import Dates from './dates';

const mSTP = (state) => {
  console.warn(state)
  let dates = Object.values(state.dates);
  let user = state.session.user;

  return {
    dates,
    user
  };
};

const mDTP = (dispatch) => {
  return {
    createDate: (date) => dispatch(createDate(date)),
    getAllDates: (userId) => dispatch(getAllDates(userId)),
    getDate: (dateId) => dispatch(getDate(dateId)),
    editDate: (dateId, date) => dispatch(editDate(dateId, date)),
    deleteDate: (dateId) => dispatch(deleteDate(dateId))
  };
};

export default connect(mSTP, mDTP)(Dates);