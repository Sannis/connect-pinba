/*!
 * Copyright by Oleg Efimov
 * and other connect-pinba contributors
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
      req.PinbaRequest.flush({
        data: {
          status: res.statusCode
        }
      });
    });

    return next();
  };
};
