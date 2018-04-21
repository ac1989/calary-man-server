const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
    (req, res) => res.redirect('/intake')
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/auth/github', passport.authenticate('github'));

  app.get(
    '/auth/github/callback',
    passport.authenticate('github'),
    (req, res) => res.redirect('/intake')
  );

  app.get('/api/user', (req, res) => {
    req.user ? res.send(req.user) : res.send({});
  });

  app.get('/api/user/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
