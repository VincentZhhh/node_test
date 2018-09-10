var E = require('events').EventEmitter;
var e = new E();
function fuck(n, x){console.log('oh yeah, come on, %s%s!', n, x)};
e.on('fuck',fuck);
e.emit('fuck', 1, 'whore');