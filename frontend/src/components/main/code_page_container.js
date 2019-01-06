import { connect } from 'react-redux';
import { connectUser, logout } from '../../actions/session_actions';
import CodePage from './code_page';

const mSTP = (state) => {
  return {
    user: state.session.user,
    errors: state.errors.connection,
    connected: state.session.user.connected
  };
};

const mDTP = (dispatch) => {
  return {
    connectUser: (userId, connectionCode) => dispatch(connectUser(userId, connectionCode)),
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(CodePage);