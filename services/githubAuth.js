const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ githubID: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ githubID: profile.id })
            .save()
            .then(newUser => done(null, newUser));
        }
      });
    }
  )
);
