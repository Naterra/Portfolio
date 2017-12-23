import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Header from '../components/header';
import Projects from '../components/Projects';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<a href="/auth/google">Log In</a>

				<div className="container">
					<h1 className="center">Welcome to my React Projects Page</h1>
					<Projects />
				</div>
			</div>
		);
	}
}

export default connect(null, {fetchUser} )(App);
