const ddlog = require('./logger/ddlog');

ddlog.debug('some message', 'hello', 12, {a:'a',b:'b'});
ddlog.info({a:'a', b:'b'});