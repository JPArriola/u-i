import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getAlbum } from '../../actions/album_actions'
import { getAllMedia } from '../../actions/media_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  let albumId = ownProps.match.params.id;
  let album = state.albums[albumId];
  console.log("album", album);
  return {
    album,
    albumId,
    authorId: state.session.user.id,
  };
};

const mDTP = (dispatch) => {
  return {
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
    getAllMedia: (albumId) => dispatch(getAllMedia(albumId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(AlbumShow);