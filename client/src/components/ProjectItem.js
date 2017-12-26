import React, { Component } from 'react';
import ProjectManagingLinks from './ProjectManagingLinks';


class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.edit_project = this.edit_project.bind(this);

	}
	render_github() {
		if (this.props.project.github_url) {
			return (
				<a href={this.props.project.github_url}>
					<i className="fa fa-2x fa-github " aria-hidden="true" /> Github
				</a>
			);
		} else {
			return (
				<a>
					<i className="fa fa-2x fa-github " aria-hidden="true" /> Github
				</a>
			);
		}
	}

    edit_project(){
        console.log('edit_project' );
    }
	onMouseEnter() {
		//console.log('onMouseEnter', this.managingLinks);
		this.managingLinks.style.visibility = 'visible';
	}
    onMouseLeave(){
        //console.log('onMouseLeave', this.managingLinks);
        this.managingLinks.style.visibility = 'hidden';
    }
	render() {
		let project = this.props.project;
		//console.log('PROJECT', project);

		return (
			<div onMouseEnter={this.onMouseEnter}  onMouseLeave={this.onMouseLeave} className="col  s12 m6 l4">
				<div className="card">
					<ProjectManagingLinks
                         id={project._id}
                        deleteEvent={this.props.delete_project}
                        editEvent={this.edit_project}
						inputRef={elem => {
							this.managingLinks = elem;
						}}
					/>

					<div className="card-image">
						<img alt="" src={project.cloudinary_img} />
						<span className="card-title">{project.name}</span>
					</div>
					<div className="card-content">
						<p>{project.description}</p>
					</div>
					<div className="card-action">{this.render_github()}</div>
				</div>
			</div>
		);
	}
}

export default ProjectItem;
