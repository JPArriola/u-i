import React from "react";
import  '../stylesheets/sticky/sticky-item.scss';

class StickyItem extends React.Component {

  receiveName(field) {
    let { user, sticky, partner } = this.props;
    if (!user.nickname) user.nickname = user.name;
    if (!partner.nickname) partner.nickname = partner.name;

    if (sticky[field] === user.id) {
      return user.nickname;
    } else {
      return partner.nickname;
    }
  }

  handleDeleteSticky() {
    return(e) => {
      this.props.deleteSticky(this.props.sticky._id);
    };
  }

  render() {

    let { sticky } = this.props;

    return(
      <div className="sticky-item">
        <div className="to-love">
        <div className="to-from-div">
          <div className="to-from">
            To: 
          </div>
          <div>
            { this.receiveName("receiverId") }
          </div>
        </div>
        <i className="fas fa-trash-alt" onClick={ this.handleDeleteSticky() }></i>
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
              { this.receiveName("authorId") }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StickyItem;