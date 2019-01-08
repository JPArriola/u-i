import React from "react";
import Navbar from "../navbar/navbar_container";
import AlbumItem from './album_item.jsx'
class Albums extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		debugger;
		
		this.props.getAllAlbums(this.props.user.id);	
	}

	render() {
		// if (!this.props.albums) return null;
		// let album = this.props.albums.map((album, i) => {
		// 	return (
		// 		<AlbumItem album={album}
		// 			key={i}
		// 			author={this.props.user}
		// 		/>
		// 	);
		// });

		return (
			<div>
				<Navbar />
				<div className="empty-line"></div>
				<div className="album-index-with-button">
					<button className="create-album-button" onClick={() => this.props.openModal("createAlbum")}>Create Album</button>
					<div className="album-index">
						{/* {album} */}

						ALBUMS
					</div>
				</div>
			</div>
		);
	}
}

export default Albums;