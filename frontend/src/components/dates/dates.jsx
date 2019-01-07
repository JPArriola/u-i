import React from 'react';
import Navbar from '../navbar/navbar_container';
import dateformat from 'dateformat';

class Dates extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <button>Create Date</button>
      </div>
    )
  }
}

export default Dates;