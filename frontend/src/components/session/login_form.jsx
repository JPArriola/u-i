import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../stylesheets/session/login.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.renderErrors = this.renderErrors.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleLogin() {
    let { email, password } = this.state;

    return (e) => {
      e.preventDefault();
      this.props.login({ email, password });
    };
  }

  handleDemo() {
    let { email, password } = this.state;
    let demoUser = {
      email: "demo_user@ui.com",
      password: "demopw"
    };

    return (e) => {
      e.preventDefault();
      this.props.login(demoUser);
    };
  }

  renderErrors() {
    let { errors } = this.state;
    return(
      <div className="login-errors">
        { Object.keys(errors).map((error, i) => (
          <div key={`error-${i}`}>
            { errors[error] }
          </div>
        ))}
      </div>
    );
  }

  render() {
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
              <button className="submit-button" onClick={ this.handleLogin() }>Log In</button>
            </div>
            <div className="buttons">
              <button className="submit-button" onClick={ this.handleDemo() }>Demo User</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);