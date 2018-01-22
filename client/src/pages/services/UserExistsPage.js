import React, { Component } from 'react';
import HeaderNav from '../../components/HeaderNav';


class UserExistsPage extends Component {

    render() {
        return (
            <div>
                <HeaderNav auth={false} />
                <div className="container">
                    <h5 className="center">App User already exsist</h5>
                    <p>This App allows to have only 1 user,<br/>
                        Seems like you trying to get access using wrong Google Account.<br/>
                        Please, try login using another account.</p>
                </div>
            </div>
        );
    }
}

export default UserExistsPage;