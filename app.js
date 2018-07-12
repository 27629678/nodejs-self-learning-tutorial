const ddlog = require('./logger/ddlog');
const express = require('express');

const app = express();

// express middleware
// config static resources, such as image, css, javascripts
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello, world.');
});

app.listen(3000, () => {
  ddlog.info('server running on port 3000');
});