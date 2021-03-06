import express from 'express';
import bodyParser from 'body-parser';
const cookieSession = require('cookie-session');
import cors from 'cors';
//import multer from 'multer';

import * as db from './db/db';
import config from '../config/config.js';

const app = express();

// Set up connection to database
db.setUpConnection();

// Using bodyParser middleware
app.use(bodyParser.json());

//Set cookie
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [config.cookieKey]
	})
);

//Authentication
import passport from 'passport';
import './services/passport';
app.use(passport.initialize());
app.use(passport.session());



// Allow requests from any origin
//app.use(cors({ origin: '*' }));

// Set  port
app.set('port', process.env.PORT || config.serverPort);

// Routers
import api_routes from './routes/api';
import auth_routes from './routes/authRoutes';
import routes from './routes/routes';

app.use('/', routes);
app.use('/api', api_routes);
app.use('/auth', auth_routes);

console.log('NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file

	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	// If express didn't find any route matches listed above,
	// will try to find in client/build
	const path = require('path');
	app.get('*', (req, res) => {
	    console.log('__dirname', __dirname);
		res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
	});
}

app.listen(app.get('port'), () => {
	console.log(`Server is up and running on port ${app.get('port')}`);
});
