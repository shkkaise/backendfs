const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    'fs': require.resolve('browserify-fs'),
    'http': require.resolve('http-browserify'),
    'url': require.resolve('url-browserify'),
    'crypto': require.resolve('crypto-browserify'),
    'path': require.resolve('path-browserify'),
    'querystring': require.resolve('querystring-es3'),
    'buffer': require.resolve('buffer'),
    'stream': require.resolve('stream'),
    'zlib': require.resolve('browserify-zlib'),
    'assert': require.resolve('assert')
  })
);
