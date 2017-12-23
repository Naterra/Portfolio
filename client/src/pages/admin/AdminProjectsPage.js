import React, { Component } from 'react';

import HeaderNav from '../../components/HeaderNav';
import ProjectModalForm from '../../containers/ProjectModalForm';

import { connect } from 'react-redux';
import {Button, Modal, Icon} from 'react-materialize'



class AdminProjectsPage extends Component {
    render(){
        return(
            <div>
                <HeaderNav auth={this.props.auth} />



                <div className="container">
                    <h4 className="left-align">Projects</h4>

<div className="row">
    <ProjectModalForm />
</div>



                    <div>Projects</div>
                    <div>Projects</div>
                    <div>Projects</div>
                    <div>Projects</div>
                    <div>Projects</div>
                </div>

            </div>
        )
    }
}
function mapStateToProps({auth}){
    return { auth };
}
export default connect(mapStateToProps)(AdminProjectsPage);