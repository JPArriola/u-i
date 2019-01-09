import React from "react";

class DateItem extends React.Component {

  handleDeleteDate() {
    return(e) => {
      this.props.deleteDate(this.props.date._id);
    };
  }

  showUserButton() {
    if (this.props.date.authorId === this.props.user.id) {
      return (
        <i className="fas fa-trash-alt" onClick={ this.handleDeleteDate() }></i>
      )
    } else {
      return null;
    }
  }

  getDate(date) {
    var arr = date.split("-");
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var event_month = months[parseInt(arr[1], 10) - 1];
    var event_yr = arr[0];
    var event_day = arr[2].substring(0,2);
    return (
      <div>
        { event_month + " " + event_day + " " + event_yr }
        { new Date(date).getHours() + ":" + new Date(date).getMinutes() }
      </div>
    )
  }

  render() {
    let { date, title } = this.props.date;
    
    return (
      <div className="tile">
        <div className="container right">
          <div className="event-bubble">
            <div className="event">
              <div className="event-bubble-date">
                { this.getDate(date) }
              </div>
              { this.showUserButton() }
            </div>
            <div className="event-bubble-title">
              { title }
            </div>
          </div>
        </div>
      </div>
      
    )
  }
  //2019-01-07T22:23:00.000Z
};

export default DateItem;



