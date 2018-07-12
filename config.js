module.exports = {
  log4js: {
    appenders: { file: { type: 'file', filename: 'access.log' },
                 console: { type: 'console' } },
    categories: { default: { appenders: ['file', 'console'], level: 'debug' } }
  }
}