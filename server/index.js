import express from 'express';
import bodyParser from 'body-parser';
const cookieSession = require('cookie-session');
import cors from 'cors';
import * as db from './db/db';
import { serverPort, cookieKey } from '../config/config.json';


//DB Models
//import './db/models/User';




// Initialization of express application
const app = express();

//Set cookie
app.use(
    cookieSession({
        maxAge: 30* 24 * 60 * 60 * 1000,
        keys:[cookieKey]
    }));


// Set up connection of database
db.setUpConnection();


//Authentication
import passport from 'passport';
import './services/passport';
app.use(passport.initialize());
app.use(passport.session());


// Using bodyParser middleware
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors({ origin: '*' }));
app.set('port', process.env.PORT || serverPort);

// Routers
import api_routes  from './routes/api' ;
import auth_routes from './routes/authRoutes' ;

app.use('/api', api_routes);
app.use('/auth', auth_routes);

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
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${app.get('port')}`);
});