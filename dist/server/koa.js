'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _clientRouter = require('./client-router');

var _clientRouter2 = _interopRequireDefault(_clientRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = new _koa2['default']();

app.use(function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function () {
        function _callee(ctx, next) {
            var start, ms;
            return regeneratorRuntime.wrap(function () {
                function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                start = new Date();
                                _context.next = 3;
                                return next();

                            case 3:
                                ms = new Date() - start;

                                ctx.set('X-Response-Time', ms + 'ms');

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }

                return _callee$;
            }(), _callee, this);
        }

        return _callee;
    }()));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

app.use(function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function () {
        function _callee2(ctx, next) {
            var start, ms;
            return regeneratorRuntime.wrap(function () {
                function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                start = new Date();
                                _context2.next = 3;
                                return next();

                            case 3:
                                ms = new Date() - start;

                                console.log(String(ctx.method) + ' ' + String(ctx.url) + ' - ' + ms);

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }

                return _callee2$;
            }(), _callee2, this);
        }

        return _callee2;
    }()));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

var apiRouter = new _koaRouter2['default']({ prefix: '/api' });
require('./api/routes')(apiRouter);
app.use(apiRouter.routes());

app.use(_clientRouter2['default']);

app.listen(4000);
console.log("Koa server listens to port: 4000");