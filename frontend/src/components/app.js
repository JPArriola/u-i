import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <Switch>
        <ProtectedRoute exact path="/" component={ MainPage } />
        <ProtectedRoute exact path="/login" component={ LoginFormContainer } />
        <ProtectedRoute exact path="/signup" component={ SignupFormContainer } />
    </Switch>
);

export default App;