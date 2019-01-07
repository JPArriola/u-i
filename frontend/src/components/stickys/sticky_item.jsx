import React from "react";
import  '../stylesheets/sticky/sticky-item.scss';

class StickyItem extends React.Component {

  render() {
    let { receiver, sticky, author } = this.props;
    return(
      <div className="sticky-item">
        <div className="to-love">
          <div className="to-from">
            To: 
          </div>
          <div>
            { receiver.name[0].toUpperCase() + receiver.name.slice(1) }
          </div>
        </div>
        <div className="sticky-body">
          { sticky.body }
        </div>
        <div className="from-love-reverse">
          <div className="from-love">
            <div className="to-from">
              From:
            </div>
            <div>
              { author.name[0].toUpperCase() + author.name.slice(1) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StickyItem;