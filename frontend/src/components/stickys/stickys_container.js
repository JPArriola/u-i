import { connect } from 'react-redux';
import Stickys from './stickys';
import {
  getAllStickys,
  getSticky,
  editSticky,
  deleteSticky
} from '../../actions/sticky_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let stickys = Object.values(state.stickys);
  let userId = state.session.user.id;
  return {
    stickys,
    userId
  };
};

const mDTP = (dispatch) => {
  return {
    getAllStickys: (userId) => dispatch(getAllStickys(userId)),
    getSticky: (stickyId) => dispatch(getSticky(stickyId)),
    editSticky: (stickyId) => dispatch(editSticky(stickyId)),
    deleteSticky: (stickyId) => dispatch(deleteSticky(stickyId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(Stickys);