/*!
 * Copyright by Oleg Efimov
 * and other node-pinba contributors
 *
 * See contributors list in README
 *
 * See license text in LICENSE file
 */

var connect_pinba = require('../');
var connect = require('connect');
var server = connect.createServer(
  connect_pinba({
    schema:       'http',
    server_name:  'connect-pinba.tld',
    pinba_server: 'cpp1.d3'
  }),
  function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  }
).listen(3000);
