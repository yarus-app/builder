module.exports = api => {
  const env = api.env()
  const caller = api.caller((inst) => (inst && inst.name) || "any")

  const isRollup = caller === "rollup-plugin-babel"
  const isJest = caller === "@babel/node"

  const modules = isJest || !isRollup ? "commonjs" : false;

  return {
    presets: [
      ["@babel/preset-env", {
        modules,
        useBuiltIns: "usage",
        corejs: 3,
        exclude: [
          "transform-regenerator",
          "transform-async-to-generator"
        ]
      }
    ],
    ].filter(Boolean),
    plugins: [
      ["@babel/plugin-transform-runtime", {
        corejs: 3,
        helpers: true,
        regenerator: false
      }],
      ["@babel/plugin-proposal-object-rest-spread", {
        useBuiltIns: true,
        loose: true
      }],
      "@babel/plugin-transform-block-scoping",
    ].filter(Boolean),
    sourceMaps: true
  }
}
