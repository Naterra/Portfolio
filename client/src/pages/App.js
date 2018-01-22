import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import FrontPage from './FrontPage';
import AdminProjectsPage  from './admin/AdminProjectsPage';
import UserExistsPage from './services/UserExistsPage';


class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter >
			<div className="App">
				<Route exact path="/" component={FrontPage} />
				<Route exact path="/admin/projects" component={AdminProjectsPage} />
				<Route exact path="/user_exist" component={UserExistsPage} />
			</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, {fetchUser} )(App);
