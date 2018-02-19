import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
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
					<ProjectsList asLink="true" editable={false}/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default FrontPage;
