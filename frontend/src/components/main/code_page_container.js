import { connect } from 'react-redux';
import { connectUser, logout } from '../../actions/session_actions';
import CodePage from './code_page';

const mSTP = (state) => {
  return {
    user: state.session.user
  };
};

const mDTP = (dispatch) => {
  return {
    connectUser: userId => dispatch(connectUser(userId)),
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(CodePage);