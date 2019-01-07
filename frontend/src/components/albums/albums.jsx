import React from "react";
import Navbar from "../navbar/navbar_container";

class Albums extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="empty-line"></div>
				ALBUMS
			</div>
		);
	}
}

export default Albums;