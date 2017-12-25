import express from 'express';
const router = express.Router();
//import axios from 'axios';

// DB
// import mongoose from 'mongoose';
// import '../db/models/Project';
// const Project = mongoose.model('Project');


router.post('/', (req, res) => {
    console.log('save file', req)
    //res.send('api root route');
    //next();
});

export default router;