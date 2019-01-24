const express = require('express');
const User = require('./User');

const app = express();
const port = 3000;

const user = new User();

app.use(express.static('public'));

app.get('/workout/start', function(req, res) {
  res.send(user.startWorkout());
});

app.get('/workout/end', function(req, res) {
  res.send(user.endWorkout());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
