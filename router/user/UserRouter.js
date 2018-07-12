const express = require('express');

var user = express.Router();
user.get('/', (req, res) => {
  res.send('hello, users.');
});

user.get('/profile', (req, res) => {
  res.send('profile');
});

module.exports = user;