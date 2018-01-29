import React, { Component } from 'react';
import { Dropdown,NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';


class UserWidgets extends Component {

    render() {
	    console.log( 'UserWidgets:render');
	    //console.log(this.props, 'ppp');
		return (
				<ul id="nav-mobile" className=" hide-on-med-and-down" style={{display: 'inline-block'}}>
					<li >
						<Dropdown trigger={
							<a><i className="material-icons">view_module</i></a>
                        }>
							<NavItem href='/admin/projects'>Projects</NavItem>
							<li><Link to='/admin/projects'> Projects2	</Link></li>
							<NavItem>Users</NavItem>
							<NavItem divider />
							<NavItem>Something</NavItem>
						</Dropdown>
					</li>
					<li>
						<img  alt="" className="circle" style={{ height: '50px', verticalAlign: 'middle' }} src={this.props.auth.image} />
					</li>
				</ul>

		);
	}
}

export default UserWidgets;
