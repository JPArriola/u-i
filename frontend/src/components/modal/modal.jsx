import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UpdateUserContainer from '../user/update_user_container';
import CreateStickyFormContainer from '../stickys/create_sticky_form_container';
import EditStickyFormContainer from '../stickys/edit_sticky_form_container';
import CreateAlbumFormContainer from '../albums/create_album_form_container';
// import MediaItemContainer from '../media/media_index_container';
import "../stylesheets/modal/modal.scss";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "editUser":
      component = <UpdateUserContainer />;
      break;
    case "createSticky":
      component = <CreateStickyFormContainer />;
      break;
    case "editSticky":
      component = <EditStickyFormContainer />;
      break;
    case "createAlbum":
      component = <CreateAlbumFormContainer />;
      break;
    // case "viewMedia":
    //   component = <MediaItemContainer />;
    //   break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={ closeModal }>
      { component }
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    modal: state.ui.modal,
    id: state.ui.editStickyId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
};



export default connect(mapStateToProps, mapDispatchToProps)(Modal);