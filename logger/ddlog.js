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
  },

  error: function (message, ...args) {
    logger.error(message, ...args);
  },

  fatal: function (message, ...args) {
    logger.fatal(message, ...args);
  },

  trace: function (message, ...args) {
    logger.trace(message, ...args);
  }
}