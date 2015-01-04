Connect-pinba
=============

[![NPM version][NPMVI]][NPMVURL] [![BS][BSI]][BSURL] [![CS][CSI]][CSURL]

[NPMVI]: https://badge.fury.io/js/connect-pinba.png
[NPMVURL]: http://badge.fury.io/js/connect-pinba
[BSI]: https://secure.travis-ci.org/Sannis/connect-pinba.png?branch=master
[BSURL]: http://travis-ci.org/Sannis/connect-pinba
[CSI]: https://coveralls.io/repos/Sannis/connect-pinba/badge.png
[CSURL]: https://coveralls.io/r/Sannis/connect-pinba

-----

**[Pinba] middleware for [Connect] [node.js] framework, using [node-pinba].**

Pinba is a MySQL storage engine that acts as a realtime monitoring/statistics server
using MySQL as a read-only interface.
Connect-pinba brings data automatic statistics sending to Pinba server from your node.js application.

Check out the [Github repo] for the source code.

[Pinba]: http://pinba.org/
[Connect]: https://github.com/senchalabs/connect
[node.js]: http://nodejs.org/
[node-pinba]: https://github.com/Sannis/node-pinba

[Github repo]: https://github.com/Sannis/connect-pinba


Installation
------------

You can install this module via [npm]:

    $> npm install connect-pinba

[npm]: https://github.com/isaacs/npm


Usage
-----

This middleware must be on the first called.

```js
var connect_pinba = require('connect-pinba');
var connect = require('connect');
var server = connect.createServer(
  connect_pinba({
    schema:       'http',
    server_name:  'example.com',
    pinba_server: 'pinbadb.vlan'
  }),
  function(req, res) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
  }
).listen(3000);
```

`connect_pinba` take only one parameter, a hash that will be passed to `Pinba.Request` constructor.
See node-pinba docs for detailed information.


Contributing
------------

To contribute any patches, simply fork this repository using GitHub
and send a pull request to [me](https://github.com/Sannis). Thanks!


License
-------

MIT license. See license text in file [LICENSE](https://github.com/Sannis/connect-pinba/blob/master/LICENSE).
