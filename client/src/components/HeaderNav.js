import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import UserWidgets from './user_widgets';

class HeaderNav extends Component {
	renderLogin() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<ul>
						<li>
							<a href="/auth/google">Login With Google</a>
						</li>
					</ul>
				);
			default:
				return <UserWidgets auth={this.props.auth} />;
		}
	}
	render() {
		return (
			<nav className=" blue darken-1">
				<div className="nav-wrapper">
					<div className="left" style={{ marginLeft: '55px' }}>
						<Link to="/">
							<img alt="logo" className="App-logo" src={logo} />
						</Link>
					</div>

					<div className="right" style={{ display: 'block', marginRight:'45px', float: 'left', height:'100%' }}>
						<ul id="nav-mobile" className=" hide-on-med-and-down" style={{ marginRight: '25px', display: 'inline' }}>
							<li>
								<a href="">Blog</a>
							</li>
						</ul>

						{this.renderLogin()}
					</div>
				</div>
			</nav>
		);
	}
}

export default HeaderNav;
