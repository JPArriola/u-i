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

const Protected = ({ component: Component, connected, loggedIn, ...rest }) => (
  <Route
    { ...rest }
    render = { props =>
      connected && loggedIn ? ( <Component { ...props } /> ) : ( <Redirect to="/login" /> )
    }
  />
);

const Connected = ({ component: Component, connected, loggedIn, ...rest }) => (
  <Route
    { ...rest }
    render = { props =>
      !connected && loggedIn ? ( <Component { ...props } /> ) : ( <Redirect to="/login" /> )
    }
  />
);

const mSTP = state => {
  let session = state.session;
  let connected = session.user ? session.user.connected : false;
  return { loggedIn: session.isAuthenticated, connected }
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));

export const ConnectedRoute = withRouter(connect(mSTP)(Connected));