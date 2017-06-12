'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.device = device;

var _useragent = require('useragent');

var _useragent2 = _interopRequireDefault(_useragent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function device(koaCtx) {
    var browsers = ['chrome', 'firefox', 'safari', 'ie', 'opera', 'mozzilla'];
    var mobileDevices = ['android', 'mobile-safari'];
    var userAgentStr = koaCtx.request.header['user-agent'];

    return {
        isBrowser: function () {
            function isBrowser() {
                return browsers.filter(function (name) {
                    return _useragent2['default'].is(userAgentStr)[name] === true;
                }).length > 0;
            }

            return isBrowser;
        }(),
        isMobile: function () {
            function isMobile() {
                return mobileDevices.filter(function (name) {
                    return _useragent2['default'].is(userAgentStr)[name] === true;
                }).length > 0;
            }

            return isMobile;
        }()
    };
}