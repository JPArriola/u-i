import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import '../stylesheets/home/home.scss';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchPartner(this.props.partnerId);
  }

  render() {
    let { user, partner } = this.props;

    if (!this.props.partnerId) return null;
    if (!partner.name) return null;
    return <div>
        <Navbar />
        <div className="empty-line" />
        <div className="content-master">
          <div className="home-relationship-profiles">
            <div className="profiles-container">
              <div className="profiles-user">
                <div className="left-profile-picture" />
                <div className="profile-content">
                  <div className="profile-content-cats">
                    <div>Name:</div>
                    <div>Nickname:</div>
                    <div>Email:</div>
                    <div>Birthday:</div>
                    <div>Zipcode:</div>
                  </div>
                  <div className="profile-content-data">
                    <div>{user.name[0].toUpperCase() + user.name.slice(1)}</div>
                    <div>{user.nickname}</div>
                    <div>{user.email}</div>
                    <div>{user.birthday}</div>
                    <div>{user.zipCode}</div>
                  </div>
                </div>
                <div onClick={() => this.props.openModal("editUser")} className="profile-edit">
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
                  <div className="profile-content-cats">
                    <div>Name:</div>
                    <div>Nickname:</div>
                    <div>Email:</div>
                    <div>Birthday:</div>
                    <div>Zipcode:</div>
                  </div>
                  <div className="profile-content-data">
                    <div>{partner.name[0].toUpperCase() + partner.name.slice(1)}</div>
                    <div>{partner.nickname}</div>
                    <div>{partner.email}</div>
                    <div>{partner.birthday}</div>
                    <div>{partner.zipCode}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default withRouter(Home);