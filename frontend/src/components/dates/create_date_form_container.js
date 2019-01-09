import { connect } from 'react-redux';
import CreateDateForm from './create_date_form';
import { createDate, getAllDates } from '../../actions/date_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let { id: authorId, connectionCode } = state.session.user;

  return {
    authorId,
    connectionCode
  };
};

const mDTP = (dispatch) => {
  return {
    createDate: (date) => dispatch(createDate(date)),
    getAllDates: (userId) => dispatch(getAllDates(userId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(CreateDateForm);