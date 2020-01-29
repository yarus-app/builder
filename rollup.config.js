import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import executable from 'rollup-plugin-executable';
import run from '@rollup/plugin-run';

export default commandLineArgs => {
  const isDevelop = commandLineArgs.watch;

  return [
    {
      input: 'src/cli.js',
      output: {
        file: 'bin/builder.js',
        format: 'cjs',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '../public/[name].[hash][extname]',
        banner: '#!/usr/bin/env node',
        sourcemap: false
      },
      external: dependency =>
        dependency !== 'src/cli.js' &&
        !/^\./.exec(dependency) && // isRelative
        !path.isAbsolute(dependency),
      plugins: [
        resolve(),
        commonjs({
          include: /node_modules/
        }),
        json(),
        babel({
          runtimeHelpers: true,
          externalHelpers: true,
          exclude: /node_modules/
        }),
        executable(),
        isDevelop && run(),
        !isDevelop && terser()
      ].filter(Boolean)
    }

    // {
    //   input: 'src/index.js',
    //   output: [{
    //     {
    //       dir: 'lib',
    //       format: 'esm',
    //       entryFileNames: "[name].mjs",
    //       chunkFileNames: "[name].[hash].mjs",
    //       assetFileNames: "../public/[name].[hash][extname]",
    //       sourcemap: false
    //     },
    //     {
    //       dir: 'lib',
    //       format: 'cjs',
    //       entryFileNames: "[name].js",
    //       chunkFileNames: "[name].[hash].js",
    //       assetFileNames: "../public/[name].[hash][extname]",
    //       esModule: true,
    //       sourcemap: false
    //     }
    //   }],
    //   plugins: [
    //     resolve(),
    //     commonjs({
    //       include: /node_modules/
    //     }),
    //     json(),
    //     babel({
    //       runtimeHelpers: true,
    //       exclude: /node_modules/
    //     }),
    //     !isDevelop && terser()
    //   ].filter(Boolean)
    // }
  ];
};
