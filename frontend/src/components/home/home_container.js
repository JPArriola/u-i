import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions'
import Home from './home';

const mSTP = (state) => {
  return {
    
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId)),
  };
};

export default connect(null, mDTP)(Home);