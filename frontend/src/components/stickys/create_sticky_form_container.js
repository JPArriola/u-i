import { connect } from 'react-redux';
import CreateStickyForm from './create_sticky_form';
import { createSticky } from '../../actions/sticky_actions';
import { fetchPartner } from '../../actions/profile_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    authorId: state.session.user.id,
    receiverId: state.session.user.partnerId,
    connectionCode: state.session.user.connectionCode
  };
};

const mDTP = (dispatch) => {
  return {
    createSticky: (sticky) => dispatch(createSticky(sticky)),
    fetchPartner: (partnerId) => dispatch(fetchPartner(partnerId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(CreateStickyForm);