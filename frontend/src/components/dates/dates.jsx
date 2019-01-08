import React from 'react';
import Navbar from '../navbar/navbar_container';
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

  onChange(date) {
    this.setState({ date });
  }
    
  componentDidMount() {
    this.props.getAllDates(this.props.user.id);
  }

  render() {
    let dates = this.props.dates.map(date => {
      console.log(date)
      return date.title
      
    })
    // WHY IS THIS NOT AN ARRRRAYY????
    console.log(dates)
    if (this.props.dates === undefined) return null;
    return(
      <div>
        <Navbar />
        <div className="empty-line"></div>
        {dates}
        <button>Create Date</button>
        <div class="main-cal-and-timeline">
        <Calendar
          // onChange={this.onChange}
          // value={this.state.date}
        />

          <div class="timeline">
            <div class="container left">
              <div class="event-bubble">
                <div class = "event-bubble-date">
                  Jan 1 2018
                </div>
                <div class="event-bubble-title">
                  First Anniversary
               </div>
            </div>
            </div>
            <div class="container right">
              <div class="event-bubble">
                <div class="event-bubble-date">
                  Feb 5 2018
                </div>
                <div class="event-bubble-title">
                   Pet Adoption Day!
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="event-bubble">
               <div class="event-bubble-date">
                  Apr 18 2018
                </div>
                <div class="event-bubble-title">
                   Honeymoon to Paris
                </div>                 
              </div>
            </div>
            <div class="container right">
              <div class="event-bubble">
              <div class="event-bubble-date">
                Jan 4 2018
               </div>
              <div class="event-bubble-title">
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