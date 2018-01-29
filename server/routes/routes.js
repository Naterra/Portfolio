import express from 'express';
const router = express.Router();



// import appSetUp from '../middlewares/app_setup';

router.get('/', (req, res, next) => {
    //res.send('api root route');
    //console.log('Main dir');
     next();
});

// router.get('/user_exists', (req, res, next) => {
//     //res.send('api root route');
//     next();
// });

export default router;