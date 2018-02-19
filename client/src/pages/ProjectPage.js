import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/Footer';
import { fetchProject } from '../actions';

class ProjectPage extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('this', this);
        const id = this.props.match.params.id;
        this.props.fetchProject(id);
    }
    render(){

        console.log('selected_project', this.props.selected_project);
        return <div>
            <Header />
            <div className="container">
                <h4 className="left-align">{ this.props.selected_project.name}</h4>


                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-image">
                                <img src={this.props.selected_project.cloudinary_img} />
                                    <span className="card-title">Card Title</span>
                            </div>


                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <p>{this.props.selected_project.description}</p>
                </div>


            </div>
            <Footer />
        </div>
    }
}

function mapStateToProps(state){
    return {selected_project: state.selected_project};
}
export default connect(mapStateToProps, {fetchProject})(ProjectPage);