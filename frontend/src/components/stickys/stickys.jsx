import React from 'react';
import Navbar from '../navbar/navbar_container';
import StickyItem from './sticky_item';

class Stickys extends React.Component {

  componentDidMount() {
    this.props.getAllStickys(this.props.user.id);
    this.props.fetchPartner(this.props.partnerId);
  }

  render() {
    if (!this.props.stickys) return null;
    let { user, partner, deleteSticky, openModal, stickys, getStickyId } = this.props;
    let sticky = stickys.map((sticky, i) => {
      return (
        <StickyItem sticky={ sticky }
          key={i}
          user={ user }
          partner={ partner }
          deleteSticky={ deleteSticky }
          openModal={ openModal }
          getStickyId={ getStickyId }
        />
      );
    });

    return (
      <div className="sticky-page">
        <Navbar />
        <div className="empty-line"></div>
        <div className="sticky-index-with-button">
          <button className="create-sticky-button" onClick={() => this.props.openModal("createSticky")}>Create Sticky</button>
          <div className="sticky-index">
            { sticky }
          </div>
        </div>
      </div>
    )
  }
}

export default Stickys;