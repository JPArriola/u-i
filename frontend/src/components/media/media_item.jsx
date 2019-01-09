import React from "react";
import '../stylesheets/media/media-item.scss';

class MediaItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteMedia = this.handleDeleteMedia.bind(this);
  }
  
  handleDeleteMedia() {
    return (e) => {
      debugger;

      this.props.deleteMedia(this.props.media._id);
    };
  }

  render() {
    let { media } = this.props;

    return (
      <div className="media-item">
        <div className="media-img">
        {/* <div className="media-img" onClick={() => this.props.openModal("viewMedia")}> */}
          <img src={media.fileLink} alt={media.fileLink}></img>
        </div>
        <div className="send-media-button">
          {/* <i className="fas fa-trash-alt" onClick={this.handleDeleteMedia}></i> */}
        </div>
      </div>
    )
  }
}

export default MediaItem;