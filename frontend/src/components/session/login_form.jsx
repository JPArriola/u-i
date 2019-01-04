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

    this.handleLogin = this.handleLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <div className="login-errors">
        { Object.keys(this.state.errors).map((error, i) => (
          <div key={`error-${i}`}>
            { this.state.errors[error] }
          </div>
        ))}
      </div>
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
              <input type="text"
                value={ this.state.email }
                onChange={ this.update('email') }
                placeholder="email"
              />
              <input type="password"
                value={ this.state.password }
                onChange={ this.update('password') }
                placeholder="password"
                maxLength="12"
              />
            </div>
            <div className="splash-errors">
              { this.renderErrors() }
            </div>
            <div className="buttons">
              <button className="loginbutton-on-login" onClick={ this.handleLogin }>Log In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);