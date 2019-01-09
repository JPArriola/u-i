import { connect } from 'react-redux';
import Media from './media';

import {
  createMedia,
  getAllMedia,
  getMediaItem,
  deleteMedia
} from '../../actions/media_actions';

import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let media = Object.values(state.media);
  let user = state.session.user;

  return {
    media,
    user
  };
};

const mDTP = (dispatch) => {
  return {
    createMedia: (albumId, media) => dispatch(createMedia(albumId, media)),
    getAllMedia: (albumId) => dispatch(getAllMedia(albumId)),
    getMediaItem: (mediaId) => dispatch(getMediaItem(mediaId)),
    deleteMedia: (mediaId) => dispatch(deleteMedia(mediaId)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(Media);