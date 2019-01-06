import { connect } from 'react-redux';
import { connectUser } from '../../actions/session_actions';
import CodePage from './code_page';

const mSTP = (state) => {
  return {
    user: state.session.user
  };
};

const mDTP = (dispatch) => {
  return {
    connectUser: userId => dispatch(connectUser(userId))
  };
};

export default connect(mSTP, mDTP)(CodePage);