import React from 'react';
import Navbar from '../navbar/navbar_container';
import DateItem from "./date_item";
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
      return <DateItem date={date.date} title={date.title} key={date.title}/>
    });
    
    if (!this.props.dates) return null;

    return(
      <div className="dates-page">
        <Navbar />
        <div className="empty-line"></div>
        <button className="create-date-button" onClick={ () => this.props.openModal("createDate") }>Create Date</button>
        <div className="main-cal-and-timeline">
        <Calendar
          // onChange={this.onChange}
          // value={this.state.date}
        />
        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="upcoming-events">Upcoming Events</div>
            {dates}
      
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Dates;