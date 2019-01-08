import React from "react";
import { Link } from "react-router-dom";

class DateItem extends React.Component {

  handleDeleteDate() {
    return(e) => {
      this.props.deleteDate(this.props.date._id);
    };
  }

  showUserButton() {
    if (this.props.date.authorId === this.props.user.id) {
      return (
        <div>
          {/* <i className="fas fa-edit" onClick={this.handleEdit()}></i> */}
          <i className="fas fa-trash-alt" onClick={ this.handleDeleteDate() }></i>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    let { date, title } = this.props.date;
    console.warn(this.props.date)
    
    var arr = date.split("-");
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var event_month = months[parseInt(arr[1], 10) - 1];
    var event_yr = arr[0];
    var event_day = arr[2].substring(0,2);
    
    
    
      // const month = monthNames[props.date.getMonth()];
    
    return (
      <div className="event">
        <div className="tile">
          <div className="container right">
            <div className="event-bubble">
              <div className="event-bubble-date">
                { event_month + " " + event_day + " " + event_yr }
              </div>
              <div className="event-bubble-title">
                { title }
              </div>
            </div>
          </div>
        </div>
        { this.showUserButton() }
      </div>
      
    )
  }
  //2019-01-07T22:23:00.000Z
};

export default DateItem;



