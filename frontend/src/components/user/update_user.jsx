import React from "react";
import { withRouter } from "react-router-dom";

class UpdateUser extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nickname: this.props.user.nickname,
      email: this.props.user.email,
      zipCode: this.props.user.zipCode,
    };
  }

  handleSubmit(){
    return(e) => {
      e.preventDefault();
      console.warn(this.props)
      this.props.updateProfile(this.props.user.id, this.state)
      .then(this.props.closeModal());
    };
  }

  update(field){
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit()} className="profile-update-form" onClick={ e => e.stopPropagation() }>
        <div className="profile-update-title">
          Edit Profile
        </div>
        <div className="profile-update-content">
          <div>Nickname: <input type="text" value={this.state.nickname} onChange={this.update("nickname")} placeholder={this.props.user.nickname}></input></div>
          <div>Email: <input type="text" value={this.state.email} onChange={this.update("email")} placeholder={this.props.user.email}></input></div>
          <div>ZipCode: <input type="text" value={this.state.zipCode} onChange={this.update("zipCode")} placeholder={this.props.user.zipCode}></input></div>
        </div>
        <div className="profile-update-submit">
          <input type="submit" value="Update Dis Profile" className="profile-update-button" >
          </input>
        </div>
      </form>
    )
  }
}


export default withRouter(UpdateUser);