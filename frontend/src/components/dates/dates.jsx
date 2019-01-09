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
    // let label = document.getElementsByClassName("react-calendar__month-view__days__day");
    // let label = document.querySelectorAll(".react-calendar__month-view__days__day");
    
    // this.state.mark = label.innerHTML;
    // console.log(label)
    // label.addEventListener("click", () => {
    //   this.props.openModal("createDate");
    // });
    // label.addEventListener("click", () => {
    //   console.log(label)
    //   this.props.openModal("createDate");
    // });


    // let rightArrow = document.getElementsByClassName("react-calendar__navigation__next-button");

    // rightArrow[0].addEventListener("click", () => {
    //   let label = document.getElementsByClassName("react-calendar__navigation__label");
    //   console.log(label);
    // });
    // this.state.date = new Date();
    // console.log(this.state)


    // tiles.forEach((tile) => {
    //   tile.addEventListener("click", () => {
    //     tile.style.border = "1px solid black"; 

    //   });
    // });
  }

  render() {
    let thisMonth;
    thisMonth = (
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