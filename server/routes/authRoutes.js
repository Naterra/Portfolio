import passport from 'passport';

import express from 'express';
const router = express.Router();

import auth_rules from '../middlewares/auth_rules';
import appSetUp from '../middlewares/app_setup';


router.get('/google',
    passport.authenticate('google',{
        scope: ['profile', 'email'],
        prompt: 'select_account'
    })
);

// router.get('/google_signup',
//     passport.authenticate('google',{
//         scope: ['profile', 'email'],
//         prompt: 'select_account'
//     })
// );

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/user_exist' }),
    (req, res) =>{
        res.redirect('/');
    });


router.get('/logout', (req, res) =>{
    //.logout attached automatically by passport
    req.logout();
    res.redirect('/');
});


router.get('/fetch_user', (req, res) =>{
    //console.log('USER', req.user);
    res.send(req.user);
});



export default router  ;