import { connect } from 'react-redux';
import MediaItem from './media_item';

import { getMediaItem } from '../../actions/media_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let media = Object.values(state.media);

  return {
    media
  };
};

const mDTP = (dispatch) => {
  return {
    getMediaItem: (mediaId) => dispatch(getMediaItem(mediaId)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(MediaItem);