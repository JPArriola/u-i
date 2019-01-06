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
    }
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
            <div className="big-ui-logo"></div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

  // componentWillReceiveProps(nextProps) {
  //   // if (nextProps.currentUser) this.props.history.push('/');
  //   this.setState({ errors: nextProps.errors });
  // }