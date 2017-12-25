import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from '../actions';
import ProjectItem from './ProjectItem';



class ProjectsList extends Component{
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

    renderList(){
        if (this.props.projects && this.props.projects.length > 0) {
                console.log("LENGTH", this.props.projects.length);

                return this.props.projects.map((item) =>{
                    return (

                        <ProjectItem key={item._id} project={item}/>
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
export default connect(mapStateToProps, {fetchProjects})(ProjectsList);
