module.exports = api => {
  const caller = api.caller(inst => (inst && inst.name) || 'any');

  const isRollup = caller === 'rollup-plugin-babel';
  const isJest = caller === '@babel/node';

  const modules = isJest || !isRollup ? 'commonjs' : false;

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules,
          useBuiltIns: 'usage',
          corejs: 3,
          exclude: [
            'transform-async-to-generator',
            'transform-template-literals',
            'transform-regenerator'
          ]
        }
      ],
      [
        'babel-preset-minify',
        {
          keepFnName: true,
          keepClassName: true,
          removeDebugger: true
        }
      ]
    ].filter(Boolean),
    plugins: [
      '@babel/plugin-external-helpers',

      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
          helpers: true,
          regenerator: false,
          useESModules: !modules,
          absoluteRuntime: true
        }
      ],
      // Stage 0
      '@babel/plugin-proposal-function-bind',

      // Stage 1
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-logical-assignment-operators',
      ['@babel/plugin-proposal-optional-chaining', { loose: false }],
      ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
      ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
      '@babel/plugin-proposal-do-expressions',

      // Stage 2
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',

      // Stage 3
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-json-strings',

      [
        '@babel/plugin-transform-template-literals',
        {
          spec: true
        }
      ],

      ['@babel/plugin-transform-property-mutators'],

      ['@babel/plugin-transform-member-expression-literals'],

      ['@babel/plugin-transform-property-literals'],

      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          useBuiltIns: true,
          loose: true
        }
      ],

      '@babel/plugin-transform-block-scoping',
      ['module:faster.js']
    ].filter(Boolean),
    sourceMaps: true
  };
};
