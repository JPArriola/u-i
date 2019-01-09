import React from "react";
import { withRouter } from "react-router-dom";

class CreateMediaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: this.props.albumId,
      fileLink: null
    };

    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();
      this.props.getAllMedia(this.props.albumId);
    };
  }

  handleUploadFile = (e) => {
    let file = e.target.files[0];
    let data = new FormData();
    data.append('file', file);
    this.props.createMedia(this.props.albumId, data);
  }


  render() {
    return (
      <form className="media-form" onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit()}>
        <div className="create-media-header">Select an image</div>
        <input type="file" onChange={this.handleUploadFile}></input>
        <div className="upload-media-button">
          <button>UPLOAD<i className="fa fa-upload"></i></button>
        </div>
      </form>
    )
  }
}


export default withRouter(CreateMediaForm);