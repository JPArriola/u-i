import React from 'react';
import Navbar from '../navbar/navbar_container';
// import dateformat from 'dateformat';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
import '../stylesheets/dates/calendar.scss';

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
    

  render() {
    return(
      <div>
        <Navbar />
        <div className="empty-line"></div>
        <button>Create Date</button>
        <Calendar
          // onChange={this.onChange}
          // value={this.state.date}
        />
      </div>
    )
  }
}

export default Dates;