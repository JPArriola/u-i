import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, connected }) => (
  <Route path={ path } exact={ exact } render={ (props) => {
    if (!loggedIn) {
      return <Component { ...props } />;
    } else {
      return connected ? <Redirect to="/home" /> : <Redirect to='/codepage' />;
    }
  }} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      loggedIn ? (
        <Component { ...props } />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = state => (
  { loggedIn: state.session.isAuthenticated,
    connected: state.session.user.connected
  }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));