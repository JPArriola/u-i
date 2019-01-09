import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import '../stylesheets/home/home.scss';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchPartner(this.props.partnerId);
    this.props.getAllDates(this.props.user.id);
  }

  nickname(user){
    if (!user.nickname) {
      return "-";
    } else {
      return user.nickname;
    }
  }

  birthday(user){
    if(!user.birthday) {
      return "-";
    } else {
      return user.birthday;
    }
  }

  zipcode(user){
    if(!user.zipCode) {
      return "-";
    } else {
      return user.zipCode;
    }
  }
  
  getDate(date) {
    var arr = date.split("-");
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var event_month = months[parseInt(arr[1], 10) - 1];
    var event_yr = arr[0];
    var event_day = arr[2].substring(0, 2);
    return (event_month + " " + event_day + " " + event_yr)
  }

  render() {
    let { user, partner } = this.props;
    
    if (!this.props.partnerId) return null;
    if (!partner.name) return null;
    if (!this.props.date) return null;

    let { date, title } = this.props.date;

    return (
      <div>
        <Navbar />
        <div className="empty-line" />
        <div className="content-master">
          <div className="home-relationship-profiles">
            <div className="profiles-container">
              <div className="profiles-user">
                <div className="left-profile-picture" />
                <div className="left-profile-content">
                  <div className="profile-content-cats">
                    <div>Name:</div>
                    <div>Nickname:</div>
                    <div>Email:</div>
                    <div>Birthday:</div>
                    <div>Zipcode:</div>
                  </div>
                  <div className="profile-content-data">
                    <div>{ user.name[0].toUpperCase() + user.name.slice(1) }</div>
                    <div>{ this.nickname(user) }</div>
                    <div>{ user.email }</div>
                    <div>{ this.birthday(user) }</div>
                    <div>{ this.zipcode(user) }</div>
                  </div>
                </div>
                <div onClick={() => this.props.openModal("editUser")} className="profile-edit">
                  Edit Profile
                </div>
              </div>
              <div className="profiles-center">
                <div className="profiles-daycount">
                  <div className="daycount">
                    <div className="first-day-label">Our First Day</div>
                    <div className="first-day-date">1/1/2019</div>
                  </div>
                </div>
                <div className="profiles-heart" />
                <div className="profiles-event-container">
                  <div className="event-header">Upcoming Event</div>
                  <div className="event-information-container">
                    <div className="event-label">EVENT</div>
                    <div>{ title }</div>
                  </div>
                  <div className="event-date-container">
                    <div className="event-label">DATE</div>
                    <div>{ this.getDate(date) }</div>
                  </div>
                </div>
              </div>
              <div className="profiles-user">
                <div className="right-profile-picture" />
              <div className="right-profile-content">
                  <div className="profile-content-cats">
                    <div>Name:</div>
                    <div>Nickname:</div>
                    <div>Email:</div>
                    <div>Birthday:</div>
                    <div>Zipcode:</div>
                  </div>
                  <div className="profile-content-data">
                    <div>{partner.name[0].toUpperCase() + partner.name.slice(1)}</div>
                    <div>{this.nickname(partner)}</div>
                    <div>{partner.email}</div>
                    <div>{this.birthday(partner)}</div>
                    <div>{this.zipcode(partner)}</div>
                  </div>
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