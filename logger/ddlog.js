const log4js = require('log4js');
const config = require('./../config');
var logger = log4js.getLogger();
log4js.configure(config.log4js);

module.exports = {
  debug: function (message, ...args) {
    logger.debug(message, ...args);
  },

  info: function (message, ...args) {
    logger.info(message, ...args);
  }
}