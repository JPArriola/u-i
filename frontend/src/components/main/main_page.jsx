import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/session/main_page.scss';

class MainPage extends React.Component {
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
            <div className="main-page-buttons">
              <Link to='/login' className="loginbutton">
                Log In
              </Link>
              <Link to='/signup' className="signupbutton">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;