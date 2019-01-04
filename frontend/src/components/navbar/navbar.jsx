import React from "react";
import { withRouter } from "react-router-dom";
import "../stylesheets/navbar/navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div class="navbar-master">
        <div class="navbar-workingspace">
          <div class="navbar-logo">
          </div>
          <div class="navbar-dates">
            dates
          </div>
          <div class="navbar-stickys">
            stickys
          </div>
          <div class="navbar-albums">
            albums
          </div>
          <div class="navbar-logout">
            <form onSubmit={this.handleSubmit} id="logout" className="business-nav-session">
              <input type="submit" value="Logout" className="business-nav-signup" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
