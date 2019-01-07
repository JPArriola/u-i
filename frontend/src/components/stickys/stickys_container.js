import { connect } from 'react-redux';
import Stickys from './stickys';
import {
  getAllStickys,
  getSticky,
  editSticky,
  deleteSticky
} from '../../actions/sticky_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchPartner } from '../../actions/profile_actions';

const mSTP = (state) => {
  let stickys = Object.values(state.stickys);
  let user = state.session.user;
  let partnerId = state.session.user.partnerId;

  return {
    stickys,
    user,
    partnerId,
    partner: state.partner,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPartner: userId => dispatch(fetchPartner(userId)),
    getAllStickys: (userId) => dispatch(getAllStickys(userId)),
    getSticky: (stickyId) => dispatch(getSticky(stickyId)),
    editSticky: (stickyId) => dispatch(editSticky(stickyId)),
    deleteSticky: (stickyId) => dispatch(deleteSticky(stickyId)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(Stickys);