'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _data = require('./data');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var simplifyUsers = function simplifyUsers(collection) {
    return collection.map(function (_ref) {
        var user = _ref.user,
            seed = _ref.seed;
        return _extends({}, user, { seed: seed });
    }).map(function (_ref2) {
        var email = _ref2.email,
            name = _ref2.name,
            seed = _ref2.seed,
            picture = _ref2.picture;
        return { email: email, name: name, seed: seed, picture: picture };
    });
};

function routes(router) {
    var _this = this;

    router.get('/users', function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function () {
            function _callee(ctx) {
                return regeneratorRuntime.wrap(function () {
                    function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    ctx.body = simplifyUsers(_data.users.slice(0, 10));

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }

                    return _callee$;
                }(), _callee, _this);
            }

            return _callee;
        }()));

        return function (_x) {
            return _ref3.apply(this, arguments);
        };
    }());

    router.get('/users/:seed', function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function () {
            function _callee2(ctx) {
                var seed, _simplifyUsers, _simplifyUsers2, result;

                return regeneratorRuntime.wrap(function () {
                    function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    seed = ctx.params.seed;
                                    _simplifyUsers = simplifyUsers(_data.users.filter(function (user) {
                                        return user.seed === seed;
                                    })), _simplifyUsers2 = _slicedToArray(_simplifyUsers, 1), result = _simplifyUsers2[0];

                                    if (!result) {
                                        ctx.body = { error: { message: 'User not found' } };
                                    } else {
                                        ctx.body = result;
                                    }

                                case 3:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }

                    return _callee2$;
                }(), _callee2, _this);
            }

            return _callee2;
        }()));

        return function (_x2) {
            return _ref4.apply(this, arguments);
        };
    }());
}

exports['default'] = routes;
module.exports = exports['default'];