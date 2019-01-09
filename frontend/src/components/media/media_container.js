import { connect } from 'react-redux';
import Media from './media';

import {
  getAllMedia,
  getMediaItem,
} from '../../actions/media_actions';

const mSTP = (state) => {
  let media = Object.values(state.media);

  return {
    media
  };
};

const mDTP = (dispatch) => {
  return {
    getAllMedia: (albumId) => dispatch(getAllMedia(albumId)),
    getMediaItem: (mediaId) => dispatch(getMediaItem(mediaId))
  };
};

export default connect(mSTP, mDTP)(Media);