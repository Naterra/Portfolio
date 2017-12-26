import React, { Component } from 'react';
import {  Modal } from 'react-materialize'
import ProjectForm from "./forms/ProjectForm";

class ProjectModalForm extends Component{
    constructor(props) {
        super(props);

        this.default_param = {
            project_created: false,
            modal_header: "Add New Project"
        };

        this.state = this.default_param;

        this.setToDefault = this.setToDefault.bind(this);
        this.formSubmittedCallback = this.formSubmittedCallback.bind(this);
    }
    formSubmittedCallback(){
        this.setState({ project_created: true, modal_header: "" });
    }
    setToDefault() {
        // Set state to default
        this.setState(this.default_param);
    }
    render(){
        return(
            <Modal
                header={this.state.modal_header}
                trigger={<a className=" right btn-floating btn-large waves-effect waves-light light-green">
                    <i className="large material-icons">mode_edit</i>
                </a>}>

                <div className="row">


                    {this.state.project_created === false && (
                        <ProjectForm formSubmittedCallback={this.formSubmittedCallback} />
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

export default ProjectModalForm;