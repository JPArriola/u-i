import React from 'react';
import '../stylesheets/codepage/code_page.scss';

class CodePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connectionCode: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.connected === true) {
      this.props.history.push('/home');
    }

    this.setState({ errors: nextProps.errors });
  }
  
	handleConnect() {
    return (e) => {
      e.preventDefault();
      this.props.connectUser(this.props.user.id, this.state.connectionCode);
    };
  }

  handleLogout() {
    return (e) => {
      e.preventDefault();
      this.props.logout();
    };
  }

  update() {
    return(e) => {
      this.setState({ connectionCode: e.target.value });
    };
  }

  renderErrors() {
    let { errors } = this.state;
    return (
      <div className="code-errors">
        {Object.keys(errors).map((error, i) => (
          <div key={`error-${i}`}>
            { errors[error] }
          </div>
        ))}
      </div>
    );
  }

	render() {
		let { connectionCode } = this.props.user;

		return (
			<div className="splash-main">
				<div className="splash">
					<div className="logo">
						<div className="ui-logo" />
					</div>
					<div className="splash-popup">
						<div className="code-page-input-fields">
							<div className="connection-code">
								Give your code to your partner
							</div>
							<div className="random-code">{ connectionCode }</div>
							<div id="code-page-or" className="connection-code">OR</div>
							<div className="connection-code">
								Please enter your partner's connection code
							</div>
							<input
								type="password"
								placeholder="Connection Code"
                maxLength="12"
                onChange={ this.update() }
							/>
						</div>
            <div className="splash-errors">
              { this.renderErrors() }
            </div>
						<div className="codepage-buttons">
							<button className="connectbutton" onClick={ this.handleConnect() }>
								Connect
							</button>
              <button id="logout-button-codepage" className="connectbutton" onClick={ this.handleLogout() } >
                Log Out
              </button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CodePage;