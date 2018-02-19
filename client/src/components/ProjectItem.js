import React, { Component } from 'react';
import ProjectManagingLinks from './ProjectManagingLinks';
import {withRouter} from "react-router-dom";

class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.edit_project = this.edit_project.bind(this);
		this.cardClick = this.cardClick.bind(this);

	}
    cardClick(){
		const link = '/project/'+this.props.project._id;

		if(this.props.asLink){
            this.props.history.push(link);
		}
	}
	render_github() {
		if (this.props.project.github_url) {
			return (
				<a target="_blank" href={this.props.project.github_url}>
					<i className="fa fa-2x fa-github " aria-hidden="true" /> Github
				</a>
			);
		} else {
			return (
				<a >
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
		if(this.props.editable){
            this.managingLinks.style.visibility = 'visible';
		}

	}
    onMouseLeave(){
        //console.log('onMouseLeave', this.managingLinks);
        if(this.props.editable) {
            this.managingLinks.style.visibility = 'hidden';
        }
    }
	render() {
		let project = this.props.project;
		// console.log('editable', this.props.editable);
		console.log('ProjectItem: render' );

		return (
			<div onClick={this.cardClick} onMouseEnter={this.onMouseEnter}  onMouseLeave={this.onMouseLeave} className="col  s12 m6 l4">
				<div className="card">
					{this.props.editable &&
					<ProjectManagingLinks
						project={project}
						delete_project={this.props.delete_project}
						edit_project={this.edit_project}
						inputRef={elem => {	this.managingLinks = elem;}}
					/>}




					<div className="card-image">
						<img alt="" src={project.cloudinary_img} />
					</div>
					<div className="card-content">
						<span className="card-title">{project.name}</span>
					</div>
					<div className="card-action">{this.render_github()}</div>
				</div>
			</div>
		);
	}
}

export default withRouter(ProjectItem);
