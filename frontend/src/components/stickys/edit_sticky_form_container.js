import { connect } from 'react-redux';
import EditStickyForm from './edit_sticky_form';
import { editSticky,getAllStickys } from '../../actions/sticky_actions';
import { fetchPartner } from '../../actions/profile_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let { id: authorId, partnerId: receiverId, connectionCode } = state.session.user;
  let { editStickyId: stickyId } = state.ui;
  let stickyInfo = state.stickys[stickyId].body;
  return { authorId, receiverId, connectionCode, stickyId, stickyInfo };
};

const mDTP = (dispatch) => {
  return {
    editSticky: (id, data) => dispatch(editSticky(id, data)),
    getAllStickys: (userId) => dispatch(getAllStickys(userId)),
    fetchPartner: (partnerId) => dispatch(fetchPartner(partnerId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(EditStickyForm);