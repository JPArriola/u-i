import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      errors: {}
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSignup(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <div className="login-errors">
        {Object.keys(this.state.errors).map((error, i) => (
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
              <input type="text"
                value={ this.state.name }
                onChange={ this.update('name') }
                placeholder="name"
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
              <button className="signupbutton" onClick={ this.handleSignup }>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);