import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';
import Home from './home';

const mSTP = (state) => {
  return {
    user: state.session.user,
    partner: Object.keys(state.users)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(Home);