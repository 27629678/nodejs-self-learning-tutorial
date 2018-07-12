const ddlog = require('./logger/ddlog');
const express = require('express');

const app = express();

// express middleware
// config static resources, such as image, css, javascripts
app.use(express.static('public'));

// WARN:(hzyuxiaohua) can call express.static middleware function multiple times
// app.use(express.static('file'));

app.use((req, res, next) => {
  ddlog.info(req.ip + ' ' + req.method + ' ' + req.url);
  
  // seting local variables here
  res.locals.xxx = 'xxx';
  next();
});

// user router
app.use('/user', require('./router/user/UserRouter'));

app.get('/', require('./views/index'));

app.listen(3000, () => {
  ddlog.info('server running on port 3000');
});