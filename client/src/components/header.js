import React, { Component } from 'react';
// import img from '../assets/img/parallax1.jpg';
//import img from '../assets/img/bg_22338.jpg';
//import img from '../assets/img/bg_8764.jpg';
//import img from '../assets/img/bg_4455443.jpg';
import img from '../assets/img/bg_2344566.png';

import { connect } from 'react-redux';
import HeaderNav from './HeaderNav';
import { withRouter } from 'react-router-dom';

class Header extends Component {
	render_parallax(){
		return(
			<div className="row">
				<div className="parallax-container">
					<div className="parallax">
						<img className="no-responsive-img" alt="parallax" src={img} />
					</div>
				</div>
			</div>
		)
	}
	render() {
		console.log('this', this);

		return (
			<header className="">
				<HeaderNav auth={this.props.auth} />

				{ this.props.location.pathname =='/' ? this.render_parallax() : '' }
			</header>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default withRouter(connect(mapStateToProps)(Header));
