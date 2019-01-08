import React from "react";
import { withRouter } from "react-router-dom";

class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      authorId: props.authorId,
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
      // obj.date = new Date();
      this.props.createAlbum(obj);
      this.props.closeModal();
      this.props.getAllAlbums(this.props.authorId);
    };
  }

  render() {
    return (
      <form className="album-form" onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit()}>
        <input type="text" value={this.state.name} onChange={this.update("name")} placeholder="name"></input>
        <input type="text" value={this.state.date} onChange={this.update("date")} placeholder="date"></input>
        <button>Create Album</button>
      </form>
    )
  }
}


export default withRouter(CreateAlbumForm);