import React, { Component } from 'react';
import {  Modal } from 'react-materialize';
import ProjectForm from "./forms/ProjectForm";

import { connect } from 'react-redux';
import { select_project, fetchProjects } from '../actions';

class ProjectModalForm extends Component{
    constructor(props) {
        super(props);

        this.default_param = {
            project_created: false,
            modal_header: this.props.title ? this.props.title : "Add New Project 4"
        };

        console.log("ProjectModalForm: constructor", this.default_param );
        this.state = this.default_param;

        this.setToDefault = this.setToDefault.bind(this);
        this.formSubmittedCallback = this.formSubmittedCallback.bind(this);
    }

    formSubmittedCallback(){
        this.setState({ project_created: true, modal_header: "" });
        // re-fetch list of projects
        this.props.fetchProjects();
    }

    setToDefault() {
        console.log("ProjectModalForm: setToDefault"  );
        // Set state to default
        this.setState(this.default_param);
    }



    render(){
        console.log('ProjectModalForm: render', this.props  );
        console.log("ProjectModalForm: render state",this.state  );
        const btn_size = this.props.button_size ? "btn-"+this.props.button_size : "btn-large";
        const trigger_cl = `btn-floating   ${btn_size}  waves-effect waves-light light-green`;

        return(
            <Modal
                header={this.state.modal_header}
                trigger={<a className={trigger_cl}>
                    <i className="large material-icons">mode_edit</i>
                </a>}
                modalOptions={{
                    complete: () => {
                        this.setToDefault();
                    },
                    ready: (modal, trigger) => {
                        const project = this.props.project || null;
                        this.props.select_project(project);
                    }
                }}>

                <div className="row">

                    {this.state.project_created === false && (
                        <ProjectForm project={this.props.project} formSubmittedCallback={this.formSubmittedCallback} />
                    )}

                    {this.state.project_created === true && (
                            <div className="valign-wrapperx center">

                                 <i className="medium material-icons teal-text">cloud_done</i>
                                <h5 className=" center teal-text" style={{marginLeft:'15px'}}>  New Project was created </h5>
                            </div>
                    )}
                </div>
            </Modal>
        )
    }
}


export default connect(null, {select_project, fetchProjects})(ProjectModalForm);