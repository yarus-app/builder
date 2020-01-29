const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  testMatch: ['**/test/esnext/*.test.js'],
  testEnvironment: 'node',
  testTimeout: 20000,
  transform: {
    '\\.js$': 'babel-jest'
  }
};
