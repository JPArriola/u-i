import React from 'react';
import { AuthRoute, ProtectedRoute, ConnectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_page.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import CodePageContainer from './main/code_page_container';

const App = () => (
	<Switch>
		<Route exact path="/" component={ MainPage } />

		<AuthRoute exact path="/login" component={ LoginFormContainer } />
		<AuthRoute exact path="/signup" component={ SignupFormContainer } />

		<ProtectedRoute exact path="/home" component={ HomeContainer } />
		<ConnectedRoute exact path="/codepage" component={ CodePageContainer } />

	</Switch>
);

export default App;