import React, { Component } from 'react';
import {Button, Modal, Icon} from 'react-materialize'
import UserForm from "../containers/forms/ProjectForm";

class ProjectModalForm extends Component{
    render(){
        return(
            <Modal
                header='Add New Project'
                trigger={<a className=" right btn-floating btn-large waves-effect waves-light light-green">
                    <i className="large material-icons">mode_edit</i>
                </a>}>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Super Cool Project" id="name" type="text" className="validate" />
                                <label form="name">Project Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="description" type="text" className="validate" />
                                <label form="description">Description</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="img" type="text" className="validate" />
                                <label form="img">img url</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="demo_url" type="text" className="validate" />
                                <label form="demo_url">Demo url</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="github_url" type="text" className="validate" />
                                <label form="github_url">Github url</label>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default ProjectModalForm;