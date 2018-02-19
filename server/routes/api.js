import express from 'express';
const router = express.Router();

import axios from 'axios';
import multer from 'multer';
import cloudinary from 'cloudinary';

import fs from 'fs';

// DB
import mongoose from 'mongoose';
import '../db/models/Project';
const Project = mongoose.model('Project');

cloudinary.config({
	cloud_name: 'naterra16',
	api_key: '818861535714572',
	api_secret: 'x1-zgZIok662mQiLibcnGypcfIw'
});

router.get('/', (req, res, next) => {
	//res.send('api root route');
	next();
});

router.get('/test', (req, res) => {
	console.log('req.body', req.body);
	console.log('req', req);
	res.send('OK');
});

// Get single project
router.get('/fetch_project/:id', (req, res) => {
    const id = req.params.id;
    console.log('id++++', id);

    Project.findById(id, (err, data) => {
        if (err) {
            console.log(err, 'err');
            res.send(err);
        }
        res.send(data);
    });
});

// Get all projects
router.get('/get_projects', (req, res) => {
	Project.find({}, null, { sort: { _id: -1 } }, (err, data) => {
		if (err) {
			console.log(err, 'err');
			res.send(err);
		}
		res.send(data);
	});
});

var uploads = multer({
	dest: './uploads/'
});

router.post('/delete_project', (req, res) => {
	const id = req.body.id;

	Project.findByIdAndRemove(
		{
			_id: id
		},
		function(err, project) {
			//console.log('project', project);
			res.send({ status: 'ok' });
		}
	);
});

router.post('/save_project', uploads.single('file'), (req, res) => {
	const id = req.body._id != "undefined" ? req.body._id : null;
    console.log('ID', id);


	//File Uploading
	if (req.file) {
		// const file = fs.readFileSync(req.file.path);
		// const img = {
		//     data:fs.readFileSync(req.file.path),
		//     contentType: 'image/png'
		// };
	}

	// Find and update or create new item
	// Update Project
	if (id) {
	    console.log('update record', id);
		Project.findOneAndUpdate({ _id: id }, req.body, (err, data) => {
			if (err) {
				console.log(err, 'err');
				res.send(err);
			}
			res.send(data);
			console.log(data, 'data');
		});
	} else {
        console.log('create record', id);
		// Create New Project
		//req.file.path
		//Data URI up to 60MB
		cloudinary.v2.uploader.upload(req.body.file, function(error, result) {
			// console.log(result)
			// console.log('___CL____', result);
			if (error) {
				res.send({ err: error });
			}
			if (result) {
				let secure_url = result.url;

				new Project({
					name: req.body.name,
					description: req.body.description,
					img: '',
					cloudinary_img: secure_url,
					demo_url: req.body.demo_url != "undefined" ? req.body.demo_url: '',
					github_url: req.body.github_url != "undefined" ? req.body.github_url: ''
				}).save();

				res.send(req.body);
			}
		});
	}
});

// FILE Uploader
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// router.post('/files', uploads.single('file'), function(req,res){
//     console.log("file +++", req.file);
//
//     var newItem = new Project();
//     newItem.img.data = fs.readFileSync(req.file.path)
//     newItem.img.contentType = 'image/png';
//     newItem.save();
// });

export default router;
