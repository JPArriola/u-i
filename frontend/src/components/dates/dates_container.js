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
    editDate: (dateId) => dispatch(editDate(dateId)),
    deleteDate: (dateId) => dispatch(deleteDate(dateId))
  };
};

export default connect(mSTP, mDTP)(Dates);