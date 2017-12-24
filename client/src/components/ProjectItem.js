import React, {Component} from 'react';

class ProjectItem extends Component{
    render_github(){
        if(this.props.project.github_url){
            return(
                <a href={this.props.project.github_url}>
                    <i className="fa fa-2x fa-github " aria-hidden="true"></i> Github
                </a>
            );
        }else{
            return(
                <a>
                    <i className="fa fa-2x fa-github " aria-hidden="true"></i> Github
                </a>
            );
        }
    }
    render(){
        let project  = this.props.project;
        console.log("PROJECT",  project);




        return(
            <div className="col  s12 m6 l4">

                <div className="card">
                    <div className="card-image">
                        <img src={project.img} />
                            <span className="card-title">{project.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{project.description}</p>
                    </div>
                    <div className="card-action">
                        { this.render_github()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItem;