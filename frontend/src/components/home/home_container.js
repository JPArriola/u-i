import { connect } from 'react-redux';
import { fetchPartner } from '../../actions/profile_actions';
import Home from './home';

const mSTP = (state) => {
  console.warn("Container", state)
  let partnerId = state.session.user.partnerId;
  return {
    user: state.session.user,
    partner: state.partner,
    partnerId,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPartner: userId => dispatch(fetchPartner(userId)),
  };
};

export default connect(mSTP, mDTP)(Home);