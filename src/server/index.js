delete process.env.BROWSER;

process.env.NODE_PATH = 'app';
require('module').Module._initPaths();

require('babel-core/register');
require('babel-polyfill');

require('./koa');
