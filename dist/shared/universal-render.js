'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = require('../app/components/App');

var _App2 = _interopRequireDefault(_App);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _iso = require('iso');

var _iso2 = _interopRequireDefault(_iso);

var _utils = require('../server/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var bootstrap = function bootstrap() {
    return new Promise(function (resolve) {
        return _iso2['default'].bootstrap(function (initialState, container) {
            return resolve({ initialState: initialState, container: container });
        });
    });
};

exports['default'] = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function () {
        function _callee(ctx) {
            return regeneratorRuntime.wrap(function () {
                function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return setTimeout(function () {}, 1000);

                            case 2:
                                if (!(0, _utils.device)(ctx).isBrowser()) {
                                    _context.next = 6;
                                    break;
                                }

                                return _context.abrupt('return', { body: '\n<!DOCHTML>\n<html>\n<head>\n    <script src="https://unpkg.com/react@latest/dist/react.js"></script>\n    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>\n    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>\n</head>\n<body>\n<div>\n    <h2>Frankly Platform (CLIENT)</h2>\n    <div id=\'app\'></div>\n</div>\n<script type="text/babel">\n    const App = (props) => <h3>An App component</h3>;\n    ReactDOM.render(<App/>, document.getElementById(\'app\'));\n</script>\n</body>\n</html>\n        ' });

                            case 6:
                                return _context.abrupt('return', { body: 'Frankly Platform (SERVER)\n' });

                            case 7:
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