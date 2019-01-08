import React from "react";
import '../stylesheets/modal/modal.scss';

class CreateDateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      authorId: props.authorId,
      date: '',
      connectionCode: props.connectionCode
    };
  }

  update(field) {
    return (e) =>  this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit() {
    return (e) => {
      let obj = this.state;
      this.props.createDate(obj);
      this.props.closeModal();
      this.props.getAllDates(this.props.authorId);
    };
  }

  render() {
    return (
      <form className="date-form" onClick={ e => e.stopPropagation() } onSubmit={ this.handleSubmit() }>
        <div className="create-date-header">Create Date</div>
        <input value={ this.state.title } onChange={ this.update("title") } placeholder="ex: Date Night" maxLength="50"></input>
        <input type="datetime-local" value={ this.state.date } onChange={ this.update("date") } ></input>
        <div className="create-date">
          <button>Create<i className="fab fa-telegram-plane"></i></button>
        </div>
      </form>
    )
  }
}

export default CreateDateForm;