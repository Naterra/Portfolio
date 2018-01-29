import React, { Component } from 'react';
import HeaderNav from '../components/HeaderNav';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <HeaderNav auth={null} />
                <div className="container">
                    <h4 className="center">404 Page</h4>

                </div>
            </div>
        );
    }
}

export default NotFoundPage;
