import path from 'path'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import executable from "rollup-plugin-executable";
import run from '@rollup/plugin-run';

export default commandLineArgs => {
  process.chdir(path.resolve(__dirname, '..'))

  const isDevelop = commandLineArgs['watch'];

  return {
    input: 'src/cli/builder.js',
    output: {
      file: 'bin/builder.js',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
      sourcemap: false
    },
    plugins: [
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      babel({
        presets: [
          ['@babel/preset-env', {
            modules: false,
            targets: {
              node: 12
            }
          }]
        ],
        exclude: /node_modules/
      }),
      executable(),
      isDevelop && run(),
      !isDevelop && terser()
    ].filter(Boolean)
  }
}
