# [Yarus](https://github.com/yarus-app) / [Builder](https://github.com/yarus-app/builder) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/@yarus/builder) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](CONTRIBUTING.md)

Blazing fast, zero configuration node app and libs builder

## Getting Started

### Installing

For [Builder](https://github.com/yarus-app/builder) itself installation is done by executing one command.

```bash
npm install --save-dev @yarus/builder
```

Dependending on your transpiling needs you need Babel with the requires presets/plugins. This is nothing extra to install typically as you might have these things in-place already. Example:

```bash
npm install --save-dev @babel/core @babel/plugin-external-helpers @babel/plugin-transform-runtime
```


## Usage

### Command Line Interface

[Builder](https://github.com/yarus-app/builder) comes with a binary which can be called from within your scripts section in the `package.json` file.

```package.json
"scripts": {
  "prepare": "preppy"
}
```

There is also some amount of parameters you can use if the auto detection of your library does not work out correctly.

  * `--root`          `auto`  The root folder of your project
  * `--output`        `auto`  Override output folder (and package.json entries)
  * `--watch`         `false` Keeps running and rebuilds on any change
  * `--no-sourcemap`  `false` Disables creation of a source map file during processing
  * `-v`, `--verbose` `false` Verbose output mode
  * `-h`, `--help`            Get help
  * `--run`                   Executes the generated binary after creation

### Binary Output(s)

* `src/cli/{cliname}/index.js`
* `src/cli/{cliname}.js`
* `src/cli/index.js`
* `src/cli.js`

### Environment Settings

##  [Contributing](CONTRIBUTING.md)

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to [@yarus](https://github.com/yarus-app) / [Builder](https://github.com/yarus-app/builder).

### [Good First Issues](https://github.com/facebook/jest/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/jest/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started.

### [Code of Conduct](https://code.facebook.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.facebook.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### Contributors

This project exists thanks to [all the people who contribute](https://github.com/yarus-app/builder/graphs/contributors).

---

Made with ❤️ by [Yaroslav Usenko](https://github.com/yar-usenko).
 

It is free software, and may be redistributed under the `MIT License` detailed in the [LICENSE.md](LICENSE.md) file.
