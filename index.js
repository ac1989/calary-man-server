const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/serialize');
require('./services/googleAuth');
require('./services/githubAuth');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({ maxAge: 30 * 24 * 60 * 1000, keys: [keys.cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send({ status: 'OK!' });
});

require('./routes/auth')(app);

// Deployment 01; Get PORT from Heroku env, else use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
