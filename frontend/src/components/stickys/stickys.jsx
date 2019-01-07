import React from 'react';
import Navbar from '../navbar/navbar_container';
import StickyItem from './sticky_item';

class Stickys extends React.Component {
  componentDidMount() {
    this.props.getAllStickys(this.props.userId);
  }

  render() {
    if (!this.props.stickys) return null;
    let sticky = this.props.stickys.map((sticky, i) => {
      return (
        <StickyItem sticky={ sticky } key={i}/>
      );
    });

    return (
      <div>
        <Navbar />
        <button onClick={ () => this.props.openModal("createSticky") }>Create Sticky</button>
        { sticky }
      </div>
    )
  }
}

export default Stickys;