import React from 'react';
import { withRouter } from 'react-router-dom';
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
  return (
    <div class="content-master">
      <div class="home-relationship-profiles">
        <div class="profiles-container">
          <div class="profiles-user">
            <div class="profile-picture">

            </div>
            <div class="profile-content">

            </div>
          </div>
          <div class="profiles-daycount">
            <div class="daycount">
            </div>
            <img src="../images/heart.png" class="profiles-heart"/>          
          </div>
          <div class="profiles-user">
            <div class="profile-picture">

            </div>
            <div class="profile-content">

            </div>
          </div>

        </div>
        <div class="profiles-event-container">
          <div class="event-header">
            Coming Soon
          </div>
          <div class="event-information-container">
            <div class="event-information">
              Event
            </div>
            <div class="event-date">
              Date
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(Home);