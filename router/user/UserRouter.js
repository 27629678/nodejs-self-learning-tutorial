const express = require('express');

var user = express.Router();
user.get('/', (req, res) => {
  res.send('hello, users.');
});

user.get('/:name', (req, res) => {
  // res.send(req.params);
  res.send(req.query);
});

user.get('/profile', (req, res) => {
  res.send('profile');
});

module.exports = user;