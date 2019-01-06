import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSignup() {
    let { email, name, password } = this.state;
    return (e) => {
      e.preventDefault();
      this.props.signup({ email, name, password });
    }
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
    console.warn(this.state)
    return (
      <div className="splash-main">
        <div className="splash">
          <div className="big-logo">
            <Link to='/'>
              <div className="big-ui-logo"></div>
            </Link>
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
              <button className="submit-button" onClick={ this.handleSignup() }>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);