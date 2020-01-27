import path from 'path'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json'
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
    external: dependency =>
      dependency !== 'src/cli/builder.js' &&
      !(/^\./).exec(dependency) && // isRelative
      !path.isAbsolute(dependency),
    plugins: [
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      json(),
      babel({
        runtimeHelpers: true,
        exclude: /node_modules/
      }),
      executable(),
      isDevelop && run(),
      !isDevelop && terser()
    ].filter(Boolean)
  }
}
