import React from "react";
import '../stylesheets/albums/album-item.scss';

class AlbumItem extends React.Component {

  render() {
    let { album } = this.props;
    return (
      <div className="album-item">
        <div className="album-cover">
          <img src="" alt=""></img>
          <div className="album-details">
            <h2>{album.name}</h2>  
            {/* <h3>{album.date}</h3>   */}
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumItem;