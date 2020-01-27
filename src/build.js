import { rollup } from 'rollup';
import importPKG from './import-package-json'

async function build({ root: rootDir = process.cwd() } = {}) {
  // Change to detected root directory
  // This helps rollup plugins e.g. for Babel to use the correct config file.
  process.chdir(rootDir)

  const pkg = await importPKG();

  const options = [
    {
      input: {
        input: 'src/index.js'
      },
      output: {
        file: pkg.main,
        format: 'cjs'
      }
    },
    {
      input: {
        input: 'src/index.js'
      },
      output: {
        file: pkg.module,
        format: 'esm'
      }
    },
    {
      input: {
        input: 'src/index.js'
      },
      output: {
        file: pkg.browser,
        format: 'cjs'
      }
    },
    {
      input: {
        input: 'src/index.js'
      },
      output: {
        file: pkg.unpkg,
        format: 'cjs'
      }
    }
  ]



  const bundels = await Promise.all(
    options.map(({ input }) => rollup(input))
  )

  await Promise.all(
    bundels.map(({ write }, index) => write(options[index]))
  )
}

export default build;
