import React, { Component } from "react";
import _ from 'lodash';
import validateEmails from "../../utils/validateEmails";
// Redux
import { connect } from "react-redux";
import { saveProject, fetchProject } from "../../actions";
import { Field, reduxForm } from "redux-form";

// Fields
import formFields from "./projectFormFields";
import formFieldsTempl from "./formFieldTempl";

class ProjectForm extends Component {
    formSubmit(values) {
        this.props.saveProject(values, () => {
            this.props.formSubmittedCallback(values);
        });
    }

    renderFields(array = []) {
        return array.map(field => {
            return (
                <Field
                    key={field.name}
                    name={field.name}
                    component={formFieldsTempl}
                    label={field.label}
                    type={field.type ? field.type : "text"}
                />
            );
        });
    }
    renderContent() {
        const { handleSubmit } = this.props;

        return (
            <div className="row">
                <form
                    className="col s12"
                    onSubmit={handleSubmit(this.formSubmit.bind(this))}
                >
                    <div className="row">
                        <div className="col s12"> {this.renderFields(formFields)}</div>
                    </div>




                    <button type="submit" className="teal btn-flat right white-text">
                        Save
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }

    render() {
        return <div>{this.renderContent()}</div>;
    }
}

function mapStateToProps({ selected_contact }) {
    return {
        initialValues: selected_contact
    };
}

function validate(values) {
    const errors = {};

    //Find all required fields
    let required_fields = formFields.filter(elem => {
        return elem.reguired === true;
    });

    _.each(required_fields, ({ name }) => {
        if (!values[name]) {
            errors[name] = "You must provide a value";
        }
    });

    errors.Email = validateEmails(values.Email || "");
    return errors;
}

export default connect(mapStateToProps, { fetchProject, saveProject })(
    reduxForm({
        form: "ProjectForm",
        validate: validate,
        enableReinitialize: false,
        keepDirtyOnReinitialize: false
    })(ProjectForm)
);