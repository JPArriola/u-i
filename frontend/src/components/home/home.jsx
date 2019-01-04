import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import '../stylesheets/home/home.scss';

class Home extends React.Component {
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
  return <div>
      <Navbar />
      <div className="content-master">
        <div className="home-relationship-profiles">
          <div className="profiles-container">
            <div className="profiles-user">
              <div className="profile-picture" />
              <div className="profile-content" />
            </div>
            <div className="profiles-daycount">
              <div className="daycount" />
              <img src="../images/heart.png" className="profiles-heart" />
            </div>
            <div className="profiles-user">
              <div className="profile-picture" />
              <div className="profile-content" />
            </div>
          </div>
          <div className="profiles-event-container">
            <div className="event-header">Coming Soon</div>
            <div className="event-information-container">
              <div className="event-information">Event</div>
              <div className="event-date">Date</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default withRouter(Home);