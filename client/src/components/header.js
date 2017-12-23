import React, { Component } from 'react';
import img from '../assets/img/parallax1.jpg';

import { connect } from 'react-redux';
import logo from '../logo.svg';


class Header extends Component {

	renderLogin(){
        console.log('AUTHPROPS', this.props);

        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:return[
				<li key="1"><a  href="/auth/logout">Logout</a></li>,
				<li key="2"> 	</li>,
				<li key="3"><span style={{marginLeft:'20px',marginRight:'20px'}}>Welcome {this.props.auth.name}</span><img className="circle" style={{height: "50px", verticalAlign: 'middle'}} src={this.props.auth.image} /></li>
            ]
        }
	}
	render() {
		return (
			<header className="">
				<nav>
					<div className="nav-wrapper">
						<a href="#" className=""><img className="App-logo" src={logo} /></a>
						<ul id="nav-mobile" className="right hide-on-med-and-down" style={{marginRight:'25px'}} >
							<li><a href="">Blog</a></li>
							 {this.renderLogin()}
						</ul>
					</div>
				</nav>
				<div className="parallax-container">
					<div className="parallax">
						<img src={img} />
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
