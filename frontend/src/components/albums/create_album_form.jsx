import React from "react";
import { withRouter } from "react-router-dom";

class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      description: '',
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
      this.props.createAlbum(obj);
      this.props.closeModal();
      this.props.getAllAlbums(this.props.authorId);
    };
  }

  render() {
    return (
      <form className="album-form" onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit()}>
        <input type="text" value={this.state.name} maxLength="30" onChange={this.update("name")} placeholder="Album Name"></input>
        <input type="text" value={this.state.date} maxLength="10" onChange={this.update("date")} placeholder="MM/DD/YYYY"></input>
        <input type="text" value={this.state.description} maxLength="100" onChange={this.update("description")} placeholder="ex: Our lovely trip to San Francisco"></input>
        <button>Create Album</button>
      </form>
    )
  }
}


export default withRouter(CreateAlbumForm);