import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../stylesheets/navbar/navbar.scss";

class Navbar extends React.Component {

  handleLogout(e) {
    return(e) => {
      e.preventDefault();
      this.props.logout();
    };
  }

  render() {
    return <div className="navbar-master">
        <div className="navbar-workingspace">
          <Link to="/home" className="navbar-logo" />
          <div className="navbar-dates">
            <i className="fas fa-calendar-alt" />
            <Link to="/dates">dates</Link>
          </div>
          <div className="navbar-stickys">
            <i className="fas fa-sticky-note" />
            <Link to="/stickys">stickys</Link>
          </div>
          <div className="navbar-albums">
            <i className="fas fa-image" />
            <Link to="/albums">albums</Link>
          </div>
          <div className="navbar-logout" onClick={this.handleLogout()}>
            Log Out
          </div>
        </div>
      </div>;
  }
}

export default withRouter(Navbar);
