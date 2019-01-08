import React from "react";
import '../stylesheets/media/media-item.scss';

class MediaItem extends React.Component {

  handleDeleteMedia() {
    return (e) => {
      this.props.deleteMedia(this.props.media._id);
    };
  }

  handleOpenMediaItem() {
    return (e) => {
      this.props.getMediaItem(this.props.media._id);
      this.props.openModal("viewMedia");
    }
  }

  render() {
    let { media } = this.props;

    return (
      <div className="media-item">
        <div className="media-img" onClick={this.handleOpenMediaItem}>
          <img src={media.fileLink}></img>
        </div>
      </div>
    )
  }
}

export default MediaItem;