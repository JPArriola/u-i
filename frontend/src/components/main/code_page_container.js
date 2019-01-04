import { connect } from 'react-redux';
import CodePage from './code_page';

const mSTP = (state) => {
  return {
    user: state.session.user
  };
};

// const mDTP = (dispatch) => {
//   return {
//     signup: user => dispatch(signup(user))
//   };
// };

export default connect(mSTP, null)(CodePage);