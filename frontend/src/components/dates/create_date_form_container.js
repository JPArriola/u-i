import { connect } from 'react-redux';
import CreateDateForm from './create_date_form';
import { createDate, getAllDates } from '../../actions/date_actions';


const mSTP = (state) => {
  return {
    authorId: state.session.user.id
  };
};

const mDTP = (dispatch) => {
  return {
    createDate:  (sticky) => dispatch(createDate( sticky)),
    getAllDates: (userId) => dispatch(getAllDates(userId)),
  };
};

export default connect(mSTP, mDTP)(CreateDateForm
  );