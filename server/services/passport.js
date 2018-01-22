import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
GoogleStrategy.Strategy;
import config from '../../config/config.js';
import mongoose from 'mongoose';

//Pull out User data out of mongoose
//DB Models
import '../db/models/User';
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: config.googleAuth.googleClientId,
			clientSecret: config.googleAuth.googleClientSecret,
			callbackURL: config.googleAuth.callbackURL,
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				done(null, existingUser);
			} else {
                const records = await User.count();
                if(records>=1){
                	//Do not create a new user, because this App is a single user App
                    done(null, false, {message: "App User already exists"});
				}else{
                    const user = await new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile._json.emails[0].value,
                        gender: profile.gender,
                        image: profile._json.image.url
                    }).save();
                    done(null, user);
				}

			}
		}
	)
);
