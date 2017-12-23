import React, { Component } from 'react';
import img from '../assets/img/parallax1.jpg';

class Header extends Component {
	render() {
		return (
			<header className="">
				<div className="parallax-container">
					<div className="parallax">
						<img src={img} />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
