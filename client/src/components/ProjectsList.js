import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchProjects, delete_project } from '../actions';
import ProjectItem from './ProjectItem';



class ProjectsList extends Component{
    constructor(props){
        super(props);
        this.delete_project = this.delete_project.bind(this);
    }
    componentDidMount(){
        console.log('ProjectsList: componentDidMount');
        this.props.fetchProjects();

    }
    componentWillReceiveProps(nextProps){
        console.log('ProjectsList: componentWillReceiveProps');
    }
    componentWillUpdate(nextProps, nextState){
        console.log('ProjectsList: componentWillUpdate');
    }

    //render here

    componentDidUpdate(prevProps, prevState){
        console.log('ProjectsList: componentDidUpdate');
    }
    delete_project(id){
        console.log('delete_project', id  );
        this.props.delete_project(id);
    }
    renderList(){
        if (this.props.projects && this.props.projects.length > 0) {
                console.log("LENGTH", this.props.projects.length);

                return this.props.projects.map((item) =>{
                    return (

                        <ProjectItem  delete_project={this.delete_project} key={item._id} project={item}/>
                    );
                });
            }else{
                return (

                        <div className="align-center"  >
                            No records to show
                        </div>

                );

            }

    }

    render(){
        console.log('ProjectsList: render');
        console.warn('this.props', this.props);
           return(
                <div className="row">
                    { this.renderList() }
                </div>

            )



    }
}

function mapStateToProps({projects}){
    return {projects};
}
export default connect(mapStateToProps, {fetchProjects, delete_project})(ProjectsList);
