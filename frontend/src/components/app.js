import React from 'react';
import { AuthRoute, ProtectedRoute, ConnectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_page.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import CodePageContainer from './main/code_page_container';
import DatesContainer from './dates/dates_container';
import StickysContainer from './stickys/stickys_container';
import AlbumsContainer from './albums/albums_container';
import Modal from './modal/modal';

const App = () => (
	<div className="page">
		<Modal />
		<Switch>
			<Route exact path="/" component={ MainPage } />

			<AuthRoute exact path="/login" component={ LoginFormContainer } />
			<AuthRoute exact path="/signup" component={ SignupFormContainer } />
			
			<ConnectedRoute exact path="/codepage" component={ CodePageContainer } />

			<ProtectedRoute exact path="/home" component={ HomeContainer } />
			<ProtectedRoute exact path="/dates" component={ DatesContainer } />
			<ProtectedRoute exact path="/stickys" component={ StickysContainer } />
			<ProtectedRoute exact path="/albums" component={ AlbumsContainer } />
		
		</Switch>
	</div>
);

export default App;