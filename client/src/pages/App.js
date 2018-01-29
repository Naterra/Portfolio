import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import FrontPage from './FrontPage';
import AdminProjectsPage from './admin/AdminProjectsPage';
import UserExistsPage from './services/UserExistsPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/" component={FrontPage} />
						<Route exact path="/admin/projects" component={AdminProjectsPage} />
						<Route exact path="/user_exist" component={UserExistsPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, { fetchUser })(App);
