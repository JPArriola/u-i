import { connect } from 'react-redux';
import { fetchPartner, fetchUpdatedCurrentUser } from '../../actions/profile_actions';
import {openModal} from '../../actions/modal_actions';
import Home from './home';

const mSTP = (state) => {
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
    openModal: modal => dispatch(openModal(modal)),
    fetchUpdatedCurrentUser: id => dispatch(fetchUpdatedCurrentUser(id)),
  };
};

export default connect(mSTP, mDTP)(Home);