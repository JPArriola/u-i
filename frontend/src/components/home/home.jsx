import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import '../stylesheets/home/home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: this.props.user.nickname
    };
  }

  componentDidMount() {
    this.props.fetchPartner(this.props.partnerId);
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (prevState !== this.state){
  //     return this.props.fetchUpdatedCurrentUser(this.props.user.id);
  //   }
  // }

  render() {
    let { user, partner } = this.props;

    if (!this.props.partnerId) return null;
    if (!partner.name) return null;
    return (
      <div>
        <Navbar />
        <div className="empty-line"></div>
        <div className="content-master">
          <div className="home-relationship-profiles">
            <div className="profiles-container">
              <div className="profiles-user">
                <div className="left-profile-picture" />
                <div className="profile-content">
                  <div>
                    Name:{user.name[0].toUpperCase() + user.name.slice(1)}
                  </div>
                  <div>Nickname: {user.nickname}</div>
                  <div>Email: {user.email}</div>
                  <div>Zipcode: {user.zipCode}</div>
                </div>
                <div
                  onClick={() => this.props.openModal("editUser")}
                  className="profile-edit"
                >
                  Edit Profile
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
                  <div>
                    Name:{" "}
                    {partner.name[0].toUpperCase() + partner.name.slice(1)}
                  </div>
                  <div>Nickname: {partner.nickname}</div>
                  <div>Email: {partner.email}</div>
                  <div>Zipcode: {partner.zipCode}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);