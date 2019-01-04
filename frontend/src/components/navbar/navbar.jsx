import React from "react";
import { withRouter } from "react-router-dom";
import "../stylesheets/navbar/navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="navbar-master">
        <div className="navbar-workingspace">
          <div className="navbar-logo">
          </div>
          <div className="navbar-dates">
            dates
          </div>
          <div className="navbar-stickys">
            stickys
          </div>
          <div className="navbar-albums">
            albums
          </div>
          <div>
            <button className="navbar-logout" onClick={ this.handleLogout }>Log Out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
