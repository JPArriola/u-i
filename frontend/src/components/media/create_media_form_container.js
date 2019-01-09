import { connect } from 'react-redux';
import CreateMediaForm from './create_media_form';
import { createMedia, getAllMedia } from '../../actions/media_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  let albumId  = Object.keys(state.albums)[0];

  return {
    albumId,
  };
};

const mDTP = (dispatch) => {
  return {
    createMedia: (albumId, media) => dispatch(createMedia(albumId, media)),
    getAllMedia: (albumId) => dispatch(getAllMedia(albumId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(CreateMediaForm);