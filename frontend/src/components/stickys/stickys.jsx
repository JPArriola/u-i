import React from 'react';
import Navbar from '../navbar/navbar_container';

class Stickys extends React.Component {

  render() {
    if (!this.props.stickys) return null;
    return (
      <div>
        <Navbar />
        <button onClick={ () => this.props.openModal("createSticky") }>Create Sticky</button>
      </div>
    )
  }
}

export default Stickys;