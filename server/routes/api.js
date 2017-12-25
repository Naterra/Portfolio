import express from 'express';
const router = express.Router();

import axios from 'axios';
import multer from 'multer';
import cloudinary from 'cloudinary';
import fileUploadMiddleware from '../services/fileUploadMiddleware';

import fs from 'fs';

// DB
 import mongoose from 'mongoose';
import '../db/models/Project';
 const Project = mongoose.model('Project');

cloudinary.config({
    cloud_name: 'naterra16',
    api_key: '818861535714572',
    api_secret: 'x1-zgZIok662mQiLibcnGypcfIw',
});


 // const uploadCloudinary =(formData)=>{
 //     console.log('_ _ _ _uploadCloudinary fn _ _ _',formData);
 //
 //
 //     // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
 //     return axios.post("https://api.cloudinary://818861535714572:x1-zgZIok662mQiLibcnGypcfIw@naterra16/", formData, {
 //         headers: { "X-Requested-With": "XMLHttpRequest" },
 //     }).then(response => {
 //         const data = response.data;
 //         const fileURL = data.secure_url; // You should store this URL for future references in your app
 //         console.log('_ _ _ _ Cloudinary RESP:  _ _ _', data);
 //     });
 //
 // };

function uploadCl(file){
    console.log('_ _ _ uploadCl fn _ _ _',file);

    cloudinary.uploader.upload_stream((result) => {

        }).end(req.file.buffer);

    // cloudinary.v2.uploader.upload(file,
    //     function(result){
    //     console.log("___result__", result)
    // });
}


router.get('/', (req, res, next) => {
        //res.send('api root route');
    next();
    });

router.get('/test', (req, res) => {
    console.log('req.body', req.body);
    console.log('req', req);
    res.send('OK');
});

router.get('/get_projects', (req, res) => {
    Project.find( {},(err, data) => {
    //Project.find( {}).lean().exec((err, data) => {
        if(err){
            console.log(err, 'err');
            res.send(err);
        }

        const new_data=[];
        //console.log('DATA +++', data);
        //const  projects = data.toObject(); //turns it into JSON YAY!

        data.forEach((val,index) =>{
            //console.log(val, 'VAL');
            //console.log(index );
const new_item = {

}
            if( typeof val.img.data !== "undefined"){
                const thumb = new Buffer(val.img.data).toString('base64');
                 //console.log("++DATA++", val.img.data  );
                //console.log("THUMB___", thumb  );
            }

            //console.log("++ VAL ______" , val );
            new_data.push(val);
        });

        //console.log('NEW++', new_data);
        //data.thumb = new Buffer(data.img.data).toString('base64');

        res.send(new_data);
        //console.log(data, 'data');
    });


});

var uploads = multer({
    dest: 'public/uploads/'
});

router.post('/save_project', uploads.single('file'), (req, res) => {
    const id = req.body._id ;
    console.log("file +++", req.body);
    //console.log("___uploads___", uploads );

    const file = fs.readFileSync(req.file.path);
    //console.log("___file___", file );

    const img = {
        data:fs.readFileSync(req.file.path),
        contentType: 'image/png'
    };


     console.log("___FPATH___", req.file.path );

    // cloudinary.uploader.upload_stream((result) => {
    //
    // }).end(req.file.buffer);






    // Find and update or create new item
    if(id>=0){
        Project.findOneAndUpdate({_id: id}, req.body,  (err, data) => {
            if(err){
                console.log(err, 'err');
                res.send(err);
            }
            res.send(data);
            console.log(data, 'data');
        });
    }
    // Create New
    else{

        cloudinary.v2.uploader.upload(req.file.path,
            function(error, result) {
                console.log(result)
                console.log('___CL____', result);
               let secure_url = result.url;

                new Project({
                    name: req.body.name,
                    description: req.body.description,
                    img: '',
                    cloudinary_img: secure_url,
                    demo_url: req.body.demo_url,
                    github_url: req.body.github_url
                }).save();

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


