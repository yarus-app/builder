import { readFile } from "fs"
import { resolve } from "path"
import pify from "pify"
import rimraf from "rimraf"

import build from '../../src/build';

const lazyRead = pify((path, callback) => readFile(resolve(__dirname, path), "utf8", callback))
const lazyDelete = pify(rimraf)

test("Publish Test File via Babel", async () => {
  await build({ root: __dirname })

  expect(await lazyRead('lib/index.js')).toMatchSnapshot("node-cjs")
  expect(await lazyRead('lib/index.mjs')).toMatchSnapshot("node-esm")
  expect(await lazyRead("public/index.umd.js")).toMatchSnapshot("browser-umd")
  expect(await lazyRead("public/index.js")).toMatchSnapshot("browser-cjs")
})
