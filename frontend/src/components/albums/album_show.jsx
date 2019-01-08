import React from "react";
import Navbar from "../navbar/navbar_container";
import { withRouter } from "react-router-dom";
import MediaContainer from "../media/media_container";
import "../stylesheets/albums/album_show.scss";

class AlbumShow extends React.Component {

  componentDidMount(){
    this.props.getAlbum(this.props.albumId);
  }

  render() {
    let album = this.props.album;
    if(!album) return null;
    return (
      <div>
        <Navbar />
        <div className="empty-line"></div>
        <div className="albumshow-master">
          <div className="albumshow-title">
            {album.name}
          </div>
          <div className="albumshow-description">
            {album.description}
          </div>
          <div className="albumshow-year">
            {album.date}
          </div>
          <div className="albumshow-media-section">
            <MediaContainer />
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(AlbumShow);