import React, {Component} from 'react';
import ProjectModalForm from '../containers/ProjectModalForm';


class ProjectManagingLinks extends Component{
    render(){
        console.log('ProjectManagingLinks: render' );
        return(

            <div ref={this.props.inputRef}  className="managing-links fixed-action-btn horizontal">
                <a className="btn-floating   light-green">
                    <i className="large material-icons">settings</i>
                </a>
                <ul>
                    <li><a onClick={()=>{this.props.deleteEvent(this.props.project._id)} } className="btn-floating red"><i className="material-icons">delete</i></a></li>
                    <li><ProjectModalForm
                        name="ProjectEditModal"
                        title="Edit Project"
                        project={this.props.project}
                        button_size="small"
                    /></li>
                </ul>
            </div>

        )
    }
}

export default ProjectManagingLinks;