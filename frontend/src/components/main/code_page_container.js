import { connect } from 'react-redux';
import CodePage from './code_page';

const mSTP = (state) => {
  console.warn(state.session.user)
  return {
    user: state.session.user
  };
};

export default connect(mSTP, null)(CodePage);