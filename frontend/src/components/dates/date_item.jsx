import React from "react";
import { Link } from "react-router-dom";
const DateItem = props => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // const month = monthNames[props.date.getMonth()];

  return (
    <div className="tile">

      <div className="container right">
        <div className="event-bubble">
          <div className="event-bubble-date">
           { console.log(props.date)}
            {props.date}
            {/* month */}
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



