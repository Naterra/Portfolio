import React, { Component } from 'react';
//import Header from '../components/header';
import HeaderNav from '../../components/HeaderNav';

class CreateUserPage extends Component {
    componentWillMount(){
        // Check if admin user was registered

    }

    render() {
        return (
            <div>
                <HeaderNav auth={{}} />
                <div className="container">
                    <h3 className="center">Welcome to your Portfolio App</h3>
                    <h5><a href="/auth/google_signup">Sign Up with Google </a></h5>
                </div>
            </div>
        );
    }
}

export default CreateUserPage;
