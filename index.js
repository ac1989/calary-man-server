const express = require('express');
require('./services/googleAuth');

const app = express();

app.get('/', (req, res) => {
  res.send({ status: 'OK!' });
});

require('./routes/auth')(app);

// Deployment 01; Get PORT from Heroku env, else use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
