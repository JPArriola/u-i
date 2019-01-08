import { connect } from 'react-redux';
import CreateAlbumForm from './create_album_form';
import { createAlbum, getAllAlbums } from '../../actions/album_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    authorId: state.session.user.id,
  };
};

const mDTP = (dispatch) => {
  return {
    createAlbum: (sticky) => dispatch(createAlbum(sticky)),
    getAllAlbums: (userId) => dispatch(getAllAlbums(userId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(CreateAlbumForm);