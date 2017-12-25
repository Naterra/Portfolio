import React, { Component } from "react";
import _ from 'lodash';
import axios from 'axios';
import validateEmails from "../../utils/validateEmails";
// Redux
import { connect } from "react-redux";
import { saveProject, fetchProject } from "../../actions";
import { Field, reduxForm } from "redux-form";

// Fields
import formFields from "./projectFormFields";
//import FileInput from "./FileInput";
import formFieldsTempl from "./formFieldTempl";


// const customFileInput = (field) => {
//    // delete field.input.value; // <-- just delete the value property
//     const {fields: {avatar}} = this.props;
//
//     return <input type="file" id="file" {...field.input} />;
// };

const UploadFile = ({ input: {value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
    <input type='file' {...inputProps} {...props} />
);


class ProjectForm extends Component {
    formSubmit(values) {
        //console.log('FORM val', values);
        //
        //
         const data = new FormData();
         data.append('file', values.file[0]);
         data.append('name', values.name);
         data.append('description', values.descr);
         data.append('demo_url', values.demo_url);
         data.append('github_url', values.github_url);
        //values.file = values.file[0];

        console.log('FORM data', data);

        this.props.saveProject(data, () => {
            this.props.formSubmittedCallback(data);
        });
    }

    // handleUploadFile (event) {
    //     const data = new FormData();
    //     data.append('file', event.target.files[0]);
    //     data.append('name', 'some value user types');
    //     data.append('description', 'some value user types');
    //     // '/files' is your node.js route that triggers our middleware
    //     axios.post('/api/files', data).then((response) => {
    //         console.log(response); // do something with the response
    //     });
    // }

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



                    <Field
                        name='file'
                        accept='.jpg'
                        component={UploadFile}
                    />

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