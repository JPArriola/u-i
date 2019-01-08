import React from "react";
import {Link} from 'react-router-dom';
import '../stylesheets/albums/album-item.scss';

// class AlbumItem extends React.Component {

const AlbumItem = props => {
  return (
    <div className="album-item">
      <Link to={`/albums/${props.album._id}`} ></Link>
      <div className="album-cover">
        <img src="" alt=""></img>
        <div className="album-details">
        </div>
      </div>
    </div>
  )
}

export default AlbumItem;