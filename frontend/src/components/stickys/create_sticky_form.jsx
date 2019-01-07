import React from "react";
import { withRouter } from "react-router-dom";

class CreateStickyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      authorId: props.authorId,
      receiverId: props.receiverId,
      connectionCode: props.connectionCode
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
      this.props.createSticky(obj);
      this.props.closeModal();
      this.props.getAllStickys(this.props.authorId);
    };
  }

  render() {
    return (
      <form className="sticky-form" onClick={ e => e.stopPropagation() } onSubmit={ this.handleSubmit() }>
        <input type="text" value={ this.state.body } onChange={ this.update("body") } placeholder="body" maxLength="100"></input>
        <button>Create Sticky</button>
      </form>
    )
  }
}


export default withRouter(CreateStickyForm);