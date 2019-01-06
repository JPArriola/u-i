import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import '../stylesheets/home/home.scss';

class Home extends React.Component {

  componentDidMount(){
    this.props.fetchPartner(this.props.partnerId);
  }
  
  render() {
    if (!this.props.partnerId) return null;
    return (
      <div>
        <Navbar />
        <div className="content-master">
          <div className="home-relationship-profiles">
            <div className="profiles-container">
              <div className="profiles-user">
                <div className="left-profile-picture" />
                <div className="profile-content">
                  <div>Name: {this.props.user.name}</div>
                  <div>Email: {this.props.user.email}</div>
                </div>
              </div>
              <div className="profiles-center">
                <div className="profiles-daycount">
                  <div className="daycount">
                    <div>Our First Day</div>
                    <div>1/1/2019</div>
                  </div>
                  <div className="profiles-heart" />
                </div>
                <div className="profiles-event-container">
                  <div className="event-header">Coming Soon</div>
                  <div className="event-information-container">
                    <div className="event-information">Event</div>
                    <div className="event-date">Date</div>
                  </div>
                </div>
              </div>
              <div className="profiles-user">
                <div className="right-profile-picture" />
                <div className="profile-content">
                  <div>Name: {this.props.partner.name}</div>
                  <div>Email: {this.props.partner.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);