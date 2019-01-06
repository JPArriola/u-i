import { connect } from 'react-redux';
import { fetchPartner } from '../../actions/profile_actions';
import Home from './home';

const mSTP = (state) => {
  let partnerId = state.session.user.partnerId;
  return {
    user: state.session.user,
    partner: state.users,
    partnerId,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPartner: userId => dispatch(fetchPartner(userId)),
  };
};

export default connect(mSTP, mDTP)(Home);