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

  changeDate() {
    return (date) => {
      this.setState({ date });
    };
  }
   
  componentDidMount() {
    this.props.getAllDates(this.props.user.id);
  }

  render() {
    let thisMonth = (
      this.props.dates.map((date, i) => {
        if (new Date(date.date).getMonth() === new Date(this.state.date).getMonth() &&
        new Date(date.date).getYear() === new Date(this.state.date).getYear()) {
          return (
            <DateItem
              date={ date }
              key={ i }
              deleteDate={ this.props.deleteDate }
              user={ this.props.user }
            />
          );
        }
      })
    );

    let nextMonth = (
      this.props.dates.map((date, i) => {
        if (new Date(date.date).getMonth() === new Date(this.state.date).getMonth() + 1 &&
        new Date(date.date).getYear() === new Date(this.state.date).getYear()) {
          return (
            <DateItem
              date={ date }
              key={ i }
              deleteDate={ this.props.deleteDate }
              user={ this.props.user }
            />
          );
        }
      })
    );
    
    if (!this.props.dates) return null;

    return(
      <div className="dates-page">
        <Navbar />
        <div className="empty-line"></div>
        <div className="main-cal-and-timeline">
        <div className="calendar-with-button">
          <Calendar
            onChange={ this.changeDate() }
            value={ this.state.date }
          />
          <button className="create-date-button" onClick={ () => this.props.openModal("createDate") }>Create Date</button>
        </div>
        <div className="right-side">
          <div className="upcoming-events">This Month</div>
          <div className="timeline-wrapper">
            <div className="timeline">
              { thisMonth }
            </div>
          </div>
          <div className="upcoming-events" id="next-month-event">Next Month</div>
          <div className="timeline-wrapper">
            <div className="timeline">
              { nextMonth }
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Dates;