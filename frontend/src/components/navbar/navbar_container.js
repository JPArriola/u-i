import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import Navbar from './navbar';

const mSTP = (state) => {
  return {
    
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mDTP)(Navbar);