const requireUser = require('../middleware/requireUser');

module.exports = app => {
  app.get('/api/user', (req, res) => {
    req.user ? res.send(req.user) : res.send({});
  });

  app.post('/api/calculator', requireUser, async (req, res) => {
    console.log(req.user);
    console.log(req.body);
    const {
      height,
      weight,
      age,
      gender,
      activityLevel,
      dietaryGoal
    } = req.body.data;

    req.user.data = req.body.data;

    const user = await req.user.save();
    res.send(user);
  });
};
