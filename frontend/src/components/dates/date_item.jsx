import React from "react";
import { Link } from "react-router-dom";
const DateItem = props => {

  //2019-01-07T22:23:00.000Z

  var arr = props.date.split("-");
  console.log ("arr is: " + arr)
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var event_month = months[parseInt(arr[1], 10) - 1];
  var event_yr = arr[0];
  var event_day = arr[2].substring(0,2)
  console.log("event day is", event_day)


  // const month = monthNames[props.date.getMonth()];

  return (
    <div className="tile">

      <div className="container right">
        <div className="event-bubble">
          <div className="event-bubble-date">
           { console.log(props.date)}
            {event_month + " " + event_day + " " + event_yr}
            
          </div>
          <div className="event-bubble-title">
            {props.title}
          </div>
        </div>
      </div>


    </div>

  )}
;

export default DateItem;



