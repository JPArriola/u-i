import React from "react";
import Navbar from "../navbar/navbar_container";
import { withRouter } from "react-router-dom";
import MediaContainer from "../media/media_container";
import "../stylesheets/albums/album_show.scss";

class AlbumShow extends React.Component {

  componentDidMount(){
    this.props.getAlbum(this.props.albumId);
    this.props.getAllMedia(this.props.albumId);
  }

  handleDeleteAlbum() {
    return (e) => {
      this.props.deleteAlbum(this.props.albumId);
    };
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
          <button className="create-album-button" onClick={() => this.props.openModal("addMedia")}>Add Media</button>
          {/* <button className="delete-album-button" onClick={this.handleDeleteAlbum}>Delete Album</button> */}
          {/* <i className="fas fa-trash-alt" onClick={this.handleDeleteAlbum}></i> */}
          <div className="albumshow-media-section">
            <MediaContainer album={album} />
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(AlbumShow);