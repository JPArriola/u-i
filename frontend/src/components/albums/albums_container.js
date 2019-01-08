import { connect } from 'react-redux';
import Albums from './albums';
import { getAlbum, getAllAlbums, editAlbum, deleteAlbum } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let user = state.session.user;
  console.log("this is my state!!", state);

  let albums = Object.values(state.albums);

  return {
    albums,
    user,
  };
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: (userId) => dispatch(getAllAlbums(userId)),
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
    editAlbum: (albumId) => dispatch(editAlbum(albumId)),
    deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(Albums);