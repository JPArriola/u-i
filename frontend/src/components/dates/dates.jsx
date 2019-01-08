import React from 'react';
import Navbar from '../navbar/navbar_container';
import DateItem from "./date_item";
// import dateformat from 'dateformat';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
import '../stylesheets/dates/calendar.scss';
import '../stylesheets/dates/timeline.scss';

class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  dateOnClick() {
    return (date) => {
      this.setState({ date });
    };
  }
   
  componentDidMount() {
    this.props.getAllDates(this.props.user.id);
  }

  render() {
    console.warn(this.state)
    let dates = this.props.dates.map(date => {
      return (
        <DateItem
          date={ date }
          key={ date.title }
          deleteDate = { this.props.deleteDate }
          user = {this.props.user}
        />
      );
    });
    
    if (!this.props.dates) return null;

    return(
      <div className="dates-page">
        <Navbar />
        <div className="empty-line"></div>
        <div className="main-cal-and-timeline">
        <div className="calendar-with-button">
          <Calendar
            onChange={ this.dateOnClick() }
            value={ this.state.date }
            // hover={new Date(2017, 0, 1)}
          />
          <button className="create-date-button" onClick={ () => this.props.openModal("createDate") }>Create Date</button>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="upcoming-events">Upcoming Events</div>
            { dates }
      
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Dates;