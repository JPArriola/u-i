import { connect } from 'react-redux';
import UpdateUser from './update_user';
import {updateProfile} from '../../actions/profile_actions'

const mSTP = (state) => {
  return {
    user: state.session.user,
  };
};

const mDTP = (dispatch) => {
  return {
    updateProfile: userId => dispatch(updateProfile(userId))
  };
};

export default connect(mSTP, mDTP)(UpdateUser);