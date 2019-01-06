import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import '../stylesheets/home/home.scss';

class Home extends React.Component {

  componentDidMount(){
    console.log("HomeFormUserProps", this.props.user);
    this.props.fetchPartner(this.props.partnerId);
    console.log('props', this.props);
      // .then((data) => console.error(data))
      // .catch(error => console.error(error));
  }

  render() {
      return <div>
          <Navbar />
          <div className="content-master">
            <div className="home-relationship-profiles">
              <div className="profiles-container">
                <div className="profiles-user">
                  <div className="profile-picture" />
                  <div className="profile-content">
                    Name: {this.props.user.name}
                  </div>
                </div>
                <div className="profiles-daycount">
                  <div className="daycount" />
                  <img src="../images/heart.png" className="profiles-heart" />
                </div>
                <div className="profiles-user">
                  <div className="profile-picture" />
                  <div className="profile-content">
                  {/* Name: {this.props.partner.name} */}
                  </div>
                </div>
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
        </div>;
  }
}

export default withRouter(Home);