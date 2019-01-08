import React from "react";
import { withRouter } from "react-router-dom";

class UpdateUser extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nickname: this.props.user.nickname,
      birthday: this.props.user.birthday,
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

  // updateBirthday(){
  //   return(e) => {
  //     this.setState({birthday:})
  //   }
  // }

  render(){
    return <form onSubmit={this.handleSubmit()} className="profile-update-form" onClick={e => e.stopPropagation()}>
        <div className="profile-update-title">Edit Profile</div>
        <div className="profile-update-content">
          <div>
            <div>Nickname: </div>
            <input className="profile-update-nickname" type="text" value={this.state.nickname} onChange={this.update("nickname")} placeholder="nickname" />
          </div>
          <div>
            <div>Birthday: </div>
            <input className="profile-update-birthday" type="text" value={this.state.birthday} onChange={this.update("birthday")} placeholder="MM/DD/YYYY" />
          </div>
          <div>
            <div>ZipCode: </div>
            <input className="profile-update-zipcode" type="text" value={this.state.zipCode} maxLength="5" onChange={this.update("zipCode")} placeholder="#####" />
          </div>
        </div>
        <div className="profile-update-submit">
          <input type="submit" value="Update Profile" className="profile-update-button" />
        </div>
      </form>;
  }
}


export default withRouter(UpdateUser);