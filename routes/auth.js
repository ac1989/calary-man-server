const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', passport.authenticate('github'));

  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/user/logout', (req, res) => {
    req.logout();
    res.send({ user: req.user });
  });
};
