import React from "react";
import Navbar from "../navbar/navbar_container";
import AlbumItem from './album_item.jsx';
import "../stylesheets/albums/album.scss";

class Albums extends React.Component {
	componentDidMount() {
		this.props.getAllAlbums(this.props.user.id);	
	}

	render() {
		if (!this.props.albums) return null;
		let albums = this.props.albums.map((album, i) => {
			return (
				<AlbumItem album={album} key={i} />
			);
		});

		return (
			<div className="albums-page">
				<Navbar />
				<div className="empty-line"></div>
				<div className="album-index-with-button">
					<button className="create-album-button" onClick={() => this.props.openModal("createAlbum")}>Create Album</button>
					<div className="album-index">
						{albums}
					</div>
				</div>
			</div>
		);
	}
}

export default Albums;