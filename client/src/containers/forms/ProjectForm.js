import React, { Component } from 'react';
import _ from 'lodash';

import validateEmails from '../../utils/validateEmails';
// Redux
import { connect } from 'react-redux';
import { saveProject, fetchProject } from '../../actions';
import { Field, reduxForm } from 'redux-form';

// Fields
import formFields from './projectFormFields';
import formFieldsTempl from './formFieldTempl';

import AvatarEditor from 'react-avatar-editor';

// const UploadFile = ({ input: { value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
// 	<input type="file" {...inputProps} {...props} />
// );

const TextAreaField = ({ input, label, meta: omitMeta, ...props }) => (
	<div className="row">
		<div className="input-field">
			<label>{label}</label>
			<textarea {...input} id="textarea1" className="materialize-textarea" {...props} rows="10" cols="40" />
		</div>
	</div>
);

class ProjectForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			allowZoomOut: false,
			position: { x: 0.5, y: 0.5 },
			scale: 1,
			rotate: 0,
			borderRadius: 0,
			preview: null,
			width: 200,
			height: 200
		};
	}

	formSubmit(values) {
		//console.log('FORM val', values);

		const data = new FormData();
		// if(values.file){
		//     data.append('file', values.file[0]);
		// }

		//Avatar crop
		//data.append('file', this.state.image);
		if (this.state.preview) {
			data.append('file', this.state.preview.img);
		}
		data.append('_id', values._id);
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
					type={field.type ? field.type : 'text'}
				/>
			);
		});
	}

	// image_field(){
	//      const isMyObjectEmpty = this.props.initialValues ? !Object.keys(this.props.initialValues).length : true ;
	//
	//
	//     if( !isMyObjectEmpty &&
	//         typeof this.props.initialValues.cloudinary_img !== null &&
	//         this.props.initialValues.cloudinary_img.length>0 ){
	//         //console.log('++ cloudinary_img length',   this.props.initialValues.cloudinary_img.length);
	//         return(
	//             <div className="row">
	//                 <img className="responsive-img" src={this.props.initialValues.cloudinary_img} />
	//             </div>
	//         )
	//     }else{
	//         return(
	//             <Field name="file" accept=".jpg" component={UploadFile} />
	//         )
	//     }
	//
	// }
	//for img crop
	handleSave = data => {
		const img = this.editor.getImageScaledToCanvas().toDataURL();
		const rect = this.editor.getCroppingRect();

		this.setState({
			preview: {
				img,
				rect,
				scale: this.state.scale,
				width: this.state.width,
				height: this.state.height,
				borderRadius: this.state.borderRadius
			}
		});
	};
	handleNewImage = e => {
		this.setState({ image: e.target.files[0] });
		this.handleSave();
	};
	//for img crop
	setEditorRef = editor => {
		if (editor) this.editor = editor;
	};
	image_crop_field() {
		const isMyObjectEmpty = this.props.initialValues ? !Object.keys(this.props.initialValues).length : true;

		{
			if (isMyObjectEmpty) {
				return (
					<div>
						<AvatarEditor
							ref={this.setEditorRef}
							image={this.state.image || '../../../../public/cat.jpg'}
							width={450}
							height={250}
							border={50}
							color={[255, 255, 255, 0.6]} // RGBA
							scale={1}
							rotate={0}
						/>
						<input name="newImage" type="file" onChange={this.handleNewImage} />
						<input type="button" onClick={this.handleSave} value="Preview" />

						<br />
						{!!this.state.preview && (
							<img
								src={this.state.preview.img}
								style={{
									borderRadius: `${(Math.min(this.state.preview.height, this.state.preview.width) + 10) *
										(this.state.preview.borderRadius / 2 / 100)}px`
								}}
							/>
						)}
					</div>
				);
			} else {
				return (
					<div className="row">
						<img className="responsive-img" src={this.props.initialValues.cloudinary_img} />
					</div>
				);
			}
		}
	}

	renderContent() {
		const { handleSubmit } = this.props;

		return (
			<div className="row">
				<form className="col s12" onSubmit={handleSubmit(this.formSubmit.bind(this))}>
					<div className="row">
						<div className="col s12"> {this.renderFields(formFields)}</div>
					</div>

					<Field component={TextAreaField} name="descr" label="Description"/>

					{this.image_crop_field()}

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

function mapStateToProps({ selected_project }) {
	return {
		initialValues: selected_project
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
			errors[name] = 'You must provide a value';
		}
	});

	errors.Email = validateEmails(values.Email || '');
	return errors;
}

export default connect(mapStateToProps, { fetchProject, saveProject })(
	reduxForm({
		form: 'ProjectForm',
		validate: validate,
		enableReinitialize: true,
		keepDirtyOnReinitialize: false,
		destroyOnUnmount: true
	})(ProjectForm)
);
