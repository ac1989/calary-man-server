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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ 'github.id': profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({
          github: {
            id: profile.id,
            username: profile.username
          }
        }).save();
        done(null, newUser);
      }
    }
  )
);
