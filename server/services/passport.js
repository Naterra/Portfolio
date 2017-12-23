import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
GoogleStrategy.Strategy;
import   { googleAuth }  from '../../config/config.json';
import mongoose from 'mongoose';



//Pull out User data out of mongoose
//DB Models
import '../db/models/User';
const User = mongoose.model('User');


passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    User.findById(id)
        .then( user =>{
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: googleAuth.googleClientId,
            clientSecret: googleAuth.googleClientSecret,
            callbackURL: googleAuth.callbackURL,
            proxy:true
        },
        async (accessToken, refreshToken, profile, done) =>{
            const existingUser = await User.findOne({ googleId: profile.id});

             if(existingUser){
                 done(null, existingUser );
             }else{
                 const user = await new User({ googleId: profile.id}).save();
                 done(null, user );
             }

        }
));

