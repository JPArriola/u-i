import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_page.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/login" component={ LoginFormContainer } />
        <Route exact path="/signup" component={ SignupFormContainer } />
    </Switch>
);

export default App;