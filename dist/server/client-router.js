'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _universalRender = require('../shared/universal-render');

var _universalRender2 = _interopRequireDefault(_universalRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports['default'] = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function () {
        function _callee(ctx) {
            var _ref2, body;

            return regeneratorRuntime.wrap(function () {
                function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _universalRender2['default'])(ctx);

                            case 2:
                                _ref2 = _context.sent;
                                body = _ref2.body;

                                ctx.body = body;

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

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = exports['default'];