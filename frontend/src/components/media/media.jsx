import React from 'react';
import MediaItem from './media_item';

class Media extends React.Component {
  componentDidMount() {
    this.props.getAllMedia(this.props.media);
  }

  render() {
    if (!this.props.media) return null;
    let { user, deleteMedia, openModal, media } = this.props;
    let mediaItem = media.map((media, i) => {
      return (
        <MediaItem 
          media={media}
          key={i}
          user={user}
          deleteMedia={deleteMedia}
          openModal={openModal}
        />
      );
    });

    return (
      <div className="media-index">
        {mediaItem}
      </div>
    )
  }
}

export default Media;