import React from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/session/login.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/home');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        { Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            { this.state.errors[error] }
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="splash-main">
        <div className="splash">
          <div className="logo">
            <div className="ui-logo"></div>
          </div>
          <div className="splash-popup">
            <div className="text">
              ... living our moments
            </div>
            <div className="input-fields">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" maxLength="12"/>
            </div>
            <div className="buttons">
              <button className="loginbutton">Log In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);