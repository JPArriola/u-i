import React from "react";
import {Link} from 'react-router-dom';
import '../stylesheets/albums/album-item.scss';

// class AlbumItem extends React.Component {

const AlbumItem = props => {
  return (
    <div className="album-item">
      <Link to={`/albums/${props.album._id}`} >
        <div className="album-item-content">
          <div className="album-item-title">
            {props.album.name}
          </div>
          <div className="album-item-coverart">
            
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AlbumItem;