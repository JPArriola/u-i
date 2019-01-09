import React from "react";
import '../stylesheets/media/media-item.scss';

class MediaItem extends React.Component {

  handleDeleteMedia() {
    return (e) => {
      this.props.deleteMedia(this.props.media._id);
    };
  }

  render() {
    let { media } = this.props;

    return (
      <div className="media-item">
        <div className="media-img" onClick={() => this.props.openModal("viewMedia")}>
          <img src={media.fileLink} alt={media.fileLink}></img>
        </div>
        {/* <div className="send-media-button">
          <button>DELETE<i className="fa fa-trash-o"></i></button>
        </div> */}
      </div>
    )
  }
}

export default MediaItem;