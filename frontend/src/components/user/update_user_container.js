import { connect } from 'react-redux';
import UpdateUser from './update_user';
import {updateProfile} from '../../actions/profile_actions'
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    user: state.session.user,
  };
};

const mDTP = (dispatch) => {
  return {
    updateProfile: (userId, userInfo) => dispatch(updateProfile(userId, userInfo)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(UpdateUser);