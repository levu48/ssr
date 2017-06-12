'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _device = require('./device');

Object.keys(_device).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      function get() {
        return _device[key];
      }

      return get;
    }()
  });
});