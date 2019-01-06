import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/codepage/code_page.scss';

class CodePage extends React.Component {

	handleConnect() {
    return (e) => {
      e.preventDefault();
      this.props.connectUser(this.props.user.id);
    };
  }

	render() {
		let { connectionCode } = this.props.user;

		return (
			<div className="splash-main">
				<div className="splash">
					<div className="logo">
						<Link to="/">
							<div className="ui-logo" />
						</Link>
					</div>
					<div className="splash-popup">
						<div className="code-page-input-fields">
							<div className="connection-code">
								Give your code to your partner
							</div>
							<div className="random-code">{ connectionCode }</div>
							<div className="connection-code">OR</div>
							<div className="connection-code">
								Please enter your partner's connection code
							</div>
							<input
								type="password"
								placeholder="Connection Code"
								maxLength="12"
							/>
						</div>
						<div className="buttons">
							<button className="connectbutton" onClick={ this.handleConnect() }>
								Connect
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CodePage;