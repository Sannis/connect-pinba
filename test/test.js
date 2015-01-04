/*!
 * Copyright by Oleg Efimov
 * and other connect-pinba contributors
 *
 * See license text in LICENSE file
 */

/*global describe, it*/

var assert = require("assert");

var sinon = require("sinon");

var EventEmitter = require('events').EventEmitter;

var Pinba = require('pinba');

var ConnectPinba = require(process.env.LIB_COV ? '../lib-cov/index' : '../lib/index');

describe('ConnectPinba', function () {
  it('should be a function', function () {
    assert.ok(typeof ConnectPinba === 'function');
  });

  it('that returns a ConnectPinbaHandler function', function () {
    var ConnectPinbaHandler = ConnectPinba();

    assert.ok(typeof ConnectPinbaHandler === 'function');
  });

  describe('ConnectPinbaHandler', function () {
    it('should start Pinba time or request and flush it on finish with status code', function (done) {
      var ConnectPinbaHandler = ConnectPinba();

      var req = {};
      var res = new EventEmitter();

      ConnectPinbaHandler(
        req,
        res,
        function () {
          assert.ok(req.PinbaRequest instanceof Pinba.Request);

          var pr_flush_stub = sinon.stub(req.PinbaRequest, "flush");

          res.statusCode = 302;
          res.emit('finish');

          assert.ok(pr_flush_stub.calledOnce);
          assert.deepEqual([{data: {status: 302}}], pr_flush_stub.firstCall.args);

          pr_flush_stub.restore();

          done();
        }
      );
    });
  });
});
