/*!
 * Copyright by Oleg Efimov
 * and other connect-pinba contributors
 *
 * See contributors list in README
 *
 * See license text in LICENSE file
 */

var Pinba = require('pinba');

module.exports = function ConnectPinba (options) {
  options = options || {};

  var PinbaRequest = new Pinba.Request(options);

  return function ConnectPinbaHandler (req, res, next) {
    req.PinbaRequest = PinbaRequest;

    res.on('finish', function() {
      req.PinbaRequest.flush();
    });

    return next();
  };
};
