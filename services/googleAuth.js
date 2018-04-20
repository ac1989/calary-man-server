const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ 'google.id': profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({
          google: {
            id: profile.id,
            username: profile.displayName
          }
        }).save();
        done(null, newUser);
      }
    }
  )
);
