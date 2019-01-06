import React from 'react';
import '../stylesheets/codepage/code_page.scss';

class CodePage extends React.Component {
  backToHome() {
    return(e) => {
      e.preventDefault();
      this.props.history.push("/");
    };
  }

  render() {
    let { connectionCode } = this.props.user;

    return(
      <div className="splash-main">
        <div className="splash">
          <div className="logo">
            <div className="ui-logo" onClick={ this.backToHome() }></div>
          </div>
          <div className="splash-popup">
            <div className="code-page-input-fields">
              <div className="connection-code">
                Give your code to your partner
              </div>
              <div className="random-code">
                { connectionCode }
              </div>
              <div className="connection-code">
                OR
              </div>
              <div className="connection-code">
                Please enter your partner's connection code
              </div>
              <input type="password" placeholder="Connection Code" maxLength="12" />
            </div>
            <div className="buttons">
              <button className="connectbutton">Connect</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CodePage;