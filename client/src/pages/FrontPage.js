import React, { Component } from 'react';
import Header from '../components/header';
import ProjectsList from '../components/ProjectsList';

class FrontPage extends Component {
	componentWillMount(){
		// Check if admin user was registered

	}

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<h4 className="center">Welcome to my React Projects Page</h4>
					<ProjectsList editable={false}/>
				</div>
			</div>
		);
	}
}

export default FrontPage;
