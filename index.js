/**
    @author Nathan Bommezijn
    @description Setting up and serving a local node application
*/

/**
 * @title Declaring requirements & Constants
 * @description calling required packages and creating constants
 * @constant myEnv env variables, expanded with dotenvExpand to make easier URI, USER HAS TO CHANGE IT TO THEIR OWN
 */
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const myEnv = dotenv.config();
dotenvExpand(myEnv);

/**
 * @title delcaration of express requirements
 * @description Create and use express variables to run the application.
 */
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const path = require('path');
const app = express();
const port = 3030;

/* Setup express for EJS */
app.set('view engine', 'ejs');
// Set views folder
app.set('views', path.join(__dirname, 'view'));
// Allow app to get static files from public
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const store = new MongoDBStore({
  uri: process.env.M_URL,
  databaseName: 'dateapp',
  collection: 'sessions',
});
store.on('error', (err) => {
  console.log(`Cannot store session`);
});

app.use(session({
  cookie: {sameSite: true, secure: false},
  name: 'dating-session',
  secret: process.env.ULTRA_SECRET,
  saveUninitialized: true,
  store: store,
  resave: true,
  userRole: 'admin',
}));

/* Import mainRouter && addUser for application */
const mainRouter = require('./route/mainRouter');
const userRouter = require('./route/userRouter');

app.use('/user', userRouter);
/* Express use mainRouter for index level*/
app.use('/', mainRouter);

// Express listens to port 3030 and on start print link
app.listen(process.env.PORT || 3030, () => console.log(`Dating app listening at \x1b[31mhttp://localhost:${port}\x1b[0m`));
