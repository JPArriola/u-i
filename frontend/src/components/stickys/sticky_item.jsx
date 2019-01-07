import React from "react";

class StickyItem extends React.Component {
  render() {
    return(
      <div>
        {this.props.sticky.body}
      </div>
    )
  }
}

export default StickyItem;