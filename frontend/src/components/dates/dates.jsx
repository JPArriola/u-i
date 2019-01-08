import React from 'react';
import Navbar from '../navbar/navbar_container';
// import dateformat from 'dateformat';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
import '../stylesheets/dates/calendar.scss';
import '../stylesheets/dates/timeline.scss';

class Dates extends React.Component {
   
  componentDidMount() {
    this.props.getAllDates(this.props.user.id);
  }

  render() {
    let dates = this.props.dates.map(date => {
      return date.title;
    });
    // WHY IS THIS NOT AN ARRRRAYY????
    if (!this.props.dates) return null;

    return(
      <div className="dates-page">
        <Navbar />
        <div className="empty-line"></div>
        { dates }
        <button className="create-date-button" onClick={ () => this.props.openModal("createDate") }>Create Date</button>
        <div className="main-cal-and-timeline">
        <Calendar
          // onChange={this.onChange}
          // value={this.state.date}
        />

          <div className="timeline">
            <div className="container left">
              <div className="event-bubble">
                <div className = "event-bubble-date">
                  Jan 1 2018
                </div>
                <div className="event-bubble-title">
                  First Anniversary
               </div>
            </div>
            </div>
            <div className="container right">
              <div className="event-bubble">
                <div className="event-bubble-date">
                  Feb 5 2018
                </div>
                <div className="event-bubble-title">
                   Pet Adoption Day!
                </div>
              </div>
            </div>
            <div className="container left">
              <div className="event-bubble">
               <div className="event-bubble-date">
                  Apr 18 2018
                </div>
                <div className="event-bubble-title">
                   Honeymoon to Paris
                </div>                 
              </div>
            </div>
            <div className="container right">
              <div className="event-bubble">
              <div className="event-bubble-date">
                Jan 4 2018
               </div>
              <div className="event-bubble-title">
                Visit In-Laws in Tennessee
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Dates;