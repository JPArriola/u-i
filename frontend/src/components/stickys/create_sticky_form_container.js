import { connect } from 'react-redux';
import CreateStickyForm from './create_sticky_form';
import { createSticky,getAllStickys } from '../../actions/sticky_actions';
import { fetchPartner } from '../../actions/profile_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let { id, partnerId, connectionCode } = state.session.user;
  return {
    authorId: id,
    receiverId: partnerId,
    connectionCode
  };
};

const mDTP = (dispatch) => {
  return {
    createSticky: (sticky) => dispatch(createSticky(sticky)),
    getAllStickys: (userId) => dispatch(getAllStickys(userId)),
    fetchPartner: (partnerId) => dispatch(fetchPartner(partnerId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(CreateStickyForm);