import express from 'express';
const router = express.Router();


// DB
 import mongoose from 'mongoose';
import '../db/models/Project';
 const Project = mongoose.model('Project');


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
        if(err){
            console.log(err, 'err');
            res.send(err);
        }
        res.send(data);
        //console.log(data, 'data');
    });


});


router.post('/save_project', (req, res) => {
    const id = req.body._id ;

    // console.log('________save_project PAGE _______' );
    // console.log('BODY', req.body);
    // console.log('Id === ', id);

    //const project = new Project();
    //contact.save().then(data => res.send(data));

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
        new Project({
            name: req.body.name,
            description: req.body.description,
            img: req.body.img,
            demo_url: req.body.demo_url,
            github_url: req.body.github_url
        }).save();
    }

});

export default router;


