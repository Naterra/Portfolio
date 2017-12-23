import React, { Component } from 'react';
import Header from '../components/header';


class FrontPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<h1 className="center">Welcome to my React Projects Page</h1>
					<h1>Welcome on front page</h1>
				</div>
			</div>
		);
	}
}

export default FrontPage;
