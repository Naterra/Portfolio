import React, { Component } from 'react';

import HeaderNav from '../../components/HeaderNav';
import ProjectModalForm from '../../containers/ProjectModalForm';
import ProjectsList from '../../components/ProjectsList';

import { connect } from 'react-redux';




class AdminProjectsPage extends Component {
    render(){
        return(
            <div>
                <HeaderNav auth={this.props.auth} />

                <div className="container">
                    <h4 className="left-align">Projects</h4>

                <div className="row">
                    <div className="right">
                        <ProjectModalForm />
                    </div>
                </div>

                <ProjectsList editable={true} />

                </div>

            </div>
        )
    }
}
function mapStateToProps({auth}){
    return { auth };
}
export default connect(mapStateToProps)(AdminProjectsPage);