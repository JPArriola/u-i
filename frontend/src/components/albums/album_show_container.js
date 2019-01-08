import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getAlbum } from '../../actions/album_actions'
// import { getAllMedia } from '../../actions/media_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    authorId: state.session.user.id,
  };
};

const mDTP = (dispatch) => {
  return {
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(AlbumShow);