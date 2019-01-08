import React from "react";
import { withRouter } from "react-router-dom";

class EditStickyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: props.stickyInfo,
      authorId: props.authorId,
      receiverId: props.receiverId,
      connectionCode: props.connectionCode,
    };
  }

  componentDidMount() {
    return() => {
      this.props.fetchPartner(this.props.receiverId);
    };
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      let obj = this.state;
      obj.date = new Date();
      console.warn(obj);
      this.props.editSticky(this.props.stickyId, obj);
      this.props.closeModal();
      this.props.getAllStickys(this.props.authorId);
    };
  }

  render() {
    return (
      <form className="sticky-form" onClick={ e => e.stopPropagation() } onSubmit={ this.handleSubmit() }>
        <div className="create-sticky-header">Edit Sticky</div>
        <textarea value={ this.state.body } onChange={ this.update("body") } placeholder="ex: I love you" maxLength="100"></textarea>
        <div className="send-sticky-button">
          <button>EDIT<i className="fab fa-telegram-plane"></i></button>
        </div>
      </form>
    )
  }
}


export default withRouter(EditStickyForm);