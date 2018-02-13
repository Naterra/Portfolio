import React, { Component } from 'react';
// import img from '../assets/img/parallax1.jpg';
//import img from '../assets/img/bg_22338.jpg';
//import img from '../assets/img/bg_8764.jpg';
//import img from '../assets/img/bg_4455443.jpg';
import img from '../assets/img/bg_2344566.png';

import { connect } from 'react-redux';
import HeaderNav from './HeaderNav';


class Header extends Component {
	render() {
		return (
			<header className="">
				<HeaderNav auth={this.props.auth} />

				<div className="row">
					<div className="parallax-container"  >
						<div className="parallax"  >
							<img className="no-responsive-img"  alt="parallax" src={img} />
						</div>
					</div>
				</div>

			</header>
		);
	}
}
function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Header);
