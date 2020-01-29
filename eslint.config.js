module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/babel',
    'prettier/standard',
    'prettier/unicorn'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules', 'bin', 'lib', 'public', '__snapshots__']
};
