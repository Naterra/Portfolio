import React, {Component} from 'react';

class ProjectManagingLinks extends Component{
    render(){
        return(

            <div ref={this.props.inputRef}  className="managing-links fixed-action-btn horizontal">
                <a className="btn-floating   light-green">
                    <i className="large material-icons">settings</i>
                </a>
                <ul>
                    <li><a onClick={()=>{this.props.deleteEvent(this.props.id)} } className="btn-floating red"><i className="material-icons">delete</i></a></li>
                    <li><a onClick={this.props.editEvent } className="btn-floating green"><i className="material-icons">edit</i></a></li>
                </ul>
            </div>

        )
    }
}

export default ProjectManagingLinks;