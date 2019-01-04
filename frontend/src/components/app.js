import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <Switch>
        <AuthRoute exact path="/home" component={ MainPage } />
        <AuthRoute exact path="/login" component={ LoginFormContainer } />
    </Switch>
);

export default App;